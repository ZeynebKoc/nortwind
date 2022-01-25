import * as actionTypes from "./actionTypes";

export function addToCart(addItem) {
    return { type: actionTypes.ADD_TO_CART, payload: addItem };
}