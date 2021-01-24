import React, { Component } from 'react';
import Body from '../Home/Body';
import {Route} from "react-router-dom";
import Single from '../Single/Single';
import Cart from '../Cart/Cart';
class RouteURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/">
                    <Body />
                </Route>
                <Route path="/single">
                    <Single />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </div>
        );
    }
}

export default RouteURL;