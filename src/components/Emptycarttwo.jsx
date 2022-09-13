import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import lg from "./../assets/images/login.jpg";
import Footer from './Footer';
import Mainheader from './Mainheader';
import ecart from "./../assets/images/pages/emptycart.webp"
function Emptycarttwo() {
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
        <div><div>
            <div>
                <Mainheader />
            </div>
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2, stiffness: 500 }}
                style={{
                    width: "100%",
                    height: "100%",
                }} className='imgdivv'>
                <h1 className='headerempty'>Your <span className='spn'>Cart</span>  is empty </h1>
                <div className='imgindiv' >
                    <img src={ecart} className="loginpic" style={{width:"50%"}} />
                </div>
            </motion.div>

            <div>
                <Footer />
            </div>
        </div></div>
    )
}

export default Emptycarttwo