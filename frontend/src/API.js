import axios from "axios";
export const LOGIN_USER_KEY = "HOME_LOGIN_USER_KEY";

var baseURL;
if (
  process.env.REACT_APP_ENVIRONMENT &&
  process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
) {
  baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  baseURL = "http://127.0.0.1:8000//";
}
// baseURL = "https://budget-backend-prod.herokuapp.com/";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
  (config) => {
    if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
      config.headers.common["Authorization"] = JSON.parse(
        localStorage.getItem(LOGIN_USER_KEY)
      ).token;
    }

    return config;
  },
  (err) => {
    console.error(err);
  }
);

export default class API {
  signUp = async (user_name, email, password) => {
    console.log("connectin backend");
    const savedPost = await api
      .post("/users/signup/", {
        user_name: user_name,
        email: email,
        password: password,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };

  signIn = async (email, password) => {
    const savedPost = await api
      .post("/users/signin/", {
        email: email,
        password: password,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };

  //Get Category

  getCategory = async () => {
    const category = await api
      .get("/category/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return category;
  };
}
