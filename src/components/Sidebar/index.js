import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class Sidebar extends Component {

    render() {
        const {match} = this.props;
        return (
          <div className="sidebar-container">
              <Link to="/categories">Create Category</Link>
              <ul>
                  <li><Link to={`/categories/add-category`}>Create Category</Link></li>
                  <li><Link to={`/categories/add-sub-category`}>Create Sub-Category</Link></li>
                  <li><Link to={`/categories/add-sub-sub-category`}>Create Sub-Sub-Category</Link></li>
                  <li><Link to={`/categories/get-categories`}>Category List</Link></li>
              </ul>
              <Link to="/products">Create Category</Link>
                <ul>
                    <li><Link to={`/products/add-product`}>Add Product</Link></li>
                    <li><Link to={`/products/product-list`}>Product List</Link></li>
                </ul>
          </div>
        );
    }
}

export default Sidebar;
