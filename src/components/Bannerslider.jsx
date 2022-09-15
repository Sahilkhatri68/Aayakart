import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pr5 from "./../assets/images/demos/demo1/products/4-5-1.jpg"
import pr6 from "./../assets/images/demos/demo1/products/4-5-2.jpg"
import pr7 from "./../assets/images/demos/demo1/products/4-6.jpg"
import pr8 from "./../assets/images/demos/demo1/products/4-7.jpg"
import pr9 from "./../assets/images/demos/demo1/products/4-8.jpg"
export default function Bannerslider() {

    return (
        <div style={{ width: 400 }}> <Carousel>
            <div>
                <img src={pr5} />

            </div>
            <div>
                <img src={pr6} />

            </div>
            <div>
                <img src={pr7} />

            </div>
            <div>
                <img src={pr8} />

            </div>
            <div>
                <img src={pr9} />

            </div>

        </Carousel></div>

    );
}


//Don't forget to include the CSS in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>