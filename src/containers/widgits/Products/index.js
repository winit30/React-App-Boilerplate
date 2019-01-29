import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Link} from "react-router-dom";

import Sidebar from "../../../components/Sidebar";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

class Products extends Component {

    enrollMerchant = () => {
        this.props.history.push("/enroll-merchant");
    }

    render() {
      const {match} = this.props;
      return (
          <div>
              <Sidebar match={match} />
              <div className="left-gap-250">
                  <Route path={`${match.path}/add-product`} component={AddProduct} />
                  <Route path={`${match.path}/product-list`} component={ProductList} />
                  <Route path={`${match.path}/product-details/:id`} component={ProductDetails} />
              </div>
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
