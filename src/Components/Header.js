import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
    
      <header id="header-wrap">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <a href="/" className="navbar-brand"><img src="/assets/img/logo.png" alt="" /></a>       
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <i className="lni-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                <li className="nav-item active">
                  <a className="nav-link" href="#hero-area">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolios">
                    Works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
        {/* Hero Area Start */}
        <div id="hero-area" className="hero-area-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="contents text-center">
                  <h2 className="head-title wow fadeInUp">Nền tảng giúp bạn đột phá<br /> trong kinh doanh và Quản trị doanh nghiệp </h2>
                  <div className="header-button wow fadeInUp" data-wow-delay="0.3s">
                    <a href="#services" className="btn btn-common">Bắt đầu ngay</a>
                  </div>
                </div>
                <div className="img-thumb text-center wow fadeInUp" data-wow-delay="0.6s">
                  <img className="img-fluid" src="assets/img/hero-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}
      </header>
    

        );
    }
}

export default Header;