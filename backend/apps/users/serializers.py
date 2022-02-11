from dataclasses import field, fields
from distutils import errors
from distutils.log import error
import profile

from platformdirs import user_cache_dir
from .models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password, check_password
from secrets import token_hex
import datetime


class UserSerializer(serializers.ModelSerializer):
    profile = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('name', 'email', 'password', 'budget', 'profile'
                  'token', 'token_expires_at')


class UserUpdateSerializer(serializers.ModelSerializer):
    profile = serializers.ImageField(required=False)

    def validate(self, data):
        errors = {}
        if 'name' not in data or not data['name']:
            errors['name'] = ['name is required']

        if 'email' not in data or not data['email']:
            errors['emai'] = ['email is required']
        if bool(errors):
            raise serializers.ValidationError(errors)

        return data

    class Meta:
        model = User
        fields = ('id', 'name', 'profile', 'email',
                  'token', 'token_expires_at')


class UserUpdateBugetSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True)

    def validate(self, data):
        errors = {}
        if 'budget' not in data or not data['budget']:
            errors['budget'] = ['budget is required']

        if bool(errors):
            raise serializers.ValidationError(errors)

        return data

    class Meta:
        model = User
        fields = ('id', 'budget')


class UserSignUpSerializer(serializers.ModelSerializer):
    email = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)
    token_expires_at = serializers.DateTimeField(read_only=True)
    profile = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ('name', 'email', 'profile', 'password', 'budget',
                  'token', 'token_expires_at')

    # Override the create method
    def create(self, validated_data):
        # Encrypt the password
        validated_data['password'] = make_password(validated_data['password'])

        # Create a token
        validated_data['token'] = token_hex(30)
        validated_data['token_expires_at'] = datetime.datetime.now(
        ) + datetime.timedelta(days=7)

        return super().create(validated_data)


class UserSignInSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)
    token_expires_at = serializers.DateTimeField(read_only=True)
    profile = serializers.ImageField(read_only=True)

    class Meta:
        model = User
        fields = ('user', 'email', 'password',
                  'token', 'token_expires_at', 'profile')

    # Override the create method
    def create(self, validated_data):
        user = User.objects.filter(email=validated_data['email'])

        # Check the password
        if len(user) > 0 and check_password(validated_data['password'], user[0].password):
            # Token
            user[0].token = token_hex(30)
            # Token expires after 7 days
            user[0].token_expires_at = datetime.datetime.now() + \
                datetime.timedelta(days=7)
            user[0].save()

            # Return user information
            return user[0]
        else:
            # Raise error
            raise serializers.ValidationError(
                {"error": "The password or email is incorrect."})
