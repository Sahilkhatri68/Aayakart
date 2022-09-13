import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./../assets/css/demo1.min.css";
import "./../assets/css/style.min.css";
import "./../assets/vendor/animate/animate.min.css";
import "./../assets/vendor/swiper/swiper-bundle.min.css";
import ban from "./../assets/images/demos/demo1/banners/2.jpg"
import pr1 from "./../assets/images/demos/demo1/products/4-1.jpg"
import pr2 from "./../assets/images/demos/demo1/products/4-2-2.jpg"
import pr3 from "./../assets/images/demos/demo1/products/4-3.jpg"
import pr4 from "./../assets/images/demos/demo1/products/4-2-1.jpg"
import pr5 from "./../assets/images/demos/demo1/products/4-5-1.jpg"
import pr6 from "./../assets/images/demos/demo1/products/4-5-2.jpg"
import pr7 from "./../assets/images/demos/demo1/products/4-6.jpg"
import pr8 from "./../assets/images/demos/demo1/products/4-7.jpg"
import pr9 from "./../assets/images/demos/demo1/products/4-8.jpg"
export default function Newarrivals() {
  const [product, setProduct] = useState([]);
  async function Getproducts() {
    try {
      const response = await axios.get("https://ayakart.dauqu.com/api/products");
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    Getproducts();
  }, []);
  return (
    <div
      className="product-wrapper-1 appear-animate mb-5 fadeIn appear-animation-visible"
      style={{ animationDuration: "1.2s" }}
    >
      <div className="title-link-wrapper pb-1 mb-4">
        <h2 className="title ls-normal mb-0">Clothing &amp; Apparel</h2>
        <Link to ="/allproduct"
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
              backgroundImage: `url(${ban})`,
              backgroundColor: "#ebeced"
            }}
          >
            <div className="banner-content content-top">
              <h5 className="banner-subtitle font-weight-normal mb-2">
                Weekend Sale
              </h5>
              <hr className="banner-divider bg-dark mb-2" />
              <h3 className="banner-title font-weight-bolder ls-25 text-uppercase">
                New Arrivals
                <br />{" "}
                <span className="font-weight-normal text-capitalize">
                  Collection
                </span>
              </h3>
              <a
                href="shop-banner-sidebar.html"
                className="btn btn-dark btn-outline btn-rounded btn-sm"
              >
                shop Now
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
              id="swiper-wrapper-a43304593357ad92"
              aria-live="polite"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              {product.map((item) => {
                return (<>
                  <div
                    className="swiper-slide product-col swiper-slide-active"
                    role="group"
                    aria-label="1 / 4"
                    style={{ width: "291.5px", marginRight: 20 }}
                  >
                    
                    <div className="product-wrap product text-center">
                      <figure className="product-media" style={{height:350}}>
                        <a href="#">
                          <img
                            src={item.featured_image}
                            alt="Product"
                            width={216}
                            height={243}
                          />
                        </a>
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
                          <a href="product-default.html">Men’s Clothing</a>
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
                        <ins className="new-price">{Intl.NumberFormat("en-US", {
                                                    style: "currency",
                                                    currency: "INR",
                                                }).format(item.sale_price)}</ins>
                          <del className="old-price">{Intl.NumberFormat("en-US", {
                                                    style: "currency",
                                                    currency: "INR",
                                                }).format(item.regular_price)}</del>
                        </div>
                      </div>
                    </div>
                    <div className="product-wrap product text-center">
                      <figure className="product-media"  style={{height:350}}>
                        <a href="#">
                          <img
                            src={item.featured_image}
                            alt="Product"
                            width={216}
                            height={243}
                          />
                          
                        </a>
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
                          <a href="product-default.html">Best Travel Bag</a>
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
                          <ins className="new-price">{Intl.NumberFormat("en-US", {
                                                    style: "currency",
                                                    currency: "INR",
                                                }).format(item.sale_price)}</ins>
                          <del className="old-price">{Intl.NumberFormat("en-US", {
                                                    style: "currency",
                                                    currency: "INR",
                                                }).format(item.regular_price)}</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </>)
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
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 3"
              />
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

