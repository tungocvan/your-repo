//rcc
import React, { Component } from 'react';

class Backtotop extends Component {
    render() {
        return (
            <div>
                <a href="/" className="back-to-top">
                <i className="lni-arrow-up" />
                </a>
                <div id="preloader">
                <div className="loader" id="loader-1" />
                </div>
          </div>
        );
    }
}

export default Backtotop;