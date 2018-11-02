import React, { Component } from 'react';
import './Experience.css';



class Experience extends Component {
constructor(props){
	super(props);
	this.state= {
		percentLoad: '0%'
	}
}
	componentDidMount(){
setTimeout(
    function() {
        this.setState({percentLoad: '85%'});
    }
    .bind(this),
    1000
);
	}
	
  render() {
    return (
      <div className="Experience">
	
		<div className="row" id="row2">
			<div className="card" id="prof-card">
				<h4>WORKING PROFICIENCIES</h4> 
				
				<div className="pb-section" id="progress-title">
							<div className="progress-bar">
								<div className="bar" id="js" style={{width: this.state.percentLoad}}>JavaScript</div>
							</div>
							<div className="progress-bar">
								<div className="bar" id="mongoose">MongoDB</div>
							</div>
							<div className="progress-bar">
								<div className="bar" id="express">Express</div>
							</div>
							<div className="progress-bar">
								<div className="bar" id="react">React</div>
							</div>
							<div className="progress-bar">
								<div className="bar" id="node">Node</div>
							</div>
							<div className="progress-bar">
								<div className="bar" id="html">HTML</div>
							</div>
							<div className="progress-bar">
								<div className="bar" id="css">CSS</div>
							</div>
							<div className="progress-bar">
								<div className="bar" id="git">Git/GitHub</div>
							</div>
							<div className="progress-bar">
								<div className="bar" id="graphics">Graphics - Illustrator & Photoshop</div>
							</div>
							<div className="progress-bar">
								<div className="bar" id="pm">Project Management</div>
							</div>
				</div>
			</div>
		</div>
		
		<div className="row1">
		
			<div className="card" id="exp-card">
		<div id="heading">
				<h4 id="exp-title">WHAT I'VE DONE</h4> 
								<div id="btn-container">
						<div id="resume-btn"><a href="mailto:r.muslimani@gmail.com">Request Resume</a></div>
				</div>
		</div>
				<p id="exp-text">With my dad being a contractor and my mom involved with interior design, naturally, I grew up in a productive environment composed of technical construction application complimented by the intimate details of living space planning and finishing.</p>
				<p id="exp-text">During the economic drought of 2009, I graduated from the University of Miami with two Engineering Degrees, leading to my P.E. license acquisition in 2014.</p>
				<p id="exp-text">My professional experience carried into a construction and engineering environment with heavy focus on Project Management. During this period, I lead many teams and coached team members to drive project success while developing company standards for optimization.  After 8+ years of work, I finally realized I was passionate about building in a more general perspective; <b>creating businesses.</b></p>
				<p id="exp-text">Inspired to create my own venture, Seventh Level Apparel was launched in 2016.  This was my first focused attempt at entrepreneurship, and is project that I actively work on with great pride.</p>
				<p id="exp-text">My eclectic collection of personal development powered by a motivating mentor lead to revisiting the idea of tech development. After analyzing the market and some self-reflection, I have acquired front-end developer tools with the goal of building full-stack applications. <b><em>My dream is to contribute to a larger project that will have an impact on the world. </em></b></p>
			</div>
				
		</div>
		
      </div>
    );
  }
}

export default Experience;