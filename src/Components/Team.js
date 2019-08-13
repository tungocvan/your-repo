//rcc
import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <section id="team" className="section-padding text-center">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Meet our team</h2>
            <p>A desire to help and empower others between community contributors in technology <br /> began to grow in 2020.</p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              {/* Team Item Starts */}
              <div className="team-item text-center wow fadeInRight" data-wow-delay="0.3s">
                <div className="team-img">
                  <img className="img-fluid" src="assets/img/team/team-01.png" alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="/chitiet"><i className="lni-facebook-filled" aria-hidden="true" />Noi dung</a></li>
                        <li><a href="/chitiet"><i className="lni-twitter-filled" aria-hidden="true" />Noi dung</a></li>
                        <li><a href="/chitiet"><i className="lni-instagram-filled" aria-hidden="true" />Noi dung</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="/chitiet">David Smith</a></h3>
                  <p>Chief Operating Officer</p>
                </div>
              </div>
              {/* Team Item Ends */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              {/* Team Item Starts */}
              <div className="team-item text-center wow fadeInRight" data-wow-delay="0.6s">
                <div className="team-img">
                  <img className="img-fluid" src="assets/img/team/team-02.png" alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="/chitiet"><i className="lni-facebook-filled" aria-hidden="true" />Noi dung</a></li>
                        <li><a href="/chitiet"><i className="lni-twitter-filled" aria-hidden="true" />Noi dung</a></li>
                        <li><a href="/chitiet"><i className="lni-instagram-filled" aria-hidden="true" />Noi dung</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="/chitiet">Eric Peterson</a></h3>
                  <p>Product Designer</p>
                </div>
              </div>
              {/* Team Item Ends */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              {/* Team Item Starts */}
              <div className="team-item text-center wow fadeInRight" data-wow-delay="0.9s">
                <div className="team-img">
                  <img className="img-fluid" src="assets/img/team/team-03.png" alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="/chitiet"><i className="lni-facebook-filled" aria-hidden="true" />Noi dung</a></li>
                        <li><a href="/chitiet"><i className="lni-twitter-filled" aria-hidden="true" />Noi dung</a></li>
                        <li><a href="/chitiet"><i className="lni-instagram-filled" aria-hidden="true" />Noi dung</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="/chitiet">Durwin Babb</a></h3>
                  <p>Lead Designer</p>
                </div>
              </div>
              {/* Team Item Ends */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              {/* Team Item Starts */}
              <div className="team-item text-center wow fadeInRight" data-wow-delay="1.2s">
                <div className="team-img">
                  <img className="img-fluid" src="assets/img/team/team-04.png" alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="/chitiet"><i className="lni-facebook-filled" aria-hidden="true" />Noi dung</a></li>
                        <li><a href="/chitiet"><i className="lni-twitter-filled" aria-hidden="true" />Noi dung</a></li>
                        <li><a href="/chitiet"><i className="lni-instagram-filled" aria-hidden="true" />Noi dung</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="/chitiet">Marijn Otte</a></h3>
                  <p>Front-end Developer</p>
                </div>
              </div>
              {/* Team Item Ends */}
            </div>
          </div>
        </div>
      </section>

        );
    }
}

export default Team;