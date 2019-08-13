//rcc
import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <section id="counter" className="section-padding">
            <div className="overlay" />
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-12 col-md-12 col-xs-12">
                  <div className="row">
                    {/* Start counter */}
                    <div className="col-lg-3 col-md-6 col-xs-12">
                      <div className="counter-box wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon-o"><i className="lni-users" /></div>
                        <div className="fact-count">
                          <h3><span className="counter">23576</span></h3>
                          <p>Users</p>
                        </div>
                      </div>
                    </div>
                    {/* End counter */}
                    {/* Start counter */}
                    <div className="col-lg-3 col-md-6 col-xs-12">
                      <div className="counter-box wow fadeInUp" data-wow-delay="0.4s">
                        <div className="icon-o"><i className="lni-emoji-smile" /></div>
                        <div className="fact-count">
                          <h3><span className="counter">2124</span></h3>
                          <p>Positive Reviews</p>
                        </div>
                      </div>
                    </div>
                    {/* End counter */}
                    {/* Start counter */}
                    <div className="col-lg-3 col-md-6 col-xs-12">
                      <div className="counter-box wow fadeInUp" data-wow-delay="0.6s">
                        <div className="icon-o"><i className="lni-download" /></div>
                        <div className="fact-count">
                          <h3><span className="counter">54598</span></h3>
                          <p>Downloads</p>
                        </div>
                      </div>
                    </div>
                    {/* End counter */}
                    {/* Start counter */}
                    <div className="col-lg-3 col-md-6 col-xs-12">
                      <div className="counter-box wow fadeInUp" data-wow-delay="0.8s">
                        <div className="icon-o"><i className="lni-thumbs-up" /></div>
                        <div className="fact-count">
                          <h3><span className="counter">3212</span></h3>
                          <p>Followers</p>
                        </div>
                      </div>
                    </div>
                    {/* End counter */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Counter;