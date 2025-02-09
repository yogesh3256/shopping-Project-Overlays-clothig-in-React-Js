import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/Data';

const jacketsarr =products.slice(0,4).filter(product => product.category === 'jackets' && product.type === 'men')


function Jackets() {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <div>
            <div className=' grid grid-cols-2 mx-6 md:grid md:grid-cols-4 gap-4 md:mx-8 text-center mt-3'>
                {
                    jacketsarr.map((jacketitem, index) => {
                        return (
                            <div key={jacketitem.id}>
                                <img onClick={() => { navigate('Product', { state: jacketsarr[index] }) }}
                                    className='h-[26vh] w-[110vh] md:w-full md:h-[70vh] transition-transform duration-500 transform hover:scale-95 rounded-md'
                                    src={hoveredIndex === index ? jacketitem.imageHover : jacketitem.image}
                                    alt='ehef'
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                />
                                <div className=' mt-3 md:mt-5 '>
                                    <h1 onClick={() => { navigate('Product', { state: jacketsarr[index] }) }} className='font-sans text-center cursor-pointer'>{jacketitem.name}</h1>
                                    <h1 className=' font-semibold text-center'><span className='font-bold'>₹</span>{jacketitem.price}</h1>
                                </div>
                                <div className='grid grid-cols-3 md:grid-cols-6 gap-2'>
                                    <button onClick={() => { navigate('Product', { state: jacketsarr[index] }) }} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XS</button>
                                    <button onClick={() => { navigate('Product', { state: jacketsarr[index] }) }} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>S</button>
                                    <button onClick={() => { navigate('Product', { state: jacketsarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>M</button>
                                    <button onClick={() => { navigate('Product', { state: jacketsarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>L</button>
                                    <button onClick={() => { navigate('Product', { state: jacketsarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>XL</button>
                                    <button onClick={() => { navigate('Product', { state: jacketsarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XXL</button>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </div>
    )
}

export default Jackets
