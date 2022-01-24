import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";

class CategoryList extends Component {
    componentDidMount() {
        this.props.action.getCategories();
    }
    render() {
        return (
            <div>
                <h1>Category List</h1>
                <ListGroup>
                    {this.props.categories.map((category) => (
                        <ListGroupItem key={category.id}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <h3>{this.props.currentCategory.categoryName}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: {
            getCategories: bindActionCreators(
                categoryActions.getCategories,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
