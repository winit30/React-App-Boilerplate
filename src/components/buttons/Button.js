import React, { Component } from "react";

const defalutProps = {
  buttonClass: "btn btn-primary"
}

class Button extends Component {

    render() {
      return (
          <button className={this.props.buttonClass} onClick={this.props.onClick}>
              {this.props.buttonName}
          </button>
      );
    }
}

Button.defalutProps = defalutProps;


export default Button;
