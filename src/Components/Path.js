import React, { Component } from 'react';

class Path extends Component {
    constructor(props){
        super(props);
        console.log(__filename);
    }
    render() {
        return (
            <div>
                <p>Path</p>
            </div>
        );
    }
}

export default Path;