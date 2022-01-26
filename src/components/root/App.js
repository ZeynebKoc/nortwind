import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";

function App() {
    return (
        <div>
            <Container>
                <Navi />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/product" component={Dashboard} />
                    <Route path="/cart" component={CartDetail} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
