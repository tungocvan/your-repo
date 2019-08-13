//rcc
import React, { Component } from 'react';

class BlogPost extends Component {
    render() {
        return (
            <div className="blog-post">
          <div className="post-thumb">
            <img src="assets/img/blog/blog-1-big.jpg" alt="" />
          </div>
          <div className="post-content">
            <h3>Lorem Ipsum Dolor Sit Amet, Consectetur</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eaque, beatae voluptas maxime in aliquam quisquam quibusdam porro nam, expedita voluptatibus voluptates voluptatum suscipit illo magnam, repellendus. Voluptatem, optio, qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum maiores minima, sint libero. Iste facere architecto vitae odit facilis optio voluptatum expedita, unde enim voluptates provident ut suscipit alias adipisci.</p>          
          </div>
        </div>
        );
    }
}

export default BlogPost;