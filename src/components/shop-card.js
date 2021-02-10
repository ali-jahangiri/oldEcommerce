import React from "react";
import { connect } from "react-redux";
import { selectShop } from "../store/selectore/getstatetoprops";

import { showCardShop } from "../store/ui";

const shopingCard = ({ showCardShop, state }) => {
  return (
    <div
      onClick={showCardShop}
      style={{
        position: "relative",
      }}
    >
      <i className="fas fa-shopping-cart"></i>
      <span className="number__shoping">{state.length}</span>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  showCardShop: () => dispatch(showCardShop()),
});

const mapStateToProps = (state) => ({
  state: selectShop(state),
});
export default connect(mapStateToProps, mapDispatchToprops)(shopingCard);
