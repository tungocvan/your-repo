//rcc
import React, { Component } from 'react';

class PageHeader extends Component {
  render() {
    return (
      <div>
        <section className="page-header">
  <div className="container">      
    <div className="row justify-content-md-center">
      <div className="col-md-12">
        <div className="breadcrumb-wrapper text-center">
          <h2>Single Blog</h2>
          <p><a href="index.html">Home </a>/ Single Blog</p>
        </div>
      </div>
    </div> 
  </div> 
</section>

      </div>
    );
  }
}

export default PageHeader;