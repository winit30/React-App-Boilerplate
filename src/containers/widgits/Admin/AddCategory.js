import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddCtegory extends Component {

    render() {
      return (
        <div>
            <div className="container">
                <div className="col-12 py-md-3 pl-md-5">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Category Name</span>
                      </div>
                      <input type="text" className="form-control" placeholder="Category Name" name="Category Name" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Icon Name</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Icon Name" name="Icon Name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
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
