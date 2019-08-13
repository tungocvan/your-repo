//rcc
import React, { Component } from 'react';
import BlogPost from './BlogPost';
import BlogComment from './BlogComment';
import Widgets from './Widgets';

class BlogSingle extends Component {
    render() {
        return ( 
            <div id="blog-single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-xs-12">
                            <BlogPost/>
                            <BlogComment/>
                    </div>
                    <div className="col-lg-4 col-md-12 col-xs-12">
                        <Widgets/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default BlogSingle;