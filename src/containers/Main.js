import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link } from "react-router-dom";

import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

class Main extends Component {
    render() {
      return (
          <div>
              Hi There, I am the main component.<br/>
              <Link to="/one">Component One</Link><br/>
              <Link to="/two">Component Two</Link><br/>
              <Link to="/two/child">Component Two Child</Link>
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
