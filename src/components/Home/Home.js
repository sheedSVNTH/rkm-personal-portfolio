import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
		
		<div className="row" id="row2">
			<div className="card">
				<h4><b>WORKING PROFICIENCIES</b></h4> 
				
				<div className="pb-section">
							<div className="progress-bar" id="js">JavaScript</div>
							<div className="progress-bar" id="mongoose">MongoDB</div>
							<div className="progress-bar" id="express">Express</div>
							<div className="progress-bar" id="react">React</div>
							<div className="progress-bar" id="node">Node</div>
							<div className="progress-bar" id="html">HTML</div>
							<div className="progress-bar" id="css">CSS</div>
				</div>
			</div>
		</div>

	</div>
    );
  }
}

export default Home;