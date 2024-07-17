import React from 'react'
import Carasoel from '../home/Carasoel'
import Homepage from '../home/Homepage';
import Carasoel2 from '../home/Carasoel2';
import Homepage2 from '../home/Homepage2';
import Carasoel3 from '../home/Carasoel3';
import HomepageTabs from '../home/hometabs/HomepageTabs';
import Carasoel4 from '../home/Carasoel4';
import Allcategories from '../home/Allcategories';
 
function Mainhomepage() {
  return (
    <div className=''>
      <Carasoel />
      <Homepage />
      <Carasoel2 />
      <Homepage2 />
      <Carasoel3 />
      <HomepageTabs />
      <Carasoel4 />
      <Allcategories />
      {/* <Footer/> */}
      
    </div>
  )
}

export default Mainhomepage
