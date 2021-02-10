import React from "react";
import { connect } from "react-redux";

import PreviewItem from "../components/preview";

const ShopPage = ({ state: { shopItems } }) => (
  <div className="container">
    <div className="row">
      {shopItems.map((el) => (
        <PreviewItem info={el} key={el.id} />
      ))}
    </div>
  </div>
);
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps)(ShopPage);
