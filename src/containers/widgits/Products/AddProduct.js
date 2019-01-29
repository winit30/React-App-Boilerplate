import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchApi} from "../../../services/api";

class AddProduct extends Component {

    state = {
        categoryList: [],
        subCategoryList: [],
        subSubCategoryList: [],
        values: {
            category: "",
            subCategory: "",
            subSubCategory: "",
            productName: "",
            price: "",
            discount: "",
            productDesc: "",
            productSummary: "",
            brand: "",
            sizeAvailable: ""
        }
    }

    async componentDidMount() {
        const response = await fetchApi("/categories/getCategories", "GET", 200);
        console.log(response);
        this.setState({
            categoryList: response
        })
    }

    onChangeText = (property, e) => {
      if (property === "category" && e.target) {
          const category = this.state.categoryList.filter((cat) => cat.categoryAlias === e.target.value);
          if (category.length === 1) {
              this.setState({
                  ...this.state,
                  subCategoryList: category[0].subCategories,
                  subSubCategoryList: [],
                  values: {
                      ...this.state.values,
                      [property]: e.target.value
                  }
              });
          }
      } else if (property === "subCategory" && e.target) {
            const subCategory = this.state.subCategoryList.filter((subCat) => subCat.subCategoryAlias === e.target.value);
            if (subCategory.length === 1) {
                this.setState({
                    ...this.state,
                    subSubCategoryList: subCategory[0].subCategoriesTwo,
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

    renderCategoryDropdown = () => {
        return this.state.categoryList.map((cat, index) => {
            return (
              <option value={cat.categoryAlias} key={index}>{cat.categoryName}</option>
            );
        })
    }

    renderSubCategoryDropdown = () => {
        return this.state.subCategoryList.map((cat, index) => {
            return (
              <option value={cat.subCategoryAlias} key={index}>{cat.subCategoryName}</option>
            );
        })
    }

    renderSubSubCategoryDropdown = () => {
        return this.state.subSubCategoryList.map((cat, index) => {
            return (
              <option value={cat.subCategoryTwoAlias} key={index}>{cat.subCategoryTwoName}</option>
            );
        })
    }

    onAddProductRequest = async () => {
        await fetchApi("/products/createProduct", "POST", 201, this.state.values);
    }

    render() {
      return (
        <div>
            <div className="container">
                <div className="col-12 py-md-5">
                    <div className="form-group">
                        <select className="form-control" onChange={e => this.onChangeText("category", e)}>
                            <option value="">Select Category</option>
                            {this.renderCategoryDropdown()}
                        </select>
                    </div>
                    {(this.state.subCategoryList.length > 0) &&
                        <div className="form-group">
                            <select className="form-control" onChange={e => this.onChangeText("subCategory", e)}>
                                <option value="">Select Sub Category</option>
                                {this.renderSubCategoryDropdown()}
                            </select>
                        </div>
                    }
                    {(this.state.subSubCategoryList.length > 0) &&
                        <div className="form-group">
                            <select className="form-control" onChange={e => this.onChangeText("subSubCategory", e)}>
                                <option value="">Select Sub Category</option>
                                {this.renderSubSubCategoryDropdown()}
                            </select>
                        </div>
                    }
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Product Name</span>
                        </div>
                        <input type="text" className="form-control" value={this.state.values.productName} onChange={(e) => this.onChangeText("productName", e)} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Brand</span>
                        </div>
                        <input type="text" className="form-control" value={this.state.values.brand} onChange={(e) => this.onChangeText("brand", e)} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Price</span>
                        </div>
                        <input type="text" className="form-control" value={this.state.values.price} onChange={(e) => this.onChangeText("price", e)} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Discount</span>
                        </div>
                        <input type="text" className="form-control" value={this.state.values.discount} onChange={(e) => this.onChangeText("discount", e)} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Product Description</span>
                        </div>
                        <input type="text" className="form-control" value={this.state.values.productDesc} onChange={(e) => this.onChangeText("productDesc", e)} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Product Summary</span>
                        </div>
                        <input type="text" className="form-control" value={this.state.values.productSummary} onChange={(e) => this.onChangeText("productSummary", e)} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Size Available</span>
                        </div>
                        <input type="text" className="form-control" value={this.state.values.sizeAvailable} onChange={(e) => this.onChangeText("sizeAvailable", e)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onAddProductRequest}>Add Product</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
