//rcc
import React, { Component } from 'react';

class BlogComment extends Component {
    render() {
        return (
            <div className="blog-comment">
          <h4>2 Comments</h4>
          <ul className="comment-list">
            <li className="comment">
              <div className="the-comment">
                <div className="avatar">
                  <img src="assets/img/blog/avater-1.jpg" alt="" />
                </div>
                <div className="comment-box">
                  <div className="comment-author">
                    <strong>User</strong><span className="meta"> August 17, 2020 at 1:38 pm</span><a className="comment-reply-link" href="/"> - Reply</a>
                  </div>
                  <div className="comment-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, voluptates odio perspiciatis veritatis repellendus facilis nesciunt suscipit cumque aut quisquam quas..</p>
                  </div>
                </div>
              </div>
              <ul className="children">
                <li className="comment">
                  <div className="the-comment">
                    <div className="avatar">
                      <img src="assets/img/blog/avater-2.jpg" alt="" />
                    </div>
                    <div className="comment-box">
                      <div className="comment-author">
                        <strong>Demo User</strong> <span className="meta">August 18, 2020 at 3:39 pm</span><a className="comment-reply-link" href="/"> - Reply</a>
                      </div>
                      <div className="comment-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, voluptates odio perspiciatis veritatis repellendus facilis nesciunt suscipit cumque aut quisquamt..</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <form id="comment-form">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                </div>                                 
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" id="Email" name="Email" placeholder="Email" />
                </div>                                 
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input type="text" className="form-control" id="Website" name="Website" placeholder="Website" />
                </div>                                 
              </div>
              <div className="col-md-12">
                <div className="form-group"> 
                  <textarea className="form-control" id="message" placeholder="Comment" rows={11} defaultValue={""} />
                </div>
                <div className="submit-button">
                  <button className="btn btn-common" type="submit">Post comment</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        );
    }
}

export default BlogComment;