import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchApi} from "../../../services/api";

class AddSubSubCtegory extends Component {

    state = {
        categoryList: [],
        values: {
            subCategoryName: "",
            selectedCategory: ""
        }
    }

    async componentDidMount() {
        const response = await fetchApi("/categories/getCategories", "GET", 200);
        console.log(response);
        this.setState({
            categoryList: response
        })
    }

    renderCategoryDropdown = () => {
        return this.state.categoryList.map((cat, index) => {
            return (
              <option value={cat._id} key={index}>{cat.categoryName}</option>
            );
        })
    }

    onChangeText = (property, e) => {
        if (e.target) {
            this.setState({
                ...this.state,
                values: {
                    ...this.state.values,
                    [property]: e.target.value
                }
            });
        }
    }

    onAddSubCategoryRequest = async () => {
        console.log(this.state.categoryList, this.state.values.selectedCategory);
        const category = this.state.categoryList.filter((cat) => cat._id === this.state.values.selectedCategory);
        if(category.length === 1 && this.state.values.subCategoryName) {
            const body = category[0];
            body.subCategories.push({
                subCategoryName: this.state.values.subCategoryName,
                subCategoryAlias: `${category[0].categoryAlias}-${this.state.values.subCategoryName.toLowerCase()}`,
                subCategoriesTwo: []
            });
            await fetchApi("/categories/updateCategory/"+this.state.values.selectedCategory, "PUT", 200, body);
        }
    }

    render() {
      return (
        <div>
            <div className="container">
                <div className="col-12 py-md-5">
                    <div className="dropdown mb-3">
                        <select className="btn btn-primary dropdown-toggle" onChange={(e) => this.onChangeText("selectedCategory", e)}>
                            <option value="">Select</option>
                            {this.renderCategoryDropdown()}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Sub Category Name</span>
                        </div>
                        <input type="text" className="form-control" value={this.state.values.subCategoryName} placeholder="Sub Category Name" onChange={(e) => this.onChangeText("subCategoryName", e)} />
                    </div>
                    <button className="btn btn-primary" onClick={this.onAddSubCategoryRequest}>Add</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddSubSubCtegory);
