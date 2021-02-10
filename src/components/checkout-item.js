import React from "react";
import { connect } from "react-redux";
import { decressItem, incressItem, remove } from "../store/shop";

const CheckOutItem = ({
  info: { name, imageUrl, price, quantity, id },
  incressItem,
  decressItem,
  remove,
}) => {
  return (
    <div className="checkout__item">
      <img src={imageUrl} className="checkout__item__img" />
      <span>{name}</span>
      <span>${price}</span>
      <div className="quantity__control">
        <i onClick={() => decressItem({ id })} className="fa fa-angle-left"></i>
        <span>{quantity}</span>
        <i
          onClick={() => incressItem({ id })}
          className="fa fa-angle-right"
        ></i>
      </div>
      <span onClick={() => remove({ id })} className="remove__checkout">
        X
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  incressItem: (para) => dispatch(incressItem(para)),
  decressItem: (para) => dispatch(decressItem(para)),
  remove: (para) => dispatch(remove(para)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
