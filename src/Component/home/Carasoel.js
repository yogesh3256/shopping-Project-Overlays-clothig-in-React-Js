import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../assets/carasoel1/slider1.jpg';
import Slider2 from '../assets/carasoel1/slider2.jpg';
// sm
import Slider1sm from '../assets/carasoel1/slider1sm.jpg';
import Slider2sm from '../assets/carasoel1/slider2sm.jpg';
import { Link } from 'react-router-dom';

function Carasoel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            <div className="hidden md:block">
                <Slider {...settings}>
                    <div>
                        <Link to='/men/hoodie'>
                            <img className='slider-image w-full' src={Slider2} alt="Slide 2" />
                        </Link>
                    </div>

                    <div>

                   
                            <img className='slider-image w-full' src={Slider1} alt="Slide 1" />
                  
                    </div>

                </Slider>
            </div>
            <div className="block md:hidden ">
                <Slider {...settings}>
                    <div>
                        <Link to='/men/hoodie'>
                            <img className='slider-image' src={Slider2sm} alt="Slide 2" />
                        </Link>
                    </div>
                    <div>
                        <img className='slider-image ' src={Slider1sm} alt="Slide 1" />
                    </div>


                </Slider>
            </div>
        </div>


    );
}

export default Carasoel;
