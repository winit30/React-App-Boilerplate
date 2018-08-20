import React, { Component } from 'react';
import { connect } from 'react-redux';

import LandingPage from "./LandingPage";

class Main extends Component {

    buttonClicked = () => {
        this.props.clickTheButton();
        console.log(this.props.app);
    }

    render() {

      const loggedin = false;

      if(!loggedin) {
        return (
            <div>
                <LandingPage />
            </div>
        );
      } else {
        return (
          <div>

          </div>
        )
      }
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
