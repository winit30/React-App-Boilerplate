import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Button from "./../../../components/buttons/Button";

class Agreement extends Component {

    render() {
      return (
          <div>
              Accept Agreement
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Agreement);
