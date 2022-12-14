import React from 'react'
import "./../assets/css/demo1.min.css";
import InfiniteCarousel from 'react-leaf-carousel';

import "./../assets/css/style.min.css";
import cat1 from "./../assets/images/demos/demo1/categories/2-1.jpg"
import cat2 from "./../assets/images/demos/demo1/categories/2-2.jpg"
import cat3 from "./../assets/images/demos/demo1/categories/2-3.jpg"
import cat4 from "./../assets/images/demos/demo1/categories/2-4.jpg"
import cat5 from "./../assets/images/demos/demo1/categories/2-5.jpg"
import cat6 from "./../assets/images/demos/demo1/categories/2-6.jpg"
export default function Topcategories() {
    return (
        <>
            <section
                className="category-section top-category bg-grey pt-10 pb-10 appear-animate fadeIn appear-animation-visible "
                style={{ animationDuration: "1.2s" }}
            >
                <div className="container pb-2">
                    <h2 className="title justify-content-center pt-1 ls-normal mb-5">
                        Top Categories Of The Month
                    </h2>
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
                            className="swiper-slide category category-classic category-absolute overlay-zoom br-xs swiper-slide-active"
                            role="group"
                            aria-label="1 / 6"
                            style={{ width: "155.667px", marginRight: 20 }}
                        >
                            <a href="shop-banner-sidebar.html" className="category-media">
                                <img
                                    src={cat1}
                                    alt="Category"
                                    width={130}
                                    height={130}
                                />
                            </a>
                            <div className="category-content">
                                <h4 className="category-name">Fashion</h4>
                                <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-primary btn-link btn-underline"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div
                            className="swiper-slide category category-classic category-absolute overlay-zoom br-xs swiper-slide-next"
                            role="group"
                            aria-label="2 / 6"
                            style={{ width: "155.667px", marginRight: 20 }}
                        >
                            <a href="shop-banner-sidebar.html" className="category-media">
                                <img
                                    src={cat2}
                                    alt="Category"
                                    width={130}
                                    height={130}
                                />
                            </a>
                            <div className="category-content">
                                <h4 className="category-name">Furniture</h4>
                                <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-primary btn-link btn-underline"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div
                            className="swiper-slide category category-classic category-absolute overlay-zoom br-xs"
                            role="group"
                            aria-label="3 / 6"
                            style={{ width: "155.667px", marginRight: 20 }}
                        >
                            <a href="shop-banner-sidebar.html" className="category-media">
                                <img
                                    src={cat3}
                                    alt="Category"
                                    width={130}
                                    height={130}
                                />
                            </a>
                            <div className="category-content">
                                <h4 className="category-name">Shoes</h4>
                                <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-primary btn-link btn-underline"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div
                            className="swiper-slide category category-classic category-absolute overlay-zoom br-xs"
                            role="group"
                            aria-label="4 / 6"
                            style={{ width: "155.667px", marginRight: 20 }}
                        >
                            <a href="shop-banner-sidebar.html" className="category-media">
                                <img
                                    src={cat4}
                                    alt="Category"
                                    width={130}
                                    height={130}
                                />
                            </a>
                            <div className="category-content">
                                <h4 className="category-name">Sports</h4>
                                <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-primary btn-link btn-underline"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div
                            className="swiper-slide category category-classic category-absolute overlay-zoom br-xs"
                            role="group"
                            aria-label="4 / 6"
                            style={{ width: "155.667px", marginRight: 20 }}
                        >
                            <a href="shop-banner-sidebar.html" className="category-media">
                                <img
                                    src={cat4}
                                    alt="Category"
                                    width={130}
                                    height={130}
                                />
                            </a>
                            <div className="category-content">
                                <h4 className="category-name">Sports</h4>
                                <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-primary btn-link btn-underline"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div
                            className="swiper-slide category category-classic category-absolute overlay-zoom br-xs"
                            role="group"
                            aria-label="5 / 6"
                            style={{ width: "155.667px", marginRight: 20 }}
                        >
                            <a href="shop-banner-sidebar.html" className="category-media">
                                <img
                                    src={cat5}
                                    alt="Category"
                                    width={130}
                                    height={130}
                                />
                            </a>
                            <div className="category-content">
                                <h4 className="category-name">Games</h4>
                                <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-primary btn-link btn-underline"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div
                            className="swiper-slide category category-classic category-absolute overlay-zoom br-xs"
                            role="group"
                            aria-label="6 / 6"
                            style={{ width: "155.667px", marginRight: 20 }}
                        >
                            <a href="shop-banner-sidebar.html" className="category-media">
                                <img
                                    src={cat6}
                                    alt="Category"
                                    width={130}
                                    height={130}
                                />
                            </a>
                            <div className="category-content">
                                <h4 className="category-name">Computers</h4>
                                <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-primary btn-link btn-underline"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>


                    </InfiniteCarousel>
                </div>
            </section>

        </>

    )
}