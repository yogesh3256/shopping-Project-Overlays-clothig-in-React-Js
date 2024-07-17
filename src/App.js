import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Joggars from './Component/home/hometabs/Joggars';
import Jackets from './Component/home/hometabs/Jackets';
import Shirts from './Component/home/hometabs/Shirts';
import Mainhomepage from './Component/mainHomepage/Mainhomepage'
import { Routes, Route } from 'react-router-dom';
import Jacket from './Component/men/Jacket';
import Hoodie from './Component/men/Hoodie';
import Tshirt from './Component/men/Tshirt';
import Shirt from './Component/men/Shirt';
import Bottom from './Component/men/Bottom';
import PoloTshirts from './Component/men/PoloTshirts';
import Hoodies from './Component/women/Hoodies';
import Croptops from './Component/women/Croptops';
import Bottoms from './Component/women/Bottoms';
import Footer from './Component/footer/Footer';
import Product from './Component/reuseble component/Product';
import Sweatshirts from './Component/men/Sweatshirts';
import Loginpage from './Component/Login page/Loginpage';
import ForgotPass from './Component/Login page/ForgotPass';
import CreateAccountpage from './Component/Login page/CreateAccountpage';
import { Provider } from 'react-redux';
import { store } from './Component/app/Store';
import { SnackbarProvider } from 'notistack';
import { Slide } from "@mui/material";
import ErrorPage from './Component/404 page/ErrorPage';



function App() {
  return (
    <div className='overflow-x-hidden'>
      <SnackbarProvider
        TransitionComponent={Slide}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path='/Product' element={< Product />} />
            <Route path='/' element={<Mainhomepage />} >
              <Route index element={<Jackets />} />
              <Route path="joggars" element={<Joggars />} />
              <Route path="shirts" element={<Shirts />} />

            </Route>
            <Route path="loginpage" element={<Loginpage />} />
            <Route path="loginpage/Recover_password" element={<ForgotPass />} />
            <Route path="loginpage/CreateAccount" element={< CreateAccountpage />} />

            {/* Men Routes */}

            <Route path='/men/jacket/Product' element={< Product />} />
            <Route path='/men/hoodie/Product' element={< Product />} />
            <Route path='/men/sweatshirt/Product' element={< Product />} />
            <Route path='/men/tshirt/Product' element={< Product />} />
            <Route path='/men/shirt/Product' element={< Product />} />
            <Route path='/men/Tshirt/Product' element={< Product />} />
            <Route path='/men/polo-Tshirt/Product' element={< Product />} />
            <Route path='/men/bottom/Product' element={< Product />} />

            <Route path='/men/jacket' element={<Jacket />} />
            <Route path='/men/sweatshirt' element={<Sweatshirts />} />
            <Route path='/men/hoodie' element={<Hoodie />} />
            <Route path='/men/tshirt' element={<Tshirt />} />
            <Route path='/men/shirt' element={<Shirt />} />
            <Route path='/men/bottom' element={<Bottom />} />
            <Route path='/men/polo-Tshirt' element={<PoloTshirts />} />

            {/* Women Routes */}

            <Route path='/women/hoodies/Product' element={< Product />} />
            <Route path='/women/croptops/Product' element={<Product />} />
            <Route path='/women/bottoms/Product' element={<Product />} />
            <Route path='/women/hoodies' element={<Hoodies />} />
            <Route path='/women/croptops' element={< Croptops />} />
            <Route path='/women/bottoms' element={<  Bottoms />} />
            <Route path='*' element={< ErrorPage />} />
          </Routes>


          <Footer />
        </Provider>
      </SnackbarProvider>
    </div>
  )
}

export default App
