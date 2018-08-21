import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Button from "./../../../components/buttons/Button";

class EnrollMerchant extends Component {

    render() {
      return (
          <div>
              Enroll Merchant
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EnrollMerchant);
