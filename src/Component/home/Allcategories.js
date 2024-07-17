import React from 'react'
import Tshirts from '../assets/allcategories/tshirts.jpg'
import Supima from '../assets/allcategories/supima.jpg'
import Joggars from '../assets/allcategories/joggers.jpg'
import Jackets from '../assets/allcategories/jackets.jpg'
import Hoodies from '../assets/allcategories/hoodies.jpg'
import Sweatshirts from '../assets/allcategories/sweatshirts.jpg'
import Shirts from '../assets/allcategories/shirts.jpg'
import Polo from '../assets/allcategories/polo.jpg'
import { Link } from 'react-router-dom'


const Categories = [
    {
        id: 1,
        image: Tshirts,
        name: 'Tshirts',
        to: '/men/tshirt'
    },
    {
        id: 2,
        image: Supima,
        name: 'Supima'
    },
    {
        id: 3,
        image: Joggars,
        name: 'Joggars',
     
    },
    {
        id: 4,
        image: Jackets,
        name: 'Jackets',
        to: '/men/Jacket'
    },
    {
        id: 5,
        image: Hoodies,
        name: 'Hoodies',
        to: '/men/hoodie'
    },
    {
        id: 6,
        image: Sweatshirts,
        name: 'Sweatshirts',
        to: '/men/sweatshirt'
    },
    {
        id: 7,
        image: Shirts,
        name: 'Shirts',
        to: '/men/shirt'
    }, {
        id: 8,
        image: Polo,
        name: 'Polo',
        to: '/men/polo-Tshirt'
    },

]
function Allcategories() {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-semibold  text-center mt-7 md:mt-12'>All Categories</h1>
            </div>
            <div className='grid  grid-cols-2 gap-y-0  md:grid-cols-3 gap-5 mt-8 mx-4'>
                {
                    Categories.map((Categoriesitem, index) => {
                        return (
                            <div key={Categoriesitem.id}>
                                <Link to={Categoriesitem.to}>

                                    <img src={Categoriesitem.image} alt='' className='hover:scale-105 transition-transform duration-100 transform rounded' />
                                    <h1 className='relative bottom-28 text-center text-3xl md:relative md:bottom-60 md:text-4xl font-bold text-white md:text-center'>{Categoriesitem.name}</h1>

                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Allcategories
