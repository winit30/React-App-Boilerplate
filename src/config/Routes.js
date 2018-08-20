import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Main from "./../containers/Main";
import MerchantLogin from "./../containers/MerchantLogin";

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/login" component={MerchantLogin} />
                </Switch>
            </main>
        );
    }
}

export default Routes;
