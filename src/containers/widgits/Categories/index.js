import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Link} from "react-router-dom";

import Sidebar from "../../../components/Sidebar";
import AddCategory from "./AddCategory";
import AddSubCategory from "./AddSubCategory";
import AddSubSubCategory from "./AddSubSubCategory";
import GetCategories from "./GetCategories";

class LandingPage extends Component {

    enrollMerchant = () => {
        this.props.history.push("/enroll-merchant");
    }

    render() {
      const {match} = this.props;
      return (
          <div>
              <Sidebar match={match} />
              <div className="left-gap-250">
                  <Route path={`${match.path}/add-category`} component={AddCategory} />
                  <Route path={`${match.path}/add-sub-category`} component={AddSubCategory} />
                  <Route path={`${match.path}/add-sub-sub-category`} component={AddSubSubCategory} />
                  <Route path={`${match.path}/get-categories`} component={GetCategories} />
              </div>
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
