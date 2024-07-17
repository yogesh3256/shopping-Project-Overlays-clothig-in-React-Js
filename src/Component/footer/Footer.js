import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { TextField } from '@mui/material';
function Footer() {
    return (
        <div className='bg-gray-200 md:w-auto md:h-full  md:pl-5  pl-8  space-y-2  '>
            <div className='grid md:grid-cols-4 space-y-4 w-full h-full '>


                <div>
                    <h1 className='font-bold mb-6 mt-4'>ABOUT US</h1>
                    <ul className='space-y-3'>
                        <li>Overlays Clothing Pvt Ltd</li>
                        <li> Explore to CHANGE. </li>
                        <li>  Learn More</li>

                    </ul>
                </div>
                <div>
                    <h1 className='font-bold mb-6'>POLICIES</h1>
                    <ul className='space-y-3'>
                        <li>  Return Your Order</li>
                        <li> Shipping Policy </li>
                        <li> Return, Refund, and Cancellation </li>
                        <li> Terms and Conditions</li>
                        <li> Privacy Policy</li>
                        <li> Fraud Protection </li>


                    </ul>
                </div>
                <div>
                    <h1 className='font-bold mb-7 '>NEWSLETTER</h1>
                    <p>You can be the first one to know about<br /> our new releases, latest offers and more.<br/>
                        <span className='cursor-pointer underline'> Sign up now!
                        </span>
                    </p>
                    <div className='mt-6'>
                        <TextField
                            className='mt-6'
                            placeholder='@mail.com'
                            size='small'

                        />
                    </div>


                </div>
                <div  >
                <h1 className='font-bold mb-6 '>FOLLOW US</h1>
                    <ul className='space-y-3'>
                        <li> <FacebookRoundedIcon />Facebook </li>
                        <li> <InstagramIcon />Instagram </li>
                        <li> <TwitterIcon />Twitter </li>
                        <li> <YouTubeIcon />YouTube </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
