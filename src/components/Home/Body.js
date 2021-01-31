import React, { Component } from 'react';
import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';
import Slide from '../Slide/Slide';

class Body extends Component {
    render() {
        return (
            <div className="container-background-body">
                <div className="container-body">
                    <Slide />
                    <div className="container-body-content">
                        <BodyLeft />
                        <BodyRight />
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;