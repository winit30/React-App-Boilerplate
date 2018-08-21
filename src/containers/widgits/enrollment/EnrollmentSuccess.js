import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Button from "./../../../components/buttons/Button";

class EnrollmentSuccess extends Component {

    render() {
      return (
          <div>
              Enrollment Success
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentSuccess);
