import React, { memo, useState } from 'react'
import Image1 from '../../assets/homepagetabs/joggar/image1.jpg';
import Image1a from '../../assets/homepagetabs/joggar/image1a.jpg';
import Image2 from '../../assets/homepagetabs/joggar/image2.jpg';
import Image2a from '../../assets/homepagetabs/joggar/image2a.jpg';
import Image3 from '../../assets/homepagetabs/joggar/image3.jpg';
import Image3a from '../../assets/homepagetabs/joggar/image3a.jpg';
import Image4 from '../../assets/homepagetabs/joggar/image4.jpg';
import Image4a from '../../assets/homepagetabs/joggar/image4a.jpg';
import { useNavigate } from 'react-router-dom';
const Joggarsarr = [
    {
        id: 1,
        image: Image1,
        imageHover: Image1a,
        name: 'Raven Fleece Joggers',
        price: 979

    },
    {
        id: 2,
        image: Image2,
        imageHover: Image2a,
        name: 'Acid Lime  Joggers',
        price: 979
    },
    {
        id: 3,
        image: Image3,
        imageHover: Image3a,
        name: 'Tranquil Blue Joggers',
        price: 979
    },
    {
        id: 4,
        image: Image4,
        imageHover: Image4a,
        name: 'Amber Joggers',
        price: 979
    },
]

function Joggars() {
    const navigate = useNavigate();

    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <div>
            <div className=' grid   grid-cols-2  mx-6 md:grid-cols-4 gap-4 md:mx-20 text-center mt-9'>
                {
                    Joggarsarr.map((joggaritem, index) => {
                        return (

                            <div key={joggaritem.id}>
                                <img onClick={() => { navigate('/Product', { state: Joggarsarr[index] }) }}
                                    className='h-[26vh] w-[110vh] md:w-full md:h-[70vh] transition-transform duration-500 transform hover:scale-95 rounded-md'
                                    src={hoveredIndex === index ? joggaritem.imageHover : joggaritem.image}
                                    alt='ehef'
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                />
                                <div className=' mt-3 md:mt-5 '>
                                    <h1
                                        onClick={() => { navigate('/Product', { state: Joggarsarr[index] }) }}
                                        className='font-sans text-center'>{joggaritem.name}</h1>
                                    <h1 className=' font-semibold text-center'><span className='font-bold'>₹</span>{joggaritem.price}</h1>
                                </div>
                                <div className='grid grid-cols-3 md:grid-cols-6 gap-2'>
                                    <button onClick={() => { navigate('/Product', { state: Joggarsarr[index] }) }} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XL</button>
                                    <button onClick={() => { navigate('/Product', { state: Joggarsarr[index] }) }} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>S</button>
                                    <button onClick={() => { navigate('/Product', { state: Joggarsarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>M</button>
                                    <button onClick={() => { navigate('/Product', { state: Joggarsarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>L</button>
                                    <button onClick={() => { navigate('/Product', { state: Joggarsarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>XL</button>
                                    <button onClick={() => { navigate('/Product', { state: Joggarsarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XXL</button>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </div>
    )
}

export default memo(Joggars)
