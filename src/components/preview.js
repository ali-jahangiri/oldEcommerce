import React from "react";

import CollProduct from "./Col-product";

const PreviewItem = ({ info: { title, items } }) => (
  <div className="col-md-12 my-4">
    <h2>{title}</h2>
    <div className="row ">
      {items.map((el) => (
        <CollProduct key={el.id} value={el} />
      ))}
    </div>
  </div>
);
export default PreviewItem;
