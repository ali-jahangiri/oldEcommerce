import React, { Component } from "react";

import SingIn from "../components/Sing_In";
import SingUp from "../components/Sing_up";

class Sing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <SingIn />
          </div>
          <div className="col-md-6">
            <SingUp />
          </div>
        </div>
      </div>
    );
  }
}
export default Sing;
