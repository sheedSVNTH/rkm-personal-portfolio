import React, { Component } from 'react';

import image from '../../media/rkm-profile.jpg';
//import ImgCarousel from '../About/Gallery/ImgCarousel';
import Gallery from '../About/Gallery/Gallery';

import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
		
		<div className="row" id="row1">
			<div className="card" id="photo-card">
				<img src={image} alt="Avatar" />
				<div className="container">
					<h3>Rasheed K. Muslimani, P.E.</h3> 
					<h3 id="title">PM || Engineer || Software Dev.</h3> 
					<p id="location"><i class="fas fa-map-marker-alt"></i> Miami, FL</p>
					<div id="contact-btn"><a href="mailto:r.muslimani@gmail.com">Contact</a></div>
				</div>
			</div>
		
			<div id="phil-column">
				<div className="card" id="about-card">
					<h4>ABOUT ME</h4> 
					<p id="about-text">UM Engineer grad with an obsession for continuous improvement.</p>
					<p id="about-text">When I'm not working, I'm either working out or exploring ways to grow.</p>
					<p id="about-text">Fascinated with understanding how things are built and how I can build them.</p>
					<div id="div-line"></div>
				</div>

				<div className="card" id="about-card">
					<h4>MY PHILOSOPHY</h4> 
					<p id="about-text">My operating mindset: If there is something I don't know, there's no reason I can't learn it.</p>
					<p id="about-text">Growth is a product of learning; you learn from being challenged.</p>
				</div>
			</div>
		
		</div>
		
		<div className="row" id="row3">
			<div className="card" id="album-card">
				<h4>COOL MOMENTS I'VE CAPTURED</h4> 
				<Gallery />
			</div>
		</div>

	</div>
    );
  }
}

export default About;