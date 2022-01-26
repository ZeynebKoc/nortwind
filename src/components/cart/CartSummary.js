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

class CartSummary extends Component {
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

export default connect(mapStateToProps)(CartSummary);
