import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Categories from "./../containers/widgits/Categories";
import Products from "./../containers/widgits/Products";

const PageNotFound = () => (<div>404 Page Not Found.</div>);

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/categories"  component={Categories} />
                    <Route path="/products"  component={Products} />
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
