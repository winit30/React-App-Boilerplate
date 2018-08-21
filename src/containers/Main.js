import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import Routes from "./../config/Routes";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true
        }
    }

    componentDidMount() {

    }

    render() {
        return(
          <Routes loggedIn={this.state.loggedIn}/>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
