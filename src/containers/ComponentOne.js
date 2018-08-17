import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComponentOne extends Component {
    render() {
      return (
          <div>I am Component One</div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);
