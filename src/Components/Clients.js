//rcc
import React, { Component } from 'react';

class Clients extends Component {
    render() {
        return (
            <div id="clients" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">NOTABLE CLIENTS</h2>
            <p>Over the last 20 years, we have helped and guided organisations to achieve outstanding results</p>
          </div>
          <div className="row text-align-">
            <div className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.3s">
              <div className="client-item-wrapper">
                <img className="img-fluid" src="assets/img/clients/img1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
              <div className="client-item-wrapper">
                <img className="img-fluid" src="assets/img/clients/img2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.9s">
              <div className="client-item-wrapper">
                <img className="img-fluid" src="assets/img/clients/img3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="1.2s">
              <div className="client-item-wrapper">
                <img className="img-fluid" src="assets/img/clients/img4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default Clients;