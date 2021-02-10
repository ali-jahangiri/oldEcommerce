import React from "react";
import { connect } from "react-redux";

import incress from "../store/selectore/incress";
import { add, incressItem } from "../store/shop";

const CollProduct = ({
  value: { name, price, imageUrl, id },
  add,
  state,
  incressItem,
}) => (
  <div className="col-md-3 col-sm-6 coll">
    <img src={imageUrl} className="img-shop-card" />
    <span
      onClick={() =>
        incress(state, id)
          ? incressItem({ id })
          : add({ id, price, imageUrl, name })
      }
      className="shop__now"
    >
      Shop Now
    </span>
    <div className="coll__details">
      <p>{name}</p>
      <p>{price}$</p>
    </div>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  add: (para) => dispatch(add(para)),
  incressItem: (para) => dispatch(incressItem(para)),
});
const mapStateTodispatch = ({ shop }) => ({
  state: shop,
});
export default connect(mapStateTodispatch, mapDispatchToProps)(CollProduct);
