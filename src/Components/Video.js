// rcc
import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <section className="video-promo section-padding">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="video-promo-content text-center wow fadeInUp" data-wow-delay="0.3s">
                <a href="https://www.youtube.com/watch?v=yP6kdOZHids" className="video-popup"><i className="lni-film-play" /></a>
                <h2 className="mt-3 wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Watch Video</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default Video;