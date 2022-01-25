import React from "react";
import dashboard_white from "../../assets/img/dashboard_white_48dp.png";
import list_alt_white from "../../assets/img/list_alt_white_48dp.png";

import account_circle from "../../assets/img/account_circle_white.png";

export default function Aside() {
  return (
    <>
      <aside className="menu-left">
        <ul>
          <a href="dashboard">
            <li className="active-menu">
              <img src={dashboard_white} alt="" />
              <span>Dashboard</span>
            </li>
          </a>
          <a href="transation">
            <li>
              <img src={list_alt_white} alt="" />
              <span> Transaction list</span>
            </li>
          </a>
          <a href="SignUp">
            <li>
              <img src={account_circle} alt="" />
              <span> My account </span>
            </li>
          </a>
        </ul>
      </aside>
    </>
  );
}
