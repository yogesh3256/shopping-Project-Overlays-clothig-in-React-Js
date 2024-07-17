import * as React from 'react';
import Box from '@mui/material/Box';
import { Link, Outlet,useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';



export default function HomepageTabs() {
  const { pathname } = useLocation();
  const scrollPositionRef = useRef({});

  // Store the scroll position when navigating away from a route
  useEffect(() => {
    scrollPositionRef.current[pathname] = window.scrollY;
  }, [pathname]);

  // Restore the scroll position when navigating back to a route
  useEffect(() => {
    const scrollPosition = scrollPositionRef.current[pathname];
    if (scrollPosition !== undefined) {
      window.scrollTo(0, scrollPosition);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);



  return (

    <div className='mb-10 mt-6'>
      <div>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>


          <div className=' text-center grid grid-cols-3 gap-3'>
            <Link to='/'><h1 className='hover:underline font-sans'>JACKETS</h1> </Link>
            <Link to='/joggars'><h1 className='hover:underline font-sans'>JOGGARS</h1> </Link>
            <Link to='/shirts'><h1 className='hover:underline font-sans'>SHIRTS</h1> </Link>

          </div>
        </Box>
        
      </div>
      <Outlet />
    </div >
  );
}