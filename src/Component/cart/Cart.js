import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { remove, increaseQuantity, decreaseQuantity, selectTotalPrice } from '../app/slices/CartSlice';
import { enqueueSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

export default function Cart(props) {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const totalPrice = useSelector(selectTotalPrice);

  const removeItemFromCart = (id) => {
    dispatch(remove(id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const calculateTotalPrice = (price, quantity) => {
    return price * quantity;
  };

  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={props.toggleDrawer(false)}>
        <Box sx={{ width: 400 }} role="presentation">
          <div className='fixed bg-white h-20 w-[100%] md:w-[29%]'>
            <div className='flex mt-8 gap-x-48'>
              <div className='flex ml-8 gap-x-3'>
                <LocalMallOutlinedIcon style={{ fontSize: 30 }} />
                <h1 className='font-semibold text-2xl'>{cart.length} items</h1>
              </div>
              <CloseIcon
                className='cursor-pointer'
                onClick={props.toggleDrawer(false)}
                style={{ fontSize: 30 }}
              />
            </div>
            <hr className='mt-4 w-full' />
          </div>

          {/* Cart data */}
          {cart.length > 0 ? (
            <div className='mt-24 overflow-y-auto max-h-[calc(100vh-240px)] mb-4'>
              {cart?.map((item) => (
                <div key={item?.id} className='mx-5 md:mx-3'>
                  <div className='flex gap-5 mb-5'>
                    <img className='h-32 w-28 object-rounded rounded-md' src={item?.image} alt='item' />
                    <div className='flex gap-5'>
                      <div>
                        <h1 className='text-black text-sm cursor-pointer font-bold'>{item?.name}</h1>
                        <h1 className='mt-3'>Size: <span className='font-bold'>{item?.Size}</span></h1>

                        <div className='flex gap-6 mt-3'>
                          <div className='flex border w-24 h-10 justify-between rounded-md px-2'>
                            <button onClick={() => handleDecreaseQuantity(item?.id)} className='font-bold text-xl'>-</button>
                            <h1 className='mt-2 md:mt-2'>{item?.quantity}</h1>
                            <button onClick={() => handleIncreaseQuantity(item?.id)} className='font-extrabold text-xl'>+</button>
                          </div>
                          <h1 onClick={() => removeItemFromCart(item?.id)} className='underline text-sm text-gray-500 cursor-pointer hover:text-black font-mono mt-1'>Remove</h1>
                        </div>
                      </div>
                      <div>
                        <h1 className=''><span className='font-extrabold'>₹</span>{calculateTotalPrice(item?.price, item?.quantity)}</h1>
                      </div>
                    </div>
                  </div>
                  <hr className='mb-3' />
                </div>
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center h-full'>
              <h1 className="text-gray-700 font-semibold text-xl mb-2">
                Your cart is empty!
              </h1>
            </div>
          )}

          {/* Display total price and Proceed to Checkout button */}
          <div className='fixed bottom-11 left-0 md:ml-[71%]'>
            {cart.length > 0 && (
              <>
                <h1 className='text-xl font-bold mb-2 ml-6'>Total price: <span className="font-extrabold">₹{totalPrice}</span></h1>
                <button
                  className='font-medium bg-black text-white p-4 md:p-3 rounded w-[369px] md:w-[365px] ml-2'
                >
                  PROCEED TO CHECKOUT
                </button>
              </>
            )}
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
