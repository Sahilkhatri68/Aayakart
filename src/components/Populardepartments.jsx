import React from 'react'
import "./../assets/css/demo1.min.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./../assets/css/style.min.css";

import pic from "./../assets/images/demos/demo1/products/3-1-1.jpg"
import pic2 from "./../assets/images/demos/demo1/products/3-2.jpg"
import pic3 from "./../assets/images/demos/demo1/products/3-3.jpg"
import pic4 from "./../assets/images/demos/demo1/products/3-4-1.jpg"
import pic5 from "./../assets/images/demos/demo1/products/3-5.jpg"
import pic6 from "./../assets/images/demos/demo1/products/3-6-1.jpg"
import pic7 from "./../assets/images/demos/demo1/products/3-7.jpg"
import pic8 from "./../assets/images/demos/demo1/products/3-8-1.jpg"
import pic9 from "./../assets/images/demos/demo1/products/3-9.jpg"
import pic10 from "./../assets/images/demos/demo1/products/3-10.jpg"
export default function Populardepartments() {
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
    <>
      <h2
        className="title justify-content-center ls-normal mb-4 mt-10 pt-1 appear-animate fadeIn appear-animation-visible"
        style={{ animationDuration: "1.2s" }}
      >
        Popular Departments
      </h2>
      <div
        className="tab tab-nav-boxed tab-nav-outline appear-animate fadeIn appear-animation-visible"
        style={{ animationDuration: "1.2s" }}
      >
        <ul className="nav nav-tabs justify-content-center" role="tablist">
          <li className="nav-item mr-2 mb-2">
            <a
              className="nav-link active br-sm font-size-md ls-normal"
              href="#tab1-1"
            >
              New arrivals
            </a>
          </li>
          <li className="nav-item mr-2 mb-2">
            <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-2">
              Best seller
            </a>
          </li>
          <li className="nav-item mr-2 mb-2">
            <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-3">
              most popular
            </a>
          </li>
          <li className="nav-item mr-0 mb-2">
            <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-4">
              Featured
            </a>
          </li>
        </ul>
      </div>
      <div
        className="tab-content product-wrapper appear-animate fadeIn appear-animation-visible"
        style={{ animationDuration: "1.2s" }}
      >
        <div className="tab-pane active pt-4" id="tab1-1">

          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">

            {product.map((item) => {
              return (
                <> <div className="product-wrap">
                  <Link to={`/product/${item.slug}`}>
                    <div className="product text-center">
                      <figure className="product-media"  >

                        <img
                          src={item.featured_image}
                          alt="Product"
                          style={{ width: "full", margin: "auto" }}
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


                        </div>
                      </figure>
                      <div className="product-details">
                        <h3 className="product-name">
                          <a href="product-default.html">{item.slug}</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: "60%" }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a href="product-default.html" className="rating-reviews">
                            (1 Reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price"> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(item.sale_price)}</ins>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div></>
              )
            })}


          </div>
        </div>
        {/* End of Tab Pane */}
        {/* <div className="tab-pane pt-4" id="tab1-2">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic4}
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src="assets/images/demos/demo1/products/3-4-2.jpg"
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Fashion Blue Towel</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (8 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.55 - $29.99</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic3}
                      alt="Product"
                      width={300}
                      height={338}
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
                  <div className="product-label-group">
                    <label className="product-label label-discount">7% Off</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Multi Funtional Apple iPhone</a>
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
                    <ins className="new-price">136.26</ins>
                    <del className="old-price">$145.90</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic8}
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src={pic8}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Comfortable Backpack</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (6 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$45.90</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic9}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Data Transformer Tool</a>
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
                    <span className="price">$64.47</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic5}
                      alt="Product"
                      width={300}
                      height={338}
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
                  <div className="product-label-group">
                    <label className="product-label label-discount">4% Off</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Apple Super Notecom</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (4 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$243.30</ins>
                    <del className="old-price">$253.50</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic6}
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src="assets/images/demos/demo1/products/3-6-2.jpg"
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Women???s Comforter</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (10 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$32.00 - $33.26</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic7}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Multi-colorful Music</a>
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
                    <ins className="new-price">$260.59 - $297.83</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/demos/demo1/products/3-1-1.jpg"
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src="assets/images/demos/demo1/products/3-1-2.jpg"
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Classic Hat</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (1 Reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$53.00</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic2}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Women???s White Handbag</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.62</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic10}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Women???s hairdye</a>
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
                    <span className="price">$173.84</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End of Tab Pane */}
        {/* <div className="tab-pane pt-4" id="tab1-3">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic9}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Data Transformer Tool</a>
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
                    <span className="price">$64.47</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/demos/demo1/products/3-1-1.jpg"
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src="assets/images/demos/demo1/products/3-1-2.jpg"
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Classic Hat</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (1 Reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$53.00</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic3}
                      alt="Product"
                      width={300}
                      height={338}
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
                  <div className="product-label-group">
                    <label className="product-label label-discount">7% Off</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Multi Funtional Apple iPhone</a>
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
                    <ins className="new-price">136.26</ins>
                    <del className="old-price">$145.90</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic2}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Women???s White Handbag</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.62</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic10}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Women???s hairdye</a>
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
                    <span className="price">$173.84</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic8}
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src={pic8}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Comfortable Backpack</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (6 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$45.90</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic5}
                      alt="Product"
                      width={300}
                      height={338}
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
                  <div className="product-label-group">
                    <label className="product-label label-discount">4% Off</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Apple Super Notecom</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (4 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$243.30</ins>
                    <del className="old-price">$253.50</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic7}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Multi-colorful Music</a>
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
                    <ins className="new-price">$260.59 - $297.83</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic6}
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src="assets/images/demos/demo1/products/3-6-2.jpg"
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Women???s Comforter</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (10 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$32.00 - $33.26</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic4}
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src="assets/images/demos/demo1/products/3-4-2.jpg"
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Fashion Blue Towel</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (8 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.55 - $29.99</ins>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End of Tab Pane */}
        {/* <div className="tab-pane pt-4" id="tab1-4">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic4}
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src="assets/images/demos/demo1/products/3-4-2.jpg"
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Fashion Blue Towel</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (8 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.55 - $29.99</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic10}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Women???s hairdye</a>
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
                    <span className="price">$173.84</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic9}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Data Transformer Tool</a>
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
                    <span className="price">$64.47</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic8}
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src={pic8}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Comfortable Backpack</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (6 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$45.90</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic2}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Women???s White Handbag</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.62</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic5}
                      alt="Product"
                      width={300}
                      height={338}
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
                  <div className="product-label-group">
                    <label className="product-label label-discount">4% Off</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Apple Super Notecom</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (4 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$243.30</ins>
                    <del className="old-price">$253.50</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic3}
                      alt="Product"
                      width={300}
                      height={338}
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
                  <div className="product-label-group">
                    <label className="product-label label-discount">7% Off</label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Multi Funtional Apple iPhone</a>
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
                    <ins className="new-price">136.26</ins>
                    <del className="old-price">$145.90</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic7}
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Multi-colorful Music</a>
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
                    <ins className="new-price">$260.59 - $297.83</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={pic6}
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src="assets/images/demos/demo1/products/3-6-2.jpg"
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Women???s Comforter</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (10 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$32.00 - $33.26</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/demos/demo1/products/3-1-1.jpg"
                      alt="Product"
                      width={300}
                      height={338}
                    />
                    <img
                      src="assets/images/demos/demo1/products/3-1-2.jpg"
                      alt="Product"
                      width={300}
                      height={338}
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
                    <a href="product-default.html">Classic Hat</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (1 Reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$53.00</ins>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End of Tab Pane */}
      </div>


    </>
  )
}

