import React from 'react'
import { useState } from 'react';
import Image1 from '../../assets/homepagetabs/tshirts/image1.jpg';
import Image1a from '../../assets/homepagetabs/tshirts/image1a.jpg';
import Image2 from '../../assets/homepagetabs/tshirts/image2.jpg';
import Image2a from '../../assets/homepagetabs/tshirts/image2a.jpg';
import { useNavigate } from 'react-router-dom';
const tshirtsarr = [
    {
        id: 1,
        image: Image1,
        imageHover: Image1a,
        name: 'Stripe Shirt',
        price: 1399
    },
    {
        id: 2,
        image: Image2,
        imageHover: Image2a,
        name: 'Combat OverShirt',
        price: 1499
    },

]

function Shirts() {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <div>
            <div className=' grid grid-cols-2 gap-3 mx-8 md:grid-cols-2  md:mx-80 text-center mt-9 items-center'>
                {
                    tshirtsarr.map((tshirtsitem, index) => {
                        return (

                            <div key={tshirtsitem.id}>
                                <img onClick={() => { navigate('/Product', { state: tshirtsarr[index] }) }}
                                    className='h-[26vh] w-[110vh] md:w-full md:h-[70vh] transition-transform duration-500 transform hover:scale-95 rounded-md'
                                    src={hoveredIndex === index ? tshirtsitem.imageHover : tshirtsitem.image}
                                    alt='ehef'
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                />
                                <div className=' mt-3 md:mt-5 '>
                                    <h1
                                        onClick={() => { navigate('/Product', { state: tshirtsarr[index] }) }}
                                        className='font-sans text-center cursor-pointer'>{tshirtsitem.name}</h1>
                                    <h1 className=' font-semibold text-center'><span className='font-bold'>₹</span>{tshirtsitem.price}</h1>
                                </div>
                                <div className='grid grid-cols-3 md:grid-cols-6 gap-2'>
                                    <button className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XS</button>
                                    <button className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>S</button>
                                    <button className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>M</button>
                                    <button className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>L</button>
                                    <button className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>XL</button>
                                    <button className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XXL</button>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shirts
