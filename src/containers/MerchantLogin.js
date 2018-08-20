import React, { Component } from 'react';
import { connect } from 'react-redux';

class MerchantLogin extends Component {

  goback = () => {
      this.props.history.push("/");
  }

    render() {
      return (
          <div>
              Login Page
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MerchantLogin);
