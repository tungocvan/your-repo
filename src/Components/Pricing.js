//rcc
import React, { Component } from 'react';

class Pricing extends Component {
    render() {
        return (
            <section id="pricing" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Best Pricing</h2>
            <p>A desire to help and empower others between community contributors in technology <br /> began to grow in 2020.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="table wow fadeInLeft" data-wow-delay="1.2s">
                <div className="title">
                  <h3>Basic</h3>
                </div>
                <div className="pricing-header">
                  <p className="price-value">$12.90<span>/ Month</span></p>
                </div>
                <ul className="description">
                  <li>Business Analyzing</li>
                  <li>24/7 Tech Suport</li>
                  <li>Operational Excellence</li>
                  <li>Business Idea Ready</li>
                  <li>2 Database</li>
                  <li>Customer Support</li>
                </ul>
                <button className="btn btn-common">Get It</button>
              </div> 
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 active">
              <div className="table wow fadeInUp" id="active-tb" data-wow-delay="1.2s">
                <div className="title">
                  <h3>Profesional</h3>
                </div>
                <div className="pricing-header">
                  <p className="price-value">$49.90<span>/ Month</span></p>
                </div>
                <ul className="description">
                  <li>Business Analyzing</li>
                  <li>24/7 Tech Suport</li>
                  <li>Operational Excellence</li>
                  <li>Business Idea Ready</li>
                  <li>2 Database</li>
                  <li>Customer Support</li>
                </ul>
                <button className="btn btn-common">Get It</button>
              </div> 
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="table wow fadeInRight" data-wow-delay="1.2s">
                <div className="title">
                  <h3>Expert</h3>
                </div>
                <div className="pricing-header">
                  <p className="price-value">$89.90<span>/ Month</span></p>
                </div>
                <ul className="description">
                  <li>Business Analyzing</li>
                  <li>24/7 Tech Suport</li>
                  <li>Operational Excellence</li>
                  <li>Business Idea Ready</li>
                  <li>2 Database</li>
                  <li>Customer Support</li>
                </ul>
                <button className="btn btn-common">Get It</button>
              </div> 
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default Pricing;