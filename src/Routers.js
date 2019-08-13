//rcc
import React, { Component } from 'react';
import {
    Route,
    } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
class Routers extends Component {
    render() {
        return (
            
            <div>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/blog" component={Blogs}/>
                 <Route exact path="/tin" render={ ( ) => (<h2> HomePage </h2>) } />
            </div>
    
        );
    }
}

export default Routers;