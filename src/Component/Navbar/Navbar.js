import { useState, useEffect,useLayoutEffect } from 'react';
import Logo from '../assets/Navbar/logo.jpg';
import Logo1 from '../assets/Navbar/logo1.png.jpg';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Cart from '../cart/Cart';
import { Box, Drawer, Accordion, TextField } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useSelector } from 'react-redux';
import { products } from '../data/Data';
 

function Navbar() {
  const [isMenuOpenMen, setIsMenuOpenMen] = useState(false);
  const [isMenuOpenWomen, setIsMenuOpenWomen] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [menu, setmenu] = useState(false);
  const [searchbar, setSearchBar] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({ backgroundColor: 'transparent', color: 'white' });
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  console.log("search value", searchTerm);
  const { cart } = useSelector((state) => state);

   useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 //USE THE USELAYOUTEFFECT  WHEN YOU PERFORM ANY ANIMATION ,STYLING ,BACICALLY USE FOR STYLING .

  useLayoutEffect(()=>{
    // Check if scrollY is greater than some threshold value
    const threshold = 100; // Adjust this value according to your needs
    setHovered(scrollY > threshold);

    // Change navbar style based on scroll position
    if (scrollY > threshold) {
      setNavbarStyle({ backgroundColor: 'white', color: 'black' });
    } else {
      setNavbarStyle({ backgroundColor: 'transparent', color: 'black' });
    }

  },[scrollY])

  const toggleMenuMen = () => {
    setIsMenuOpenMen(!isMenuOpenMen);
  };

  const toggleMenuWomen = () => {
    setIsMenuOpenWomen(!isMenuOpenWomen);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuDrawer = (newOpen) => () => {
    setmenu(newOpen);
  };

  const searchDrawer = (newOpen) => () => {
    setSearchBar(newOpen);
  };


  // cart icon
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor: 'black', // Set the background color to black
      color: 'white', // Optionally, set the text color to white for better contrast
    },
  }));

  // Increment function
  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  // Decrement function
  const decrementCartCount = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const handleSearch = (value) => {

    if (value !== '') {
      const foundData = products.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchTerm(foundData)
    } else {
      setSearchTerm('')
    }

  }
  return (
    <div>
      <div className='fixed top-0 left-0 w-full z-10 hover:text-black hover:bg-white hidden md:block' style={navbarStyle}  >
        <div className='flex justify-between mx-5'>
          <div className='mt-4 flex gap-2'>
            <SearchIcon
              className=''
              style={{ fontSize: 30 }} />
            <input onClick={searchDrawer(true)} placeholder='What are you looking for!' type='text' className='bg-transparent h-7 w-96 ' />
          </div>
          <div className='w-16 mr-72 text-center'>
            <Link to='/'>
              {hovered ? (
                <img
                  src={Logo}
                  alt="Hovered"
                  className="transition duration-300 transform hover:scale-110"
                />
              ) : (
                <img
                  src={Logo1}
                  alt="Original"
                  className="transition duration-300 transform hover:scale-110"
                />
              )}
            </Link>
          </div>
          <div className='grid grid-cols-3 gap-5 mt-4'>
            <EmailOutlinedIcon />
            <Link to="/loginpage">
              <Person2OutlinedIcon />
            </Link>
 
            {
              cart.length > 0 ? (<StyledBadge badgeContent={cart.length} color="secondary" className='cursor-pointer' onClick={toggleDrawer(true)}>
                <LocalMallOutlinedIcon />

              </StyledBadge>) : (<StyledBadge badgeContent={cart.length}showZero color="secondary" className='cursor-pointer' onClick={toggleDrawer(true)}>
                <LocalMallOutlinedIcon />

              </StyledBadge>)
            }


          </div>
        </div>
        <hr className='mx-5' />
        <div>
          <div className='flex justify-center gap-7 mt-3'>
            <Link to='/' className='hover:scale-110 transition-transform duration-150 transform font-semibold '>Home</Link>

            <div className="relative" onMouseEnter={toggleMenuMen} onMouseLeave={toggleMenuMen}>
              <h1 className='hover:scale-110 transition-transform duration-150 transform font-semibold cursor-pointer'>Men</h1>
              {isMenuOpenMen && (
                <div className="absolute bg-white z-20  p-4 rounded shadow-sm">
                  {/* Your dropdown content here */}
                  <ul className='font-mono'>
                    <Link to='/men/jacket'>
                      <li className='hover:underline transition-all ease-in-out duration-300'>Jackets</li>
                    </Link>
                    <Link to='/men/hoodie'>
                      <li className='hover:underline transition-all ease-in-out duration-300'>Hoodies</li>
                      <Link to='/men/sweatshirt'>
                        <li className='hover:underline transition-all ease-in-out duration-300'> Sweatshirts</li>
                      </Link>
                    </Link>
                    <Link to='/men/tshirt'>
                      <li className='hover:underline transition-all ease-in-out duration-300'>Tshirts</li>
                    </Link>
                    <Link to='/men/shirt'>
                      <li className='hover:underline transition-all ease-in-out duration-300'>shirts</li>
                    </Link>
                    <Link to='/men/polo-Tshirt'>
                      <li className='hover:underline transition-all ease-in-out duration-300'>PoloTshirts</li>
                    </Link>
                    <Link to='/men/bottom'>
                      <li className='hover:underline transition-all ease-in-out duration-300'>bottoms</li>
                    </Link>

                  </ul>
                </div>
              )}
            </div>
            <div className="dropdown" onMouseEnter={toggleMenuWomen} onMouseLeave={toggleMenuWomen}>
              <h1 className='hover:scale-110 transition-transform duration-150 transform font-semibold cursor-pointer'>Women</h1>
              {isMenuOpenWomen && (
                <div className="absolute bg-white z-20  p-4 rounded shadow-sm">
                  {/* Your dropdown content here */}
                  <ul className='font-mono'>
                    <Link to='/women/hoodies'>
                      <li className='hover:underline transition-all ease-in-out duration-300'>Hoodies</li>
                    </Link>
                    <Link to='/women/croptops'>
                      <li className='hover:underline transition-all ease-in-out duration-300'>CropTops</li>
                    </Link>
                    <Link to='/women/bottoms'>
                      <li className='hover:underline transition-all ease-in-out duration-300'>Bottoms</li>
                    </Link>
                  </ul>
                  <Outlet />
                </div>
              )}
            </div>
            <h1 className='hover:scale-110 transition-transform duration-150 transform font-semibold'>Shop All</h1>
            <h1 className='hover:scale-110 transition-transform duration-150 transform font-semibold'><span className='text-red-600'>Sale</span></h1>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      <div>
        <div className='fixed top-0 left-0 w-full z-10 block md:hidden ' style={navbarStyle}>
          <div className='grid grid-cols-3'>
            <div className='flex mt-3 gap-2 ml-4'>
              <MenuIcon onClick={menuDrawer(true)} style={{ fontSize: 35 }} />
              <SearchIcon onClick={searchDrawer(true)} style={{ fontSize: 35 }} />
            </div>
            <div className='w-16 ml-8'>
              <Link to='/'>
                {hovered ? (
                  <img
                    src={Logo}
                    alt="Hovered"
                    className="transition duration-300 transform hover:scale-110"
                  />
                ) : (
                  <img
                    src={Logo1}
                    alt="Original"
                    className="transition duration-300 transform hover:scale-110"
                  />
                )}
              </Link>
            </div>
            <div className='flex gap-3 mt-4 ml-6'>
              <div>
                <div className='hidden md:block'>
                  <EmailOutlinedIcon />
                  <Link to='/loginpage'>
                    <Person2OutlinedIcon />
                  </Link>
                </div>
              </div>

              {
                cart.length > 0 ? (<StyledBadge badgeContent={cart.length} className='cursor-pointer' onClick={toggleDrawer(true)}>
                  <LocalMallOutlinedIcon />

                </StyledBadge>) : (<StyledBadge badgeContent={0} showZero className='cursor-pointer' onClick={toggleDrawer(true)}>
                  <LocalMallOutlinedIcon />

                </StyledBadge>)
              }
            </div>
          </div>
        </div>
        {/* menu Drawer */}
        <div>
          <Drawer anchor="left" open={menu} onClose={menuDrawer(false)}>
            <Box sx={{ width: 250 }} role="presentation">
              <div>
                <div>
                  <div className='flex justify-end mt-6 mr-4'>
                    <CloseIcon
                      className=''
                      onClick={menuDrawer(false)}
                    />

                  </div>
                  <hr className='mt-5' />
                  <div>
                    <ul>
                      <Link to='/'>
                        <li onClick={menuDrawer(false)} className='font-bold text-2xl ml-3 mt-3  text-gray-500'>Home</li>
                        <hr className='mt-3' />
                      </Link>
                      <Link to='/'>
                        <li onClick={menuDrawer(false)} className='font-bold text-2xl ml-3 mt-3  text-gray-500'> Shop All</li>
                        <hr className='mt-3' />
                      </Link>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <h1 className='font-bold text-xl text-gray-500'>Men</h1>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className=''>
                            <Link to='/men/jacket'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'>Jackets</li>
                            </Link>
                            <Link to='/men/sweatshirt'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'> Sweatshirts</li>
                            </Link>
                            <Link to='/men/hoodie'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'>Hoodies</li>
                            </Link>
                            <Link to='/men/tshirt'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'>Tshirts</li>
                            </Link>
                            <Link to='/men/shirt'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'>shirts</li>
                            </Link>
                            <Link to='/men/polo-Tshirt'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'>PoloTshirts</li>
                            </Link>
                            <Link to='/men/bottom'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'>Bottoms</li>
                            </Link>
                          </ul>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <h1 className='font-bold text-xl text-gray-500'>Women</h1>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className=''>
                            <Link to='/women/croptops'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'>CropTops</li>
                            </Link>
                            <Link to='/women/hoodies'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'>Hoodies</li>
                            </Link>

                            <Link to='/women/bottoms'>
                              <li onClick={menuDrawer(false)} className='font-normal text-xl ml-3 mt-3  text-gray-500'>Bottoms</li>
                            </Link>

                          </ul>
                        </AccordionDetails>
                      </Accordion>

                      <li onClick={menuDrawer(false)} className='font-bold text-xl ml-3 mt-4  text-red-500'> Sale </li>
                      <Link to="/loginpage">
                        <hr className='mt-3' />
                        <div className='flex mt-80'>
                          < PermIdentityOutlinedIcon
                            style={{ fontSize: 38 }} />

                          <li onClick={menuDrawer(false)} className='font-bold text-2xl ml-3 mt-2  text-gray-500'>Accounts</li>
                        </div>
                        <hr className='mt-3' />
                      </Link>


                    </ul>
                  </div>
                </div>
              </div>
            </Box>
          </Drawer>
        </div>

      </div>


      <Cart
        toggleDrawer={toggleDrawer}
        handleOpenDrawer={open}
        open={open}
        setCartCount={setCartCount}
        incrementCartCount={incrementCartCount}
        decrementCartCount={decrementCartCount}

      />
      {/* Serarch bar  drawer  */}
      <div>
        <div>
          <Drawer anchor="left" open={searchbar} onClose={searchDrawer(false)}>
            <Box sx={{ width: 350 }} role="presentation">
              <div className='fixed h-12'>
                <div className='flex  bg-white  h-20 pt-5 '>
                  <div className='flex ml-4'>
                    <SearchIcon className='mt-1 md:mt-0'
                      style={{ fontSize: 30 }} />

                    <TextField size='small' className=' h-9 md:h-7 w-60  hidden md:block' onChange={(event) => { handleSearch(event.target.value) }}
                      type='text'
                      placeholder='What are you looking for?'

                    />
                    <input className=' h-9 md:h-7 w-60  focus:outline-none  block md:hidden  ' value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value) }}
                      type='text'
                      placeholder='What are you looking for?'

                    />
                  </div>
                  <div>
                    <CloseIcon onClick={searchDrawer(false)}
                      className='ml-6 md:ml-'
                    />
                  </div>
                </div>
                <hr className='w-[350px]  ' />
              </div>
              <div>


                <div className='mt-28 ml-5'>
                  {searchTerm.length === 0 ? <div>

                    <div>
                      <Link to='/'>
                        <h1 onClick={searchDrawer(false)} className='font-bold text-xl'>Home</h1>
                      </Link>

                      <Link>
                        <h1 onClick={searchDrawer(false)} className='font-bold text-lg mt-7'> SHOP ALL</h1>
                      </Link>
                      <div>
                        <ul>
                          <h1 className='text-lg font-bold mt-9'> Men</h1>
                          <div>
                            <Link to='/men/jacket'>
                              <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Jackets</li>
                            </Link>
                            <Link to='/men/hoodie'>
                              <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Hoodies</li>
                            </Link>
                            <Link to='/men/sweatshirt'>
                              <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'> Sweatshirts</li>
                            </Link>
                            <Link to='/men/tshirt'>
                              <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Tshirts</li>
                            </Link>
                            <Link to='/men/shirt'>
                              <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>shirts</li>
                            </Link>
                            <Link to='/men/polo-Tshirt'>
                              <li onClick={searchDrawer(false)} className='font-serif text-smcursor-pointer  mt-2 3hover:text-gray-400'>PoloTshirts</li>
                            </Link>
                            <Link to='/men/bottom'>
                              <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Bottoms</li>
                            </Link>
                          </div>
                        </ul>
                        <div>
                          <div>
                            <ul>
                              <h1 className='text-lg font-bold mt-5'> Women</h1>
                              <Link to='/women/croptops'>
                                <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Croptops</li>
                              </Link>
                              <Link to='/women/hoodies'>
                                <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Hoodies</li>
                              </Link>
                              <Link to='/women/bottoms'>
                                <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Bottoms</li>
                              </Link>

                            </ul>
                          </div>
                          <h1 className='text-lg font-bold mt-9'>Sale</h1>
                          <div>
                            <h1 className='text-lg font-bold mt-9'>RICH COTTON</h1>
                            <ul>
                              <Link >
                                <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Supima + Modal</li>
                              </Link>
                              <Link >
                                <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Supima</li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                        <div className='mb-9'>
                          <h1 className='text-lg font-bold mt-9 '>GET IN TOUCH!</h1>
                          <ul>
                            <Link >
                              <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>FAQ</li>
                            </Link>
                            <Link >
                              <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>About Us</li>
                            </Link>
                            <Link >
                              <li onClick={searchDrawer(false)} className='font-serif text-sm cursor-pointer mt-2  hover:text-gray-400'>Contact Us</li>
                            </Link>
                          </ul>
                        </div>
                      </div>

                    </div>



                  </div>
                    : (
                      <div>
                        {searchTerm.map((item, index) => {
                          return (
                            <div key={item.id} className='flex gap-8 mb-3 cursor-pointer' onClick={() => { navigate('Product', { state: searchTerm[index] }); searchDrawer()(false); }}>

                              <div>
                                <img src={item.image} alt="" className='h-32  w-28 object-fill rounded-md' />
                              </div>
                              <div className='mt-5'>
                                <h1 className='font-medium '>{item.name}</h1>
                                <h1 className='text-red-500 font-semibold'> ₹<span className='font-medium'> {item.price}</span></h1>
                              </div>

                            </div>
                          )
                        })}
                      </div>
                    )}
                </div>
              </div>
            </Box>

          </Drawer>
        </div>
        <div>

        </div>
      </div>


    </div>
  );
}
export default Navbar;
