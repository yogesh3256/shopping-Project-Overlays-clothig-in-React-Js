import React from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Sizeimg from '../assets/sizechart/sizechart.jpg';
import Sizechartpants from "../assets/sizechart/sizechartpants.jpg"
function SizeChart(props) {
    return (
        <div>
            <div className='hidden md:block '>

                <Drawer anchor="right" open={props.open} onClose={props.toggleDrawer(false)}>
                    <Box sx={{ width: 450 }} role="presentation" >
                        <div className='fixed h-20 bg-white w-[33%]'>
                            <div className='ml-[90%]'>

                                <CloseIcon onClick={props.toggleDrawer(false)}
                                    style={{ fontSize: 30 }}
                                    className='mt-8'
                                />
                            </div>
                            <hr className='mt-3' />
                        </div>
                        <div className='mt-14'>
                            <img src={Sizeimg} alt='dehwe' />
                            <img src={Sizechartpants} alt='dehwe' />
                        </div>

                    </Box>
                </Drawer>
            </div>
            <div className='block md:hidden'>

                <Drawer anchor="bottom" open={props.open1} onClose={props.toggleDrawer1(false)}>
                    <Box sx={{ width: 400, height: 600 }} role="presentation" >
                        
                            <div className='fixed h-20 bg-white w-full'>
                                <div className='ml-[85%]  '>
                                    <CloseIcon onClick={props.toggleDrawer1(false)}
                                        style={{ fontSize: 30 }}
                                        className='   mt-6 mr-9'
                                    />
                                </div>
                                <hr className=' mt-3 ' />
                            </div>
                           
                                <div className='mt-16'>
                                    <img src={Sizeimg} alt='dehwe' />
                                    <img src={Sizechartpants} alt='dehwe' />

                                </div>
                             
                        
                    </Box>
                </Drawer>
            </div>
        </div>
    )
}

export default SizeChart
