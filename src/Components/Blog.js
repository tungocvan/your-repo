//rcc
import React, { Component } from 'react';
import {
  Link,
  } from 'react-router-dom';
class Blog extends Component {
    render() {
        return (
            <section id="blog" className="section-padding">
        {/* Container Starts */}
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Latest blog</h2>
            <p>A desire to help and empower others between community contributors in technology <br /> began to grow in 2020.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 blog-item">
              {/* Blog Item Starts */}
              <div className="blog-item-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                <div className="blog-item-img">
                  <a href="/blog">
                    <img src="assets/img/blog/img1.jpg" alt="" />
                  </a>                
                </div>
                <div className="blog-item-text"> 
                  <h3>
                    <a href="/blog">Suspendisse dictum non velit</a>
                  </h3>
                  <p>
                    Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas. 
                  </p>
                  <a href="/blog" className="btn btn-common btn-rm">Read More</a>
                </div>
              </div>
              {/* Blog Item Wrapper Ends*/}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 blog-item">
              {/* Blog Item Starts */}
              <div className="blog-item-wrapper wow fadeInUp" data-wow-delay="0.6s">
                <div className="blog-item-img">
                  <a href="/blog">
                    <img src="assets/img/blog/img2.jpg" alt="" />
                  </a>                
                </div>
                <div className="blog-item-text"> 
                  <h3>
                    <a href="/blog">Remarkably Did Increasing</a>
                  </h3>
                  <p>
                    Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas. 
                  </p>
                  <a href="/blog" className="btn btn-common btn-rm">Read More</a>
                </div>
              </div>
              {/* Blog Item Wrapper Ends*/}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 blog-item">
              {/* Blog Item Starts */}
              <div className="blog-item-wrapper wow fadeInRight" data-wow-delay="0.3s">
                <div className="blog-item-img">                  
                  <Link to='/blog'><img src="assets/img/blog/img3.jpg" alt="" /></Link>            
                </div>
                <div className="blog-item-text"> 
                  <h3>
                   <Link to='/blog'>Changing the topic scope</Link>  
                 
                  </h3>
                  <p>
                    Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas. 
                  </p>
                      <Link to='/blog' className="btn btn-common btn-rm">Read More</Link>  
                </div>
              </div>
              {/* Blog Item Wrapper Ends*/}
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default Blog;