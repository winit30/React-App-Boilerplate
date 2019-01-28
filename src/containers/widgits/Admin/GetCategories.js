import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchApi} from "../../../services/api";

class GetCategories extends Component {

    state = {
        categoryList: []
    }

    async componentDidMount() {
        const response = await fetchApi("/categories/getCategories", "GET", 200);
        this.setState({
            categoryList: response
        })
    }

    deleteCategoryRequest = async (id) => {
        await fetchApi("/categories/deleteCategory/"+id, "DELETE", 200);
        const response = await fetchApi("/categories/getCategories", "GET", 200);
        this.setState({
            categoryList: response
        })
    }

    renderTableRows = () => {
        return this.state.categoryList.map((cat, index) => {
            return (
                <tr key={index}>
                    <td>{cat._id}</td>
                    <td>{cat.categoryName}</td>
                    <td>
                        <button>Edit</button> <button onClick={() => this.deleteCategoryRequest(cat._id)}>Delete</button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-12 py-md-3 pl-md-5">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Category</th>
                                        <th>Actions</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(GetCategories);
