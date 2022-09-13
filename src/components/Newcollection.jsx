import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./../assets/css/demo1.min.css"
import "./../assets/css/style.min.css"
import im from "./../assets/images/demos/demo1/products/5-1-1.jpg"
import im2 from "./../assets/images/demos/demo1/products/5-1-2.jpg"
import im3 from "./../assets/images/demos/demo1/products/5-2-2.jpg"
import im4 from "./../assets/images/demos/demo1/products/5-2-1.jpg"
import im5 from "./../assets/images/demos/demo1/products/5-3.jpg"
import im6 from "./../assets/images/demos/demo1/products/5-5.jpg"
import im7 from "./../assets/images/demos/demo1/products/5-6.jpg"
import im8 from "./../assets/images/demos/demo1/products/5-7.jpg"
import im9 from "./../assets/images/demos/demo1/products/5-8.jpg"
import im10 from "./../assets/images/demos/demo1/products/5-4.jpg"
import photo from "./../assets/images/demos/demo1/banners/3.jpg"
export default function Newcollection() {
  const [product, setProduct] = useState([]);
  async function Getproducts() {
    try {
      const response = await axios.get("https://ayakart.dauqu.com/api/products");
      setProduct(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    Getproducts();
  }, []);
  return (
    <div
      className="product-wrapper-1 appear-animate mb-8 fadeIn appear-animation-visible"
      style={{ animationDuration: "1.2s" }}
    >
      <div className="title-link-wrapper pb-1 mb-4">
        <h2 className="title ls-normal mb-0">Consumer Electric</h2>
        <Link to="/allproduct"
          href="shop-boxed-banner.html"
          className="font-size-normal font-weight-bold ls-25 mb-0"
        >
          More Products
          <i className="w-icon-long-arrow-right" />
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-4 mb-4">
          <div
            className="banner h-100 br-sm"
            style={{
              backgroundImage: `url(${photo})`,
              backgroundColor: "#252525"
            }}
          >
            <div className="banner-content content-top">
              <h5 className="banner-subtitle text-white font-weight-normal mb-2">
                New Collection
              </h5>
              <hr className="banner-divider bg-white mb-2" />
              <h3 className="banner-title text-white font-weight-bolder text-uppercase ls-25">
                Top Camera <br />{" "}
                <span className="font-weight-normal text-capitalize">
                  Mirrorless
                </span>
              </h3>
              <a
                href="shop-banner-sidebar.html"
                className="btn btn-white btn-outline btn-rounded btn-sm"
              >
                shop now
              </a>
            </div>
          </div>
        </div>
        {/* End of Banner */}
        <div className="col-lg-9 col-sm-8">
          <div
            className="swiper-container swiper-theme swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
            data-swiper-options="{
                          'spaceBetween': 20,
                          'slidesPerView': 2,
                          'breakpoints': {
                              '992': {
                                  'slidesPerView': 3
                              },
                              '1200': {
                                  'slidesPerView': 4
                              }
                          }
                      }"
          >
            <div
              className="swiper-wrapper "
              id="swiper-wrapper-e5f97a5e6179d548"
              aria-live="polite"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              {product.map((item) => {
                return (
                  <>
                    <div
                      className="swiper-slide product-col swiper-slide-active"
                      role="group"
                      aria-label="1 / 4"
                      style={{ width: "268.667px", marginRight: 20 }}
                    >
                      <Link to={`/product/${item.slug}`}>
                        <div className="product-wrap product text-center">
                          <figure className="product-media" style={{ height: 330 }}>

                            <img
                              src={item.featured_image}
                              alt="Product"
                              width={216}
                              height={243}
                            />


                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                            <div className="product-label-group">
                              <label className="product-label label-discount">6% Off</label>
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Professional Pixel Camera</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }} />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a href="product-default.html" className="rating-reviews">
                                (5 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$215.68</ins>
                              <del className="old-price">$230.45</del>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to={`/product/${item.slug}`}>
                        <div className="product-wrap product text-center">
                          <figure className="product-media" style={{ height: 330 }}>

                            <img
                              src={item.featured_image}
                              alt="Product"
                              width={216}
                              height={243}
                            />

                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Latest Speaker</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span className="ratings" style={{ width: "60%" }} />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a href="product-default.html" className="rating-reviews">
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$250.68</ins>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                )
              })}



            </div>
            <div
              className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
              style={{ display: "block" }}
            >
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 2"
              />
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
          {/* End of Produts */}
        </div>
      </div>
    </div>

  )
}
