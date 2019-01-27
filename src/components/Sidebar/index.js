import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class Sidebar extends Component {

    render() {
        const {match} = this.props;
        return (
          <div className="sidebar-container">
              <ul>
                  <li><Link to={`${match.url}/add-category`}>Create Category</Link></li>
                  <li><Link to={`${match.url}/add-sub-category`}>Create Sub-Category</Link></li>
                  <li><Link to={`${match.url}/add-sub-sub-category`}>Create Sub-Sub-Category</Link></li>
                  <li><Link to={`${match.url}/add-category`}>Get Category</Link></li>
                  <li><Link to={`${match.url}/add-category`}>Edit Category</Link></li>
              </ul>
          </div>
        );
    }
}

export default Sidebar;
