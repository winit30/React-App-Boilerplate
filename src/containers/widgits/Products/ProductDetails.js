import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchApi} from "../../../services/api";

class ProductDetails extends Component {

    state = {
        productDetails: {}
    }

    async componentDidMount() {
        const {match: {params: {id}}} = this.props;
        const response = await fetchApi(`/products/getProductDetails/${id}`, "GET", 200);
        console.log(response);
        this.setState({
            productDetails: response
        })
    }

    render() {
        const {productDetails} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="col-12 py-md-5">
                      <table className="table table-bordered table-striped">
                          <thead>
                              <tr>
                                  <th style={{width: 200}}>Title</th>
                                  <th>Description</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Product Name</td>
                                  <td>{productDetails.productName}</td>
                              </tr>
                              <tr>
                                  <td>Brand</td>
                                  <td>{productDetails.brand}</td>
                              </tr>
                              <tr>
                                  <td>category</td>
                                  <td>{productDetails.category}</td>
                              </tr>
                              {productDetails.subCategory !== "" &&
                                  <tr>
                                      <td>Sub Category</td>
                                      <td>{productDetails.subCategory}</td>
                                  </tr>
                              }
                              {productDetails.subSubCategory !== "" &&
                                  <tr>
                                      <td>Sub Sub Category</td>
                                      <td>{productDetails.subSubCategory}</td>
                                  </tr>
                              }
                              <tr>
                                  <td>Product Description</td>
                                  <td>{productDetails.productDesc}</td>
                              </tr>
                              <tr>
                                  <td>Product Summary</td>
                                  <td>{productDetails.productSummary}</td>
                              </tr>
                              <tr>
                                  <td>Size Available</td>
                                  <td>{productDetails.sizeAvailable}</td>
                              </tr>
                              <tr>
                                  <td>Price</td>
                                  <td>{productDetails.price}</td>
                              </tr>
                              <tr>
                                  <td>Discount</td>
                                  <td>{productDetails.discount}</td>
                              </tr>
                              <tr>
                                  <td>Status</td>
                                  <td>{productDetails.status ? <span className="badge badge-success">Active</span> : <span className="badge badge-secondary">Inactive</span>}</td>
                              </tr>
                          </tbody>
                      </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
