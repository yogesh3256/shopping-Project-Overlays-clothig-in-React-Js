import { useState } from 'react' 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { products } from '../data/Data';



function Tshirt() {
  const navigate=useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
const tshirtarr = products.filter(product => product.category === 'tshirts'  && product.type === 'men')
  return (
    <div className='flex mt-28 mb-8'>
     
      <div>
        <h1 className='text-center text-3xl font-bold mb-7 mt-7'>Tshirts collection</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5  mx-6'>
          {
            tshirtarr.map((tshirtitem, index) => {
              return (
                <div key={tshirtitem.id}>
                  <img onClick={() => { navigate('Product', { state: tshirtarr[index] }) }}
                    className='h-[26vh] w-[110vh] md:w-full md:h-[70vh] transition-transform duration-500 transform hover:scale-95  rounded-md'
                    src={hoveredIndex === index ? tshirtitem.imageHover : tshirtitem.image}
                    alt='ehef'
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                  <div className=' mt-3 md:mt-5 '>
                    <h1
                      onClick={() => { navigate('Product', { state: tshirtarr[index] }) }}
                      className='font-sans text-center cursor-pointer truncate`'>{tshirtitem.name}</h1>
                    <h1 className=' font-semibold text-center'><span className='font-bold'>₹</span>{tshirtitem.price}</h1>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-6 gap-2'>
                    <button onClick={() => { navigate('Product', { state: tshirtarr[index] }) }} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XS</button>
                    <button onClick={() => { navigate('Product', { state: tshirtarr[index] }) }} className='border border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>S</button>
                    <button onClick={() => { navigate('Product', { state: tshirtarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>M</button>
                    <button onClick={() => { navigate('Product', { state: tshirtarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>L</button>
                    <button onClick={() => { navigate('Product', { state: tshirtarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200 '>XL</button>
                    <button onClick={() => { navigate('Product', { state: tshirtarr[index] }) }} className='border  border-gray-400 hover:border-black md:p-1 hover:bg-gray-200'>XXL</button>
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

export default Tshirt
