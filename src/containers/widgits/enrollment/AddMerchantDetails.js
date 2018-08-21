import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Button from "./../../../components/buttons/Button";

class AddMerchantDetails extends Component {

    render() {
      return (
          <div>
              Add Merchant Details
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddMerchantDetails);
