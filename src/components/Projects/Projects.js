import React, { Component } from 'react';

import image1 from '../../media/seventh-level-apparel.png';
import image2 from '../../media/nr-contractors.png';
import image3 from '../../media/towneHall.png';
import image4 from '../../media/chat-app.png';

import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="home">
		
		<div className="project-row" id="row1">
			<div className="project-card">
				<h4 className="project-title"><b>Seventh Level Apparel E-Commerce</b></h4> 
				<a href="https://sheedsvnth.github.io/" target="blank"> <img src={image1} alt="ProjectIMG" /></a>
			</div>
			<div className="project-container">
				<p>Active store complete with My-cart and Check-out Features</p>
				<p>Complete content creation including logo designs, photography + editing, and social media marketing.</p>
				<p>Custom-built site with HTML/CSS and Javascript functionality</p>
			</div>
		</div>
		
		<div className="project-row" id="row2">
			<div className="project-card">
				<h4 className="project-title"><b>NR Contractors Website</b></h4> 
				<a href="https://polar-cove-76945.herokuapp.com" target="blank"><img src={image2} alt="ProjectIMG" /></a>
			</div>
			<div className="project-container">
				<p>Online business portfolio with interactive Service Menu made with React.js</p>
				<p>Custom Contact Form backed by Node.js and MongoDB to send conact request to the Owner.</p>
				<p>Theme and layout custom designed with HTML/CSS</p>
			</div>
		</div>
		
		<div className="project-row" id="row3">
			<div className="project-card">
				<h4 className="project-title"><b>TowneHall - NBC Universal Hackathon App</b></h4> 
				<img src={image3} alt="ProjectIMG" />
			</div>
			<div className="project-container">
				<p>Polictial information app built with React.js</p>
				<p>Won Most Innovative Technology implementation by WireWax for Face-recognition feature.</p>
				<p>Built within 24-hour deadline, competing against 34 teams.</p>
			</div>
		</div>

		<div className="project-row" id="row4">
			<div className="project-card">
				<h4 className="project-title"><b>ChatApp</b></h4> 
				<a href="https://warm-refuge-55725.herokuapp.com" target="blank"><img src={image4} alt="ProjectIMG" /></a>
			</div>
			<div className="project-container">
				<p>Simple chat app built with Javascript, MongoDB, Express.js, and Node.js</p>
				<p>Ability to set-up chatroom and have friends join.</p>
				<p>Built-in Share My Location feature</p>
			</div>
		</div>
	</div>
    );
  }
}

export default Projects;