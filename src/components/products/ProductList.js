import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

class ProductList extends Component {
    render() {
        return (
            <div>
                <Badge color="warning">Product</Badge>
                <Badge color="success">
                    {this.props.currentCategory.categoryName}
                </Badge>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
    };
}

export default connect(mapStateToProps)(ProductList);
