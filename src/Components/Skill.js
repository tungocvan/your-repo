//rcc
import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <div className="skill-area section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                  <img className="img-fluid" src="assets/img/about/img-1.jpg" alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-xs-12 info wow fadeInRight" data-wow-delay="0.3s">
                  <div className="site-heading">
                    <h2 className="section-title">Our <span>Skill</span></h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus architecto laudantium dolorem, aut aspernatur modi minima alias provident obcaecati! Minima odio porro nemo magnam dolore minus asperiores veniam dolorum est!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, nesciunt possimus quaerat ipsam, corporis architecto aspernatur non aut! Dolorum consectetur placeat excepturi, perspiciatis sunt.
                    </p>
                  </div>
                  <div className="skills-section">
                    {/* Progress Bar Start */}
                    <div className="progress-box">
                      <h5>Strategy &amp; Analysis <span className="pull-right">88%</span></h5>
                      <div className="progress" style={{opacity: 1, left: '0px'}}>
                        <div className="progress-bar" role="progressbar" data-width={87} style={{width: '87%'}} />
                      </div>
                    </div>
                    <div className="progress-box">
                      <h5>Eeconomic growth <span className="pull-right">95%</span></h5>
                      <div className="progress" style={{opacity: 1, left: '0px'}}>
                        <div className="progress-bar" role="progressbar" data-width={96} style={{width: '96%'}} />
                      </div>
                    </div>
                    <div className="progress-box">
                      <h5>Achieves goals <span className="pull-right">70%</span></h5>
                      <div className="progress" style={{opacity: 1, left: '0px'}}>
                        <div className="progress-bar" role="progressbar" data-width={52} style={{width: '52%'}} />
                      </div>
                    </div>
                    {/* End Progressbar */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Skill;