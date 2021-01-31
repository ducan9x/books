import React, { Component } from 'react';
import Body from '../Home/Body';
import {Route,Switch} from "react-router-dom";
import Single from '../Single/Single';
import Cart from '../Cart/Cart';
class RouteURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route path="/chi-tiet/:data/:id/:slug.html" component={Single} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        );
    }
}

export default RouteURL;