import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/men/jacket/image1.jpg';
import image1a from '../assets/men/jacket/image1a.jpg';
import { useLocation } from 'react-router-dom';
import SizeChart from './SizeChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import EmailIcon from '@mui/icons-material/Email';

import { add } from "../app/slices/CartSlice";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { toast } from 'react-toastify';
const arr = [
    {
        id: 1,
        image: image1,
        imageHover: image1a,
        name: 'The Conqueror Jacket',
        price: 2464
    },
];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
};



function Product() {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const location = useLocation();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [selectImage,setSelectImage]=useState(null)




    const addToCart = () => {      <img className='h-[510px] rounded-xl' src={location.state.image} alt='pic2' />
        if (size) {
            const uniqueprd = { ...location.state, Size: size, quantity: quantity }

            dispatch(add(uniqueprd));
            enqueueSnackbar(`Item added to your cart successfully`, {
                variant: "success",
                autoHideDuration: 2000,
            });
        } else {
            toast.error("select Size ")
            setSize('')
            setQuantity(1)
        }

    };


    const handleClick = (value) => {
        setSize(value);
       
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const toggleDrawer1 = (newOpen1) => () => {
        setOpen1(newOpen1);
    };

    return (
        <div>
            <div className='mb-3 mt-28  hidden md:block'>
                {arr.map((item, index) => (
                    <div key={item.id}>
                        <div className='md:mt-16 md:mx-16'>
                            <div className='md:flex '>
                                <div className='block1 flex md:w-[50%] '>
                                    <div className='child1 mt-14'>
                                        <div className=' h-36 w-20 grid grid-rows-2 gap-44'>
                                            <img className='h-36 rounded-md' src={location.state.image} alt='piv1' />
                                            <img className='h-36 rounded-md' src={location.state.imageHover} alt='piv1' />
                                        </div>
                                    </div>
                                    <div className='child2 ml-10'>
                                        <div className='w-[450px] object-center'>
                                            <img className='h-[510px] rounded-xl' src={location.state.image} alt='pic2' />
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div className='block2 ml-3 md:w-[50%]'>
                                    <div>
                                        <p className='mt-2 md:text-sm'>OVERLAYS CLOTHING</p>
                                        <h1 className='text-3xl md:text-4xl mt-4'>{location.state.name}</h1>
                                        <h1 className=' text-2xl mt-4 md:text-xl'>₹{location.state.price}<span className='text-sm text-gray-400'> M.R.P</span></h1>
                                        <p className='text-sm'>(incl. of all taxes)</p>
                                        <hr className='md:w-[70%] mt-6' />
                                    </div>
                                    <div className='flex    md:justify-between  mt-4'>
                                        <div className='flex '>
                                            <p className='font-light text-2sm'>Size:</p>
                                            <p className=' md:ml-2 font-semibold '>{size}</p>
                                        </div>
                                        <p onClick={toggleDrawer(true)} className='absolute  ml-72 md:ml-80 md:mr-52 font-light underline
                                         text-gray-400 cursor-pointer hover:text-black'>
                                            Size chart
                                        </p>
                                    </div>
                                    <div className='flex gap-2 mt-3'>
                                        <button onClick={() => handleClick("XS")} className={`border h-11 w-11 rounded-lg transition ${size === "XS" ? "bg-gray-300 border-black border-2" : ""}`}>XS</button>
                                        <button onClick={() => handleClick("S")} className={`border h-11 w-11 rounded-lg transition ${size === "S" ? "bg-gray-300 border-black  border-2" : ""}`}>S</button>
                                        <button onClick={() => handleClick("M")} className={`border h-11 w-11 rounded-lg transition ${size === "M" ? "bg-gray-300 border-black  border-2" : ""}`}>M</button>
                                        <button onClick={() => handleClick("L")} className={`border h-11 w-11 rounded-lg transition ${size === "L" ? "bg-gray-300 border-black  border-2" : ""}`}>L</button>
                                        <button onClick={() => handleClick("XL")} className={`border h-11 w-11 rounded-lg transition ${size === "XL" ? "bg-gray-300 border-black  border-2" : ""}`}>XL</button>
                                        <button onClick={() => handleClick("XXL")} className={`border h-11 w-11 rounded-lg transition ${size === "XXL" ? "bg-gray-300 border-black  border-2" : ""}`}>XXL</button>
                                    </div>
                                    <div className='mt-4'>
                                        <h1 className='font-thin text-sm'>Quantity:</h1>
                                        <div className='flex justify-evenly md:justify-center gap-8 border w-40 h-12 md:w-32 md:h-10 rounded-md mt-2'>
                                            <button onClick={decreaseQuantity} className='font-bold text-xl'>-</button>
                                            <h1 className='mt-3 md:mt-1'>{quantity}</h1>
                                            <button onClick={increaseQuantity} className='font-extrabold text-xl'>+</button>
                                        </div>
                                        <div className='mt-5'>
                                            <button onClick={() => addToCart(location.state)}
                                                className="font-medium bg-gray-400 text-white w-[96%] md:w-[70%] p-4 rounded transition duration-500 ease-in-out hover:bg-gray-600">
                                                ADD TO CART</button><br />
                                            <button className='font-medium bg-black text-white  w-[96%]  md:w-[70%] p-4 rounded mt-5'>PROCEED TO BUY</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {/* mobile view code */}
                <div className='mb-3 mt-28 block md:hidden'>
                    {arr.map((item, index) => (
                        <div key={item.id}>
                            <div className='md:mt-16 md:mx-16'>
                                <div className='md:flex '>
                                    <div className=" m-8">
                                        <Slider {...settings}>
                                            <div>
                                                <img className='slider-image rounded-md  w-full h-[410px]' src={location.state.image} alt="Slide 1" />
                                            </div>
                                            <div>
                                                <img className='slider-image rounded-md  w-full h-[410px]' src={location.state.imageHover} alt="Slide 2" />
                                            </div>

                                        </Slider>
                                    </div>
                                    <div>

                                    </div>
                                    <div className='block2 ml-3 md:w-[50%]'>
                                        <div>
                                            <p className='mt-2 md:text-sm'>OVERLAYS CLOTHING</p>
                                            <h1 className='text-3xl md:text-4xl mt-4'>{location.state.name}</h1>
                                            <h1 className=' text-2xl mt-4 md:text-xl'>₹{location.state.price}<span className='text-sm text-gray-400'> M.R.P</span></h1>
                                            <p className='text-sm'>(incl. of all taxes)</p>
                                            <hr className='md:w-[70%] mt-6' />
                                        </div>
                                        <div className='flex    md:justify-between  mt-4'>
                                            <div className='flex '>
                                                <p className='font-light text-2sm'>Size:</p>
                                                <p className=' md:ml-2 font-semibold '>{size}</p>
                                            </div>
                                            <p
                                                onClick={toggleDrawer1(true)}
                                                className='absolute  ml-72 md:ml-80 md:mr-52 font-light underline text-gray-400 cursor-pointer hover:text-black'>Size chart</p>
                                        </div>
                                        <div className='flex gap-2 mt-3'>
                                            <button onClick={() => handleClick("XS")} className={`border h-11 w-11 rounded-lg transition ${size === "XS" ? "bg-gray-300 border-black border-2" : ""}`}>XS</button>
                                            <button onClick={() => handleClick("S")} className={`border h-11 w-11 rounded-lg transition ${size === "S" ? "bg-gray-300 border-black  border-2" : ""}`}>S</button>
                                            <button onClick={() => handleClick("M")} className={`border h-11 w-11 rounded-lg transition ${size === "M" ? "bg-gray-300 border-black  border-2" : ""}`}>M</button>
                                            <button onClick={() => handleClick("L")} className={`border h-11 w-11 rounded-lg transition ${size === "L" ? "bg-gray-300 border-black  border-2" : ""}`}>L</button>
                                            <button onClick={() => handleClick("XL")} className={`border h-11 w-11 rounded-lg transition ${size === "XL" ? "bg-gray-300 border-black  border-2" : ""}`}>XL</button>
                                            <button onClick={() => handleClick("XXL")} className={`border h-11 w-11 rounded-lg transition ${size === "XXL" ? "bg-gray-300 border-black  border-2" : ""}`}>XXL</button>
                                        </div>
                                        <div className='mt-4'>
                                            <h1 className='font-thin text-sm'>Quantity:</h1>
                                            <div className='flex justify-evenly md:justify-center gap-8 border w-40 h-12 md:w-32 md:h-10 rounded-md mt-2'>
                                                <button onClick={decreaseQuantity} className='font-bold text-xl'>-</button>
                                                <h1 className='mt-3 md:mt-1'>{quantity}</h1>
                                                <button onClick={increaseQuantity} className='font-extrabold text-xl'>+</button>
                                            </div>
                                            <div className='mt-5'>
                                                <button
                                                 onClick={() => addToCart(location.state)}
                                                    className="font-medium bg-gray-400 text-white w-[96%] md:w-[70%] p-4 rounded transition duration-500 ease-in-out hover:bg-gray-600">
                                                    ADD TO CART</button><br />
                                                <button className='font-medium bg-black text-white  w-[96%]  md:w-[70%] p-4 rounded mt-5'>PROCEED TO BUY</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SizeChart
                                toggleDrawer={toggleDrawer}
                                handleOpenDrawer={open}
                                open={open}
                                toggleDrawer1={toggleDrawer1}
                                handleOpenDrawer1={open1}
                                open1={open1}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-14 mb-8 hidden md:block'>
                <div className='grid grid-cols-3 gap-24'>
                    <div className='text-center'>
                        <LocalShippingIcon className='mb-4'
                            style={{ fontSize: 60 }} />
                        <h1 className='font-bold mb-2'>FREE & FAST DELIVERY</h1>
                        <p className='font-normal text-sm'>Shipping within 48 hours across India.</p>
                    </div>
                    <div className='text-center'>
                        <RepeatOnIcon className='mb-5'
                            style={{ fontSize: 50 }} />
                        <h1 className='font-bold mb-2'>RETURN POLICY</h1>
                        <p className='font-normal text-sm'>Returns with 7 days.</p>
                    </div>
                    <div className='text-center'>
                        <EmailIcon className='mb-5'
                            style={{ fontSize: 50 }} />
                        <h1 className='font-bold mb-2'>CONTACT US</h1>
                        <p className='font-normal text-sm'>Write us at support@overlaysclothing.com</p>
                    </div>
                </div>
            </div>
            <div>
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
            </div>

        </div>



    );
}

export default Product;
