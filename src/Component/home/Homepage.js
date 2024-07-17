import React, { useState } from 'react'
import image1 from '../assets/homepage/image1.jpg'
import image1a from '../assets/homepage/image1a.jpg'
import image2 from '../assets/homepage/image2.jpg'
import image2a from '../assets/homepage/image2a.jpg'
import image3 from '../assets/homepage/image3.jpg'
import image3a from '../assets/homepage/image3a.jpg'
import image4 from '../assets/homepage/image4.jpg'
import image4a from '../assets/homepage/image4a.jpg'
import { useNavigate } from 'react-router-dom';
const arr = [
  {
    id: 1,
    image: image1,
    imageHover: image1a,
    name: 'Ultra Soft Oversized Phoenix T-shirt',
    price: 999
  },
  {
    id: 2,
    image: image2,
    imageHover: image2a,
    name: 'Relaxed Fit Mens Free  Orange Tshirt',
    price: 999
  },
  {
    id: 3,
    image: image3,
    imageHover: image3a,
    name: 'Ultra Soft Oversized Blossom T-shirt',
    price: 899
  },
  {
    id: 4,
    image: image4,
    imageHover: image4a,
    name: 'Textured Regular Fit Navy Blue Pique ',
    price: 639
  },


]

function Homepage() {
  const navigate=useNavigate();

  
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className='mt-9'>
      <div >
        <h1 className='text-4xl text-center   font-semibold'  >DISCOVER BESTSELLERS</h1>
      </div>
      <div className=' grid grid-cols-2  md:grid md:grid-cols-4 gap-4 mx-7 text-center mt-9 '>
        {
          arr.map((homeitem, index) => {
            return (

              <div key={homeitem.id}>
                <img onClick={()=>{navigate('Product',{state:arr[index]})}}
                  className='h-[26vh] w-[110vh] md:w-full md:h-[70vh] transition-transform duration-500 transform hover:scale-95  rounded-md'
                  src={hoveredIndex === index ? homeitem.imageHover : homeitem.image}
                  alt='ehef'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                <div className='  mt-3 md:mt-5 '>
                  <h1  onClick={()=>{navigate('Product',{state:arr[index]})}} className=' font-sans text-center cursor-pointer'>{homeitem.name}</h1>
                  <h1 className=' font-semibold text-center'><span className='font-bold'>₹</span>{homeitem.price}</h1>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-2'>
                  <button  onClick={()=>{navigate('Product',{state:arr[index]})}} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XS</button>
                  <button  onClick={()=>{navigate('Product',{state:arr[index]})}} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>S</button>
                  <button  onClick={()=>{navigate('Product',{state:arr[index]})}} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>M</button>
                  <button  onClick={()=>{navigate('Product',{state:arr[index]})}} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>L</button>
                  <button  onClick={()=>{navigate('Product',{state:arr[index]})}} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>XL</button>
                  <button  onClick={()=>{navigate('Product',{state:arr[index]})}} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XXL</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Homepage
