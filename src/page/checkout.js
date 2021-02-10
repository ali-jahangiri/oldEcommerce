import React from "react";
import { connect } from "react-redux";
import CheckOutItem from "../components/checkout-item";
import { cost } from "../store/selectore/getstatetoprops";
const CheckOut = ({ state }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 m-auto">
          {state.length ? (
            <div>
              <div className="header-checkout">
                <div className="checkout__title">
                  <span>Product</span>
                  <span>Describtions</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Remove</span>
                </div>
              </div>
              <div className="item__body">
                {state.map((el) => (
                  <CheckOutItem key={el.id} info={el} />
                ))}
              </div>
              <div className="total__cost">
                <span>Total {cost(state)} $</span>
              </div>
            </div>
          ) : (
            <div className="checkout__empty">
              Your checkout list is Empty...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  state: state.shop,
});

export default connect(mapStateToProps)(CheckOut);
