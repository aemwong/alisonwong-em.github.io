import React, { Component } from 'react';

class Gradient extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ backgroundImage: `linear-gradient(${this.props.color1}, ${this.props.color2})`, height: '200px' }}></div >
        )
    }
}

export default Gradient;