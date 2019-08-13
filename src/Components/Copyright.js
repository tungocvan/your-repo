//rcc
import React, { Component } from 'react';

class Copyright extends Component {
    render() {
        return (
            <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-3 col-xs-12">
                  <div className="footer-logo">
                    <img src="assets/img/logo.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12">     
                  <div className="social-icon text-center">
                    <a className="facebook" href="/"><i className="lni-facebook-filled" /></a>
                    <a className="twitter" href="/"><i className="lni-twitter-filled" /></a>
                    <a className="instagram" href="/"><i className="lni-instagram-filled" /></a>
                    <a className="linkedin" href="/"><i className="lni-linkedin-filled" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-xs-12">
                  <p className="float-right">Designed and Developed by <a href="http://uideck.com" rel="nofollow">UIdeck</a></p>
                </div> 
              </div>
            </div>
          </div>
        );
    }
}

export default Copyright;