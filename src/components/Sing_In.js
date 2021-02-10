import React, { Component } from "react";

class SingIn extends Component {
  state = {
    email: "",
    passWord: "",
    showPass: true,
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ email: "", passWord: "" });
  };
  changeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  eyeHandler = () => {
    this.setState((prevState) => ({ showPass: !prevState.showPass }));
    console.log("sd");
  };

  render() {
    return (
      <div className="sing__in">
        <p>I Already Have a Account</p>
        <span>Sing in with your Email and password</span>
        <form onSubmit={this.submitHandler}>
          <div className="email__container">
            <input
              id="email"
              name="email"
              onChange={this.changeHandler}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="pass__container">
            <input
              name="passWord"
              id="password"
              onChange={this.changeHandler}
              type={this.state.showPass ? "password" : "text"}
              placeholder="Passwors"
            />
            <span onClick={this.eyeHandler} className="eye">
              <i className="far fa-eye"></i>
              <span
                className={this.state.showPass ? "chob hide" : "chob show"}
              ></span>
            </span>
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default SingIn;
