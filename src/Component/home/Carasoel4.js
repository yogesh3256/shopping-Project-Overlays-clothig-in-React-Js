import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/carasoel4/iamge1.jpg';
import Image2 from '../assets/carasoel4/image2.jpg';
// sm
import image1sm from '../assets/carasoel4/image1sm.jpg';
import image2sm from '../assets/carasoel4/image2sm.jpg';
import { Link } from 'react-router-dom';


function Carasoel4() {
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
        <div className=''>
            <div className='hidden md:block'>
                <Slider className=' mt-16 mb-6' {...settings}>
                    <div >
                        <Link to='/men/hoodie'>
                            <img src={Image1} alt="Slide 1" />
                        </Link>
                    </div>
                    <Link to='/men/hoodie'>
                        <img src={Image2} alt="Slide 2" />
                    </Link>


                </Slider>
            </div>
            <div>
                <div className=' block md:hidden'>

                    <Slider className='mt-16 mb-6' {...settings}>
                        <div >
                            <Link to='/men/hoodie'>
                                <img className='    ' src={image1sm} alt="Slide 1" />
                            </Link>
                        </div>
                        <Link to='/men/hoodie'>
                            <img className='  ' src={image2sm} alt="Slide 2" />
                        </Link>


                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Carasoel4;
