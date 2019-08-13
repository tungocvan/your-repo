//rcc
import React, { Component } from 'react';

class Widgets extends Component {
    render() {
        return (
            <div className="widgets">
          <div className="search-input single-widget">
            <input type="text" className="form-control" placeholder="Search Here....." />
          </div>
          <div className="widget-latest-post single-widget">
            <h4>Latest Post</h4>
            <ul className="latest-post">
              <li className="single-latest-post">
                <div className="latest-post-img">
                  <a href="/Home"><img src="assets/img/blog/1.jpg" className="img-fluid" alt="Blog-images"/></a>
                </div>
                <h5><a href="single-blog.html">Awesome Blog Title</a></h5>
                <p><a href="/">12 Feb, 2020</a></p>
              </li>
              <li className="single-latest-post">
                <div className="latest-post-img">
                  <a href="/"><img src="assets/img/blog/2.jpg" className="img-fluid" alt="Blog-images" /></a>
                </div>
                <h5><a href="single-blog.html">Awesome Blog Title</a></h5>
                <p><a href="/">12 Feb, 2020</a></p>
              </li>
              <li className="single-latest-post">
                <div className="latest-post-img">
                  <a href="/"><img src="assets/img/blog/3.jpg" className="img-fluid" alt="Blog-images" /></a>
                </div>
                <h5><a href="single-blog.html">Awesome Blog Title</a></h5>
                <p><a href="/">12 Feb, 2020</a></p>
              </li>
            </ul>
          </div>
          <div className="categories single-widget">
            <h4>Categories</h4>
            <ul>
              <li><a href="/">Photography</a></li>
              <li><a href="/">Education</a></li>
              <li><a href="/">Business</a></li>
              <li><a href="/">Travel</a></li>
              <li><a href="/">Sports</a></li>
              <li><a href="/">Technology</a></li>
              <li><a href="/">Development</a></li>
              <li><a href="/">Design</a></li>
            </ul>
          </div>
          <div className="tags single-widget">
            <h4>Tags</h4>
            <ul>
              <li><a href="/">Corporate</a></li>
              <li><a href="/">Web</a></li>
              <li><a href="/">Business</a></li>
              <li><a href="/">Creative</a></li>
              <li><a href="/">Photoshop</a></li>
              <li><a href="/">Minimal</a></li>
              <li><a href="/">Popular</a></li>
              <li><a href="/">Design</a></li>
            </ul>
          </div>
        </div>
        );
    }
}

export default Widgets;