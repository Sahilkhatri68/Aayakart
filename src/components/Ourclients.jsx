import React from 'react'
import "./../assets/css/demo1.min.css"
import "./../assets/css/style.min.css"
import InfiniteCarousel from 'react-leaf-carousel';

import d1 from "./../assets/images/demos/demo1/brands/1.png"
import d2 from "./../assets/images/demos/demo1/brands/2.png"
import d3 from "./../assets/images/demos/demo1/brands/3.png"
import d4 from "./../assets/images/demos/demo1/brands/4.png"
import d5 from "./../assets/images/demos/demo1/brands/5.png"
import d6 from "./../assets/images/demos/demo1/brands/6.png"
import d7 from "./../assets/images/demos/demo1/brands/7.png"
import d8 from "./../assets/images/demos/demo1/brands/8.png"
import d9 from "./../assets/images/demos/demo1/brands/9.png"
import d10 from "./../assets/images/demos/demo1/brands/10.png"
import d11 from "./../assets/images/demos/demo1/brands/11.png"
import d12 from "./../assets/images/demos/demo1/brands/12.png"
export default function Ourclients() {
    return (
        <div style={{ margin: "auto auto 40px auto" }}   >
            <div>
                <h2
                    className="title title-underline mb-4 ls-normal appear-animate fadeIn appear-animation-visible"
                    style={{ animationDuration: "1.2s" }}>
                    Our Clients
                </h2>
            </div>
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                ]}
                dots={false}
                showSides={true}
                sidesOpacity={.5}
                sideSize={.1}
                slidesToScroll={6}
                slidesToShow={6}
                scrollOnDevice={true}  
            >

                <div
                    className="swiper-slide brand-col swiper-slide-active"
                    role="group"
                    aria-label="1 / 6"
                    style={{ width: "219.8px" }}
                >
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d1}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d2}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                </div>
                <div
                    className="swiper-slide brand-col swiper-slide-next"
                    role="group"
                    aria-label="2 / 6"
                    style={{ width: "219.8px" }}
                >
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d3}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d4}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                </div>
                <div
                    className="swiper-slide brand-col"
                    role="group"
                    aria-label="3 / 6"
                    style={{ width: "219.8px" }}
                >
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d5}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d6}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                </div>
                <div
                    className="swiper-slide brand-col"
                    role="group"
                    aria-label="4 / 6"
                    style={{ width: "219.8px" }}
                >
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d7}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d8}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                </div>
                <div
                    className="swiper-slide brand-col"
                    role="group"
                    aria-label="5 / 6"
                    style={{ width: "219.8px" }}
                >
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d9}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d10}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                </div>
                <div
                    className="swiper-slide brand-col"
                    role="group"
                    aria-label="6 / 6"
                    style={{ width: "219.8px" }}
                >
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d1}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                    <figure className="brand-wrapper" style={{ width: "170px" }}>
                        <img
                            src={d12}
                            alt="Brand"
                            width="auto"
                            height={186}
                        />
                    </figure>
                </div>


            </InfiniteCarousel>
        </div>
    )
}

