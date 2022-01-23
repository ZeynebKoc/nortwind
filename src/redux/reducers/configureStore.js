import { createstore } from "redux";
import rootReducer from "./index";

export default function configureStore() {
    return createstore(rootReducer);
}