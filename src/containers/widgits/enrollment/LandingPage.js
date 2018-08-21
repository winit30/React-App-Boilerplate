import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../../components/buttons/Button";
import Logo from "./../../../components/Logo";
import NavMenu from "./../../../components/nav/NavMenu";
import NavItem from "./../../../components/nav/NavItem";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Vineet"
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.name !== nextState.name) {
            return true;
        } else {
            return false;
        }
    }

    componentWillUnMount() {

    }

    enrollMerchant = () => {
        console.log("enroll");
    }

    loginMerchant = () => {
        console.log("login");
    }

    loginAdmin = () => {
        console.log("login admin");
    }

    render() {
      return (
          <div>
              <Logo/>
              <NavMenu>
                  <NavItem path="/login">Merchant Login</NavItem>
                  <NavItem path="/somepath1">How it works?</NavItem>
                  <NavItem path="/somepath2">Why Funds advance</NavItem>
              </NavMenu>
              <div>
                  <Button onClick={this.enrollMerchant} buttonName="Enroll"/>
                  <Button onClick={this.loginMerchant} buttonName="Merchant Login" />
                  <Button onClick={this.loginAdmin} buttonName="Admin Login" />
              </div>
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
