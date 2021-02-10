import React from "react";

import Item from "../components/Item";

const Directory = () => (
  <div>
    <div className="row my-3">
      <Item col="4" name="Hats" bg="bgc-blue" />
      <Item col="4" name="Jackets" bg="bgc-yellow" />
      <Item col="4" name="Sneakers" bg="bgc-red" />
    </div>
    <div className="row my-3">
      <Item col="6" name="Womens" bg="bgc-green" />
      <Item col="6" name="Mens" bg="bgc-pink" />
    </div>
  </div>
);

export default Directory;
