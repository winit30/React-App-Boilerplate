import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchApi} from "../../../services/api";

class AddSubCtegory extends Component {

    state = {
        categoryList: [],
        subCategoryList: [],
        values: {
            selectedCategory: "",
            selectedSubCategory: "",
            subSubCategoryName: ""
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

    renderSubCategoryDropdown = () => {
        return this.state.subCategoryList.map((cat, index) => {
            return (
              <option value={cat._id} key={index}>{cat.subCategoryName}</option>
            );
        })
    }

    onChangeText = (property, e) => {
        if (property === "selectedCategory" && e.target) {
            const category = this.state.categoryList.filter((cat) => cat._id === e.target.value);
            if (category.length === 1) {
                this.setState({
                    ...this.state,
                    subCategoryList: category[0].subCategories,
                    values: {
                        ...this.state.values,
                        [property]: e.target.value
                    }
                });
            }
        } else if (e.target) {
            this.setState({
                ...this.state,
                values: {
                    ...this.state.values,
                    [property]: e.target.value
                }
            });
        }
    }

    onAddSubSubCategoryRequest = async () => {
      const category = this.state.categoryList.filter((cat) => cat._id === this.state.values.selectedCategory);
      if(category.length === 1 && this.state.values.subSubCategoryName) {
            category[0].subCategories.forEach((subCat) => {
                 if (subCat._id === this.state.values.selectedSubCategory) {
                      subCat.subCategoriesTwo.push({
                          subCategoryTwoName: this.state.values.subSubCategoryName,
                          subCategoryTwoAlias: this.state.values.subSubCategoryName.toLowerCase()
                      });
                 }
            });
            const body = category[0];
            await fetchApi("/categories/updateCategory/"+this.state.values.selectedCategory, "PUT", 200, body);
      }
    }

    render() {
      return (
        <div>
            <div className="container">
                <div className="col-12 py-md-3 pl-md-5">
                    <div className="dropdown mb-3">
                      <select className="btn btn-primary dropdown-toggle" onChange={(e) => this.onChangeText("selectedCategory", e)}>
                          <option value="">Select</option>
                          {this.renderCategoryDropdown()}
                      </select>
                    </div>
                    <div className="dropdown mb-3">
                      <select className="btn btn-primary dropdown-toggle" onChange={(e) => this.onChangeText("selectedSubCategory", e)}>
                          <option value="">Select</option>
                          {this.renderSubCategoryDropdown()}
                      </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Sub Sub Category Name</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Sub Sub Category Name" value={this.state.values.subSubCategoryName} onChange={(e) => this.onChangeText("subSubCategoryName", e)} />
                    </div>
                    <button className="btn btn-primary" onClick={this.onAddSubSubCategoryRequest}>Add</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddSubCtegory);
