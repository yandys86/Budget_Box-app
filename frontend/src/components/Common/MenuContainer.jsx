import React from "react";
import usericon from "../../assets/img/user-icon.png";
const MenuContainer = () => {
  return (
    <div>
      <div className="menu-container">
        <ul className="user-menu">
          <div class="profile-highlight">
            <img src={usericon} alt="profile-img" width="36" height="36" />
            <div class="details">
              <div id="profile-name">user1</div>
              <div id="profile-footer">user1@user1.com</div>
            </div>
          </div>
          <li class="user-menu__item">
            <a class="user-menu-link" href="/SignUp">
              <div>Edit Profile</div>
            </a>
          </li>
          <li class="user-menu__item">
            <a class="user-menu-link" href="/SignUp">
              <div>View Profile</div>
            </a>
          </li>

          <div class="footer">
            <li class="user-menu__item">
              <a class="user-menu-link" href="/">
                Logout
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MenuContainer;
