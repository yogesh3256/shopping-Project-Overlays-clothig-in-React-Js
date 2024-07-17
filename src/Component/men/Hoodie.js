import React from 'react'
import { useState } from 'react'
import { products } from '../data/Data';
import { useNavigate } from 'react-router-dom'

function Jacket() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const hoodiessarr = products.filter(product => product.category === 'hoodies' && product.type === 'men')
  const handleNavigate = (index) => {
    const product = hoodiessarr[index];
    navigate(`/Product/${product.name}`, { state: product });
  }

  return (
    <div className='flex mt-28 mb-8'>

      <div>
        <h1 className='text-center text-3xl font-bold mb-7 mt-7'>Hoodies collection</h1>
        <div className='grid  grid-cols-2 md:grid-cols-4 gap-5  mx-6'>
          {
            hoodiessarr.map((hoodieitem, index) => {
              return (

                <div key={hoodieitem.id}>
                  <img onClick={() => handleNavigate(index)}
                    className='h-[26vh] w-[110vh] md:w-full md:h-[70vh] transition-transform duration-500 transform hover:scale-95  rounded-md'
                    src={hoveredIndex === index ? hoodieitem.imageHover : hoodieitem.image}
                    alt='ehef'
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                  <div className=' mt-3 md:mt-5 '>
                    <h1
                     onClick={() => handleNavigate(index)}
                      className='font-sans text-center cursor-pointer' >{hoodieitem.name}</h1>
                    <h1 className=' font-semibold text-center'><span className='font-bold'>₹</span>{hoodieitem.price}</h1>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-6 gap-2'>
                    <button onClick={() => handleNavigate(index)} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XS</button>
                    <button onClick={() => handleNavigate(index)} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>S</button>
                    <button onClick={() => handleNavigate(index)} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>M</button>
                    <button onClick={() => handleNavigate(index)} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>L</button>
                    <button onClick={() => handleNavigate(index)} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>XL</button>
                    <button onClick={() => handleNavigate(index)} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XXL</button>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>



  )
}

export default Jacket
