import React, { Component } from 'react';
import {Route} from "react-router-dom";

import Main from "./../containers/Main";
import ComponentOne from "./../containers/ComponentOne";
import ComponentTwo from "./../containers/ComponentTwo";
import ChildComponentTwo from "./../containers/ChildComponentTwo";

class Routes extends Component {
    render() {
        return (
            <main>
                <Route path="/" exact component={Main} />
                <Route path="/one" component={ComponentOne} />
                <Route path="/two" component={ComponentTwo} />
                <Route path="/two/child" component={ChildComponentTwo} />
            </main>
        );
    }
}

export default Routes;
