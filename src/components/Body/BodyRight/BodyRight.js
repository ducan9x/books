import React, { Component } from 'react';
import List1 from './List1';
import List2 from './List2';

class BodyRight extends Component {
    render() {
        return (
          <div className="container-body-content-right">
            <List1 />
            <List2 />
          </div>
        );
    }
}

export default BodyRight;