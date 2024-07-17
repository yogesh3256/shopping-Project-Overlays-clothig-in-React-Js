import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/carasoel2/image1.jpg';
import image2 from '../assets/carasoel2/image2.jpg';
// sm
import image1sm from '../assets/carasoel2/image1sm.jpg';
import image2sm from '../assets/carasoel2/image2sm.jpg';
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
            <div className='hidden md:block'>
                <Slider className=' mt-14' {...settings}>
                    <div >
                        <Link to='/men/sweatshirt'>
                            <img src={image2} alt="Slide 1" />
                        </Link>
                    </div>
                    <Link to='/men/sweatshirt'>
                        <img src={image1} alt="Slide 2" />
                    </Link>



                </Slider>
            </div>
            <div>
                <div className=' block md:hidden'>
                    <Slider className=' mt-14' {...settings}>
                        <div >
                            <Link to='/men/sweatshirt'>
                                <img src={image1sm} alt="Slide 1" />
                            </Link>
                        </div>
                        <Link to='/men/sweatshirt'>
                            <img className='  ' src={image2sm} alt="Slide 2" />
                        </Link>


                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Carasoel;
