import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchApi} from "../../../services/api";
import {Link} from "react-router-dom";

class ProductList extends Component {

    state = {
        productList: []
    }

    componentDidMount() {
        this.getProductList();
    }

    getProductList = async () => {
        const response = await fetchApi("/products/getProducts", "GET", 200);
        this.setState({
            productList: response
        });
    }

    onChangeProductStatus = async (id, status) => {
        const body = {
            status
        };
        const response = await fetchApi(`/products/updateProduct/${id}`, "PUT", 200, body);
        this.getProductList();
    }

    renderTableRows = () => {
        return this.state.productList.map((product, index) => {
            return (
                <tr key={index}>
                    <td><Link to={`/products/product-details/${product._id}`}>{product.productName}</Link></td>
                    <td>{product.price}</td>
                    <td>{product.discount}</td>
                    <td>{product.brand}</td>
                    <td>{product.status ? <span className="badge badge-success">Active</span> : <span className="badge badge-secondary">In active</span>}</td>
                    <td><button type="button" className={product.status ? "btn btn-secondary btn-sm" : "btn btn-success btn-sm"} onClick={() => this.onChangeProductStatus(product._id, !product.status)}>{product.status ? "Unpublish Now" : "Publish Now"}</button></td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-12 py-md-5">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Discount</th>
                                        <th>Brand</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        {this.renderTableRows()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
