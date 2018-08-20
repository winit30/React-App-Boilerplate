import React, { Component } from "react";
import NavItem from "./NavItem";

class NavMenu extends Component {

  renderChildren = () => {
        return React.Children.map(this.props.children, child => {
          return (
            <NavItem path={child.props.path}>{child.props.children}</NavItem>
          );
        });
    }

    render() {
      return (
          <ul>
              {this.renderChildren()}
          </ul>
      );
    }
}


export default NavMenu;
