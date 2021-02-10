import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import ShopingCard from "./shop-card";
import DropCard from "./dropdown";

const Menu = (props) => (
  <div className="custom__nav container-fluid ">
    <div onClick={() => props.history.push("/")} className="icon__shape"></div>
    <div className="links">
    
      <NavLink to="/shop" activeClassName="active__link">
        Shop
      </NavLink>
      <NavLink to="/conect" activeClassName="active__link">
        Conect
      </NavLink>
      <NavLink to="/sing" activeClassName="active__link">
        Sing
      </NavLink>
      <div className="basket"></div>
    </div>
    <ShopingCard />
    <DropCard />
  </div>
);
export default withRouter(Menu);
