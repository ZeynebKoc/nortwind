import * as actionTypes from "./actionTypes";

export function addToCart(addItem) {
    return { type: actionTypes.ADD_TO_CART, payload: addItem };
}

export function removeFromCart(product) {
    return { type: actionTypes.REMOVE_FROM_CART, payload: product };
}
