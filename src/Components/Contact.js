//rcc
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="section-padding">    
        <div className="container">
          <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">          
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="contact-block">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name" />
                        <div className="help-block with-errors" />
                      </div>                                 
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" placeholder="Email" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                        <div className="help-block with-errors" />
                      </div> 
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" placeholder="Subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group"> 
                        <textarea className="form-control" id="message" placeholder="Your Message" rows={5} data-error="Write your message" required defaultValue={""} />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="submit-button">
                        <button className="btn btn-common" id="form-submit" type="submit">Send Message</button>
                        <div id="msgSubmit" className="h3 text-center hidden" /> 
                        <div className="clearfix" /> 
                      </div>
                    </div>
                  </div>            
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="contact-right-area wow fadeIn">
                <div className="contact-title">
                  <h1>We're a friendly bunch..</h1>
                  <p>We create projects for companies and startups with a passion for quality</p>
                </div>
                <h2>Contact Us</h2>
                <div className="contact-right">
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="lni-map-marker" />
                    </div>
                    <p>ADDRESS: 28 Green Tower, New York City, USA</p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="lni-envelope" />
                    </div>
                    <p><a href="/">Email:  contact@stuck.com</a></p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="lni-phone-handset" />
                    </div>
                    <p><a href="/">Phone:  +84 846 250 592</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>
        );
    }
}

export default Contact;