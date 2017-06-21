import React, { Component } from 'react';
import './Objective.css';

class Objective extends Component {
    render() {
        return (
            <div id="objective">
                <p>{this.props.data}</p>
            </div>
        );
    }
}

export default Objective;
