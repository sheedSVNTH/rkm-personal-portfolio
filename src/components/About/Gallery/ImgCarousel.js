import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import './ImgCarousel.css';

import image1 from '../../../media/01-UMphysics.jpg';
import image2 from '../../../media/02-yosemite.jpg';
import image3 from '../../../media/03-golden-gate-bridge.jpg';
import image4 from '../../../media/04-arts.jpg';
import image5 from '../../../media/05-vizcaya-gate.jpg';
import image6 from '../../../media/06-vizcaya-int.jpg';

class ImgCarousel extends Component {
    render() {
        return (
            <Carousel className="img">
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
			    <div>
                    <img src={image4} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={image5} />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={image6} />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
}

export default ImgCarousel;
