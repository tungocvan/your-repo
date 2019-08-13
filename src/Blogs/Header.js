import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (  
          <header id="hero-area">    
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
    <div className="container">
      {/* Brand and toggle get grouped for better mobile display */}
      <a href="/" className="navbar-brand"><img src="assets/img/logo.png" alt="" /></a>       
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i className="lni-menu" />
      </button>
      <div className="collapse navbar-collapse menu-white" id="navbarCollapse">
        <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link active" href="/blog">Single Blog</a>
          </li>  
        </ul>
      </div>
    </div>
  </nav>               
</header>

        );
    }
}

export default Header;