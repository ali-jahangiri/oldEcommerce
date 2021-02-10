import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/base/base.css";

const Item = ({ col, name, bg, history }) => {
  return (
    <div
      onClick={() => history.push(`/shop/${name}`)}
      className={`col-md-${col} curser`}
    >
      <div className={`col-12 content ${bg}`}>
        <div className="info">
          <h3>{name}</h3>
          <span>Shop Now</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Item);
