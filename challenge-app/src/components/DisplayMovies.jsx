import React, { Component } from 'react';

class DisplayMovies extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.year}</h4>
                <h4>{this.props.genre}</h4>
                <hr/>
            </div>
        );
    }
}

export default DisplayMovies;