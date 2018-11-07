import React, { Component } from 'react';
import './Experience.css';

function Progress(props) {
	return (
	<div className="progress-bar">
		<div className="bar" id={props.id} style={{width: props.amount}}>{props.name}</div>
	</div>
)
}

class Experience extends Component {
	
constructor(props){
	super(props);
	this.state= {
		percentLoadJS: '0%',
		percentLoadMongoose: '0%',
		percentLoadExpress: '0%',
		percentLoadReact: '0%',
		percentLoadNode: '0%',
		percentLoadHTML: '0%',
		percentLoadCSS: '0%',
		percentLoadGit: '0%',
		percentLoadGraphics: '0%',
		percentLoadPM: '0%'
	}
}
	componentDidMount(){
setTimeout(
    function() {
        this.setState({
			percentLoadJS: '85%',
			percentLoadMongoose: '60%',
			percentLoadExpress: '50%',
			percentLoadReact: '70%',
			percentLoadNode: '60%',
			percentLoadHTML: '90%',
			percentLoadCSS: '80%',
			percentLoadGit: '75%',
			percentLoadGraphics: '65%',
			percentLoadPM: '95%'
		});
    }
    .bind(this),
    300
);
	}
	
  render() {
    return (
      <div className="Experience">
	
		<div className="row" id="row2">
			<div className="card" id="prof-card">
				<h4>WORKING PROFICIENCIES</h4> 
				
				<div className="pb-section" id="progress-title">
					<Progress id="js" amount={this.state.percentLoadJS} name="JavaScript" />
					<Progress id="mongoose" amount={this.state.percentLoadMongoose}  name="MongoDB" />
					<Progress id="express" amount={this.state.percentLoadExpress} name="Express" />
					<Progress id="react" amount={this.state.percentLoadReact} name="React" />
					<Progress id="node" amount={this.state.percentLoadNode} name="Node" />
					<Progress id="html" amount={this.state.percentLoadHTML} name="HTML" />
					<Progress id="css" amount={this.state.percentLoadCSS} name="CSS" />
					<Progress id="git" amount={this.state.percentLoadGit} name="Git/GitHub" />
					<Progress id="graphics" amount={this.state.percentLoadGraphics} name="Graphics - Illustrator & Photoshop" />
					<Progress id="pm" amount={this.state.percentLoadPM} name="Project Management" />
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
				<p id="exp-text">My professional experience carried into a construction and engineering environment with heavy focus on Project Management. During this period, I lead many teams and coached team members to drive project success while developing company standards for optimization.  After 8+ years of work, I finally realized I was passionate about building in a more general perspective; <b>entrepreneurship.</b></p>
				<p id="exp-text">Inspired to create my own venture, Seventh Level Apparel was launched in 2016.  This was my first focused attempt at entrepreneurship, and is a project that I actively work on with great pride.</p>
				<p id="exp-text">My eclectic collection of personal development powered by a motivating mentor, lead to revisiting the idea of tech development. After analyzing the market and some self-reflection, I have acquired front-end developer tools with the goal of building full-stack applications. <b><em>My dream is to contribute, via the avenue of tech, to a larger project that will have an impact on the world. </em></b></p>
			</div>
				
		</div>
		
      </div>
    );
  }
}

export default Experience;