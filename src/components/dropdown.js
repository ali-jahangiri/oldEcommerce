import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showCardShop } from "../store/ui";
import Items from "./drop_items";

const DropCard = ({ ui: { showCard }, shop, history, showCardShop }) => {
  return showCard ? (
    <div className="drop-card">
      <div className="card-item">
        <Items items={shop} />
      </div>
      <button
        onClick={() => {
          history.push("/checkout");
          showCardShop();
        }}
        style={{
          display: !shop.length ? "none" : "block",
        }}
      >
        Go to checkout
      </button>
    </div>
  ) : null;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  showCardShop: (para) => dispatch(showCardShop(para)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DropCard)
);
