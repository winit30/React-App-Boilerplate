import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChildComponentTwo extends Component {
    render() {
      return (
          <div>I am Child Component Two</div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChildComponentTwo);
