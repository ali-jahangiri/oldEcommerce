import React from "react";
import { connect } from "react-redux";
import PreviewItem from "../components/preview";

const Category = (props) => (
  <div className="container">
    <div className="row">
      <PreviewItem
        info={props.state.find(
          (el) => el.routeName === props.match.params.categor.toLowerCase()
        )}
      />
    </div>
  </div>
);
const mapStateToProps = (state) => ({
  state: state.shopItems,
});

export default connect(mapStateToProps)(Category);
