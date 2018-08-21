import React, { Component } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import LandingPage from "./../containers/widgits/enrollment/LandingPage";

const PageNotFound = () => (<div>404 Page Not Found.</div>) 

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route component={PageNotFound} />
                </Switch>
            </main>
        );
    }
}

export default Routes;

// <Route path="/login" render={props =>
//   !this.props.loggedIn ? (<MerchantLogin {...props}/>) : (<Redirect to={{
//       pathname: "/dashboard",
//       state: { from: props.location }
//   }}
//   />)
// } />
// <Route path="/dashboard" render={props =>
//   this.props.loggedIn ? (<Dashboard {...props}/>) : (<Redirect to={{
//       pathname: "/login",
//       state: { from: props.location }
//   }}
//   />)
// } />
