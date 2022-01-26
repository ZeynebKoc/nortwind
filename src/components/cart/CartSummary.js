import React, { Component } from "react";
import { connect } from "react-redux";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class CartSummary extends Component {
    removeFromCart = (product) => {
        this.props.actions.removeFromCart(product);
        alertify.warning(product.productName + " remove from cart!", 2);
    };
    renderEmpty() {
        return (
            <div>
                <NavItem>
                    <NavLink>Empty Cart</NavLink>
                </NavItem>
            </div>
        );
    }
    renderSummary() {
        return (
            <div>
                <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                        Your Cart
                    </DropdownToggle>
                    <DropdownMenu right>
                        {this.props.cart.map((cartItem) => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge
                                    onClick={() => {
                                        this.removeFromCart(cartItem.product);
                                    }}
                                    color="danger"
                                >
                                    X
                                </Badge>
                                {cartItem.product.productName}
                                <Badge color="success">
                                    {cartItem.quantity}
                                </Badge>
                            </DropdownItem>
                        ))}
                        <DropdownItem divider />
                        <DropdownItem>Go to cart</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0
                    ? this.renderSummary()
                    : this.renderEmpty()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(
                cartActions.removeFromCart,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
