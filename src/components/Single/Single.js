import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BodySingle from './BodySingle';

class Single extends Component {
    render() {
        return (
            <div className="container-body">
                <BodySingle />
            </div>
        );
    }
}

export default Single;