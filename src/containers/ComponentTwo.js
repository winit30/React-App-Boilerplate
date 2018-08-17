import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComponentTwo extends Component {
    render() {
      return (
          <div>I am Component Two</div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTwo);
