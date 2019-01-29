import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchApi} from "../../../services/api";

class AddCtegory extends Component {

    state = {
        categoryName: "",
        iconName: ""
    }

    onChangeText = (property, e) => {
        if (e.target) {
            this.setState({
                [property]: e.target.value || ""
            });
        }
    }

    onAddCategoryRequest = async () => {
        const body = {
            categoryName: this.state.categoryName || "",
            categoryAlias: this.state.categoryName.toLowerCase() || "",
            iconName: this.state.iconName || ""
        }
        await fetchApi("/categories/createCategory", "POST", 200, body);
    }

    render() {
      return (
        <div>
            <div className="container">
                <div className="col-12 py-md-5">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Category Name</span>
                      </div>
                      <input type="text" className="form-control" placeholder="Category Name" value={this.state.categoryName} onChange={(e) => this.onChangeText("categoryName", e)} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Icon Name</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Icon Name" value={this.state.iconName} onChange={(e) => this.onChangeText("iconName", e)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onAddCategoryRequest}>Add</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCtegory);
