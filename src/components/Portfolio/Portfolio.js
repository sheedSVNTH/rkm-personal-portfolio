import React, { Component } from 'react';

import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';

class Portfolio extends Component {
	constructor(props){
		super(props);
		this.state = {
			activePage: <About />
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e){
		switch(e.target.value){
         case 'About':
             this.setState({activePage: <About />});
             break;
         case 'Experience':
				this.setState({activePage: <Experience />});
             break;
		case 'Projects':
				this.setState({activePage: <Projects />});
             break;
         case 'Home':
				this.setState({activePage: <Home />});
		}
	}
  render() {
    return (
      <div className="Portfolio">
        <header id="header" className="Portfolio-header">
			<button id="logo" onClick={this.handleClick} value='Home' className="Portfolio-link">RKM Design</button>
			<div className="nav-menu">NavMenuIcon</div>
			<nav>
				<ul>
					<li><button onClick={this.handleClick} value='About' className="Portfolio-link">About</button></li>
					<li><button onClick={this.handleClick} value='Experience' className="Portfolio-link">Experience</button></li>
					<li><button onClick={this.handleClick} value='Projects' className="Portfolio-link">Portfolio</button></li>
					<li className="social-icons">
						<ul>
							<li><a href="https://www.linkedin.com/in/rasheed-k-muslimani-p-e-3967a3b0/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
							<li><a href="https://www.instagram.com/seventh_level_apparel/" target="_blank"><i class="fab fa-instagram"></i></a></li>
							<li><a href="https://github.com/sheedSVNTH" target="_blank"><i class="fab fa-github-square"></i></a></li>
						</ul>
					</li>
				</ul>
			</nav>
        </header>
		
		<section className="display">
		{this.state.activePage}
		</section>
		
		<footer className="footer">
			<div id="shuttle-container">
				<a href="#header"><i id="shuttle" class="fas fa-space-shuttle fa-rotate-270"></i></a>
			</div>
		</footer>
      </div>
    );
  }
}

export default Portfolio;