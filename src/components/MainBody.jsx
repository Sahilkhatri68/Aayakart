import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"

import "./../assets/css/mainbody.css"
import Container from './Container'
import Footer from './Footer'
import Introsection from './Introsection'
import Mainheader from './Mainheader'
import Midbanner from './Midbanner'
import Newarrivals from './Newarrivals'
import NewBanner from './NewBanner'
import Newcollection from './Newcollection'
import OurBlog from './OurBlog'
import Ourclients from './Ourclients'
import Populardepartments from './Populardepartments'
import Topcategories from './Topcategories'

export default function MainBody() {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, [])

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2, stiffness: 500 }}
      style={{
        width: "100%",
        height: "100%",
      }} className='masterdiv' >
      <div className='maincont' >
        <Mainheader />
      </div>
      <div>
        <Introsection />
      </div>
      <div className='insidecont'>
        <div className='insideitem' >
          <Container />
        </div>

      </div>
      <div>
        <Topcategories />
      </div>
      <div className='popitem'>
        <Populardepartments />
      </div>
      <div className='banitem'>
        <Midbanner />
      </div>
      <div className='newarr'>
        <Newarrivals />
      </div>
      <div className='newarr'>
        <Newcollection />
      </div>
      <div className='newarr'>
        <NewBanner />
      </div>
      <div className='newarr'>
        <Ourclients />
      </div>

      <Footer />
    </motion.div>

  )
}
