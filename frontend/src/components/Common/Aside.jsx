import React from "react";
import dashboard_white from "../../assets/img/dashboard_white_48dp.png";
import list_alt_white from "../../assets/img/list_alt_white_48dp.png";

import account_circle from "../../assets/img/account_circle_white.png";

export default function Aside() {
  return (
    <>
      <aside className="menuV">
        <a href="dashboard.html">
          <img src={dashboard_white} alt="" /> Dash board
        </a>
        <a href="list.html">
          <img src={list_alt_white} alt="" /> Transaction list
        </a>
        <a href="account.html">
          <img src={account_circle} alt="" /> My account
        </a>
      </aside>
      <aside className="menuV1">
        <a href="dashboard.html">
          <img src={dashboard_white} alt="" />
        </a>
        <a href="list.html">
          <img src={list_alt_white} alt="" />{" "}
        </a>
        <a href="account.html">
          {" "}
          <img src={account_circle} alt="" />
        </a>
      </aside>
    </>
  );
}
