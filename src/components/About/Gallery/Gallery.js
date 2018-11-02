import React, { Component } from 'react';
import './Gallery.css';

import image1 from '../../../media/01-UMphysics.jpg';
import image2 from '../../../media/02-yosemite.jpg';
import image3 from '../../../media/03-golden-gate-bridge.jpg';
import image4 from '../../../media/04-arts.jpg';
import image5 from '../../../media/05-vizcaya-gate.jpg';
import image6 from '../../../media/06-vizcaya-int.jpg';

class Gallery extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeImage: null
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e){
		switch(e.target.id){
         case '1':
             this.setState({activeImage: image1});
             break;
         case '2':
				this.setState({activeImage: image2});
             break;
		case '3':
				this.setState({activeImage: image3});
             break;
         case '4':
				this.setState({activeImage: image4});
             break;
         case '5':
				this.setState({activeImage: image5});
             break;
		case '6':
				this.setState({activeImage: image6});
		}
		
		//const newImg = 'image' + e.target.id;
		//console.log('image' + e.target.id);
		//this.setState({activeImage: 'image' + e.target.id});
	}
	
  render() {
    return (
      <div className="gallery" id="gallery">
		<div className="active-img">
			<img className="display-img" src={this.state.activeImage} alt=""/>
		</div>
		<div className="img-container">
			<a href="#gallery"><img id='1' onClick={this.handleClick} className="cap-img" src={image1}  alt="GalleryIMG" /></a>

			<a href="#gallery"><img id='2' onClick={this.handleClick} className="cap-img" src={image2} alt="GalleryIMG" /></a>

			<a href="#gallery"><img id='3' onClick={this.handleClick} className="cap-img" src={image3}  alt="GalleryIMG" /></a>

			<a href="#gallery"><img id='4' onClick={this.handleClick} className="cap-img" src={image4} alt="GalleryIMG" /></a>

			<a href="#gallery"><img id='5' onClick={this.handleClick} className="cap-img" src={image5}  alt="GalleryIMG" /></a>

			<a href="#gallery"><img id='6' onClick={this.handleClick} className="cap-img" src={image6} alt="GalleryIMG" /></a>
		</div>

	</div>
    );
  }
}

export default Gallery;