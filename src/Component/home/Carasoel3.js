import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/carasoel3/image1.jpg';
import image2 from '../assets/carasoel3/image2.jpg';
// sm
import image1sm from '../assets/carasoel3/image1sm.jpg';
import image2sm from '../assets/carasoel3/image2sm.jpg';
import { Link } from 'react-router-dom';
function Carasoel3() {
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
        <div className='mb-4'>
            <div className='hidden md:block'>
                <Slider className=' mt-14' {...settings}>
                    <div >
                    <Link to='/men/Hoodie'>
                        <img src={image2} alt="Slide 1" />
                        </Link>
                    </div>
                    <Link to='/men/hoodie'>
                    <img className='  ' src={image1} alt="Slide 2" />
                    </Link>



                </Slider>
            </div>
            <div className=' block md:hidden' >
                <Slider className=' mt-14' {...settings}>
                    <div >
                    <Link to='/men/hoodie'>
                        <img  src={image1sm} alt="Slide 1" />
                        </Link>
                    </div>
                    <Link to='/men/Hoodie'>
                    <img   src={image2sm} alt="Slide 2" />
                    </Link>



                </Slider>
            </div>
        </div>
    );
}

export default Carasoel3;
