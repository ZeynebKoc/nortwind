import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import changeProductReducer from "./changeProductReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    changeProductReducer,
});
export default rootReducer;
