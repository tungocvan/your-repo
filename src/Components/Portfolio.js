//rcc
import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolios" className="section-padding">
        {/* Container Starts */}
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Our Works</h2>
            <p>A desire to help and empower others between community contributors in technology <br /> began to grow in 2020.</p>
          </div>
          <div className="row">          
            <div className="col-md-12">
              {/* Portfolio Controller/Buttons */}
              <div className="controls text-center">
                <a href="/chitiet"  className="filter active btn btn-common btn-effect" data-filter="all">
                  All 
                </a>
                <a href="/chitiet"  className="filter btn btn-common btn-effect" data-filter=".design">
                  Design 
                </a>
                <a href="/chitiet"  className="filter btn btn-common btn-effect" data-filter=".development">
                  Development
                </a>
                <a href="/chitiet"  className="filter btn btn-common btn-effect" data-filter=".print">
                  Print 
                </a>
              </div>
              {/* Portfolio Controller/Buttons Ends*/}
            </div>
          </div>
          {/* Portfolio Recent Projects */}
          <div id="portfolio" className="row">
            <div className="col-lg-4 col-md-6 col-xs-12 mix development print">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="assets/img/portfolio/img-1.jpg" alt="" />  
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a  className="lightbox" href="assets/img/portfolio/img-1.jpg"><i className="lni-eye item-icon" />Noi dung111</a>
                        </div>
                        <a href="/">Creative Design</a>
                      </div>
                    </div>
                  </div>
                </div>               
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix design print">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="assets/img/portfolio/img-2.jpg" alt="" /> 
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a  className="lightbox" href="assets/img/portfolio/img-2.jpg"><i className="lni-eye item-icon" />Noi dung2</a>
                        </div>
                        <a href="/chitiet">Retina Ready</a>
                      </div>
                    </div>
                  </div>
                </div>               
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix development">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="assets/img/portfolio/img-3.jpg" alt="" />  
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a   className="lightbox" href="assets/img/portfolio/img-3.jpg"><i className="lni-eye item-icon" />Noi dung3</a>
                        </div>
                        <a href="/chitiet">Responsive</a>
                      </div>
                    </div>
                  </div>
                </div>               
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix development design">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="assets/img/portfolio/img-4.jpg" alt="" /> 
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a   className="lightbox" href="assets/img/portfolio/img-4.jpg"><i className="lni-eye item-icon" />Noi dung4</a>
                        </div>
                        <a href="/chitiet">Well Documented</a>
                      </div>
                    </div>
                  </div>
                </div>               
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix development">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="assets/img/portfolio/img-5.jpg" alt="" />  
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a   className="lightbox" href="assets/img/portfolio/img-5.jpg"><i className="lni-eye item-icon" />Noi dung5</a>
                        </div>
                        <a href="/chitiet">Customer Support</a>
                      </div>
                    </div>
                  </div>
                </div>               
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix print design">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="assets/img/portfolio/img-6.jpg" alt="" />  
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a   className="lightbox" href="assets/img/portfolio/img-6.jpg"><i className="lni-eye item-icon" />Noi dung6</a>
                        </div>
                        <a href="/chitiet">User Friendly</a>
                      </div>
                    </div>
                  </div>
                </div>               
              </div>
            </div>
          </div>
        </div>
        {/* Container Ends */}
      </section>
        );
    }
}

export default Portfolio;