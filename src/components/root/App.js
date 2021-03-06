import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
function App() {
    return (
        <div>
            <Container>
                <Navi />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/product" component={Dashboard} />
                    <Route path="/cart" component={CartDetail} />
                    <Route
                        path="/saveproduct/:productId"
                        component={AddOrUpdateProduct}
                    />
                    <Route path="/saveproduct" component={AddOrUpdateProduct} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
