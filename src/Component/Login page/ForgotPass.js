import React from 'react'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import EmailIcon from '@mui/icons-material/Email';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';



function Loginpage() {
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
        <>
            <form>
                <div className='mt-20 mx-auto max-w-md px-4'>
                    <div className='text-center'>
                        <h1 className='font-normal text-3xl mt-7'>Recover Password</h1>
                        <p className='text-sm mt-4'>Please enter your e-mail:</p>
                    </div>
                    <div className='mt-8'>
                        <div className='mb-4'>
                            <TextField
                                label='Email'
                                placeholder='Email'
                                type='text'
                                fullWidth />
                        </div>
                        <button className='bg-black text-white p-4 w-full rounded mt-6 font-bold'>RECOVER</button>
                        <div className='flex justify-center mt-4'>
                            <p className='text-gray-400 mr-2'>Remember your password?</p>
                            <Link to="/loginpage">
                                <h1 className='underline text-gray-400 hover:text-black'>Back to login</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
            <div className='hidden md:block'>
                <div className='md:grid text-center md:grid-cols-3 gap-8 mt-6 mb-7 px-4 '>
                    <div className=''>
                        <LocalShippingIcon className='mb-4' style={{ fontSize: 40 }} />
                        <h1 className='font-bold mb-2'>FREE & FAST DELIVERY</h1>
                        <p className='font-normal text-sm'>Shipping within 48 hours across India.</p>
                    </div>
                    <div className=''>
                        <RepeatOnIcon className='mb-4' style={{ fontSize: 40 }} />
                        <h1 className='font-bold mb-2'>RETURN POLICY</h1>
                        <p className='font-normal text-sm'>Returns within 7 days.</p>
                    </div>
                    <div className=''>
                        <EmailIcon className='mb-4' style={{ fontSize: 40 }} />
                        <h1 className='font-bold mb-2'>CONTACT US</h1>
                        <p className='font-normal text-sm'>Write to us at support@overlaysclothing.com</p>
                    </div>
                </div>
            </div>
            <div className="block md:hidden  mt-10 mb-8 ">
                <Slider {...settings}>
                    <div>
                        <div className='text-center'>
                            <LocalShippingIcon className='mb-4'
                                style={{ fontSize: 60 }} />
                            <h1 className='font-bold mb-2'>FREE & FAST DELIVERY</h1>
                            <p className='font-normal text-sm'>Shipping within 48 hours across India.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-center'>
                            <RepeatOnIcon className='mb-5'
                                style={{ fontSize: 50 }} />
                            <h1 className='font-bold mb-2'>RETURN POLICY</h1>
                            <p className='font-normal text-sm'>Returns with 7 days.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-center'>
                            <EmailIcon className='mb-5'
                                style={{ fontSize: 50 }} />
                            <h1 className='font-bold mb-2'>CONTACT US</h1>
                            <p className='font-normal text-sm'>Write us at support@overlaysclothing.com</p>
                        </div>
                    </div>

                </Slider>
            </div>

        </>
    )
}

export default Loginpage
