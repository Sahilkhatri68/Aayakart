import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import axios from "axios";
import wat from "./../assets/images/shop/banner1.jpg"

import Footer from './Footer'
import Mainheader from './Mainheader'

function Allproduct() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        scrollToTop();
    }, [])


    // -----------------------
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
        <div>
            <div >
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
                }}  >
                <main className="main">
                    <nav className="breadcrumb-nav">
                        <div className="container">
                            <ul className="breadcrumb bb-no">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>Boxed</li>
                            </ul>
                        </div>
                    </nav>
                    {/* End of Breadcrumb-nav */}
                    <div className="page-content mb-10">
                        <div className="container">
                            {/* Start of Shop Content */}
                            <div className="shop-content row gutter-lg">
                                {/* Start of Sidebar, Shop Sidebar */}
                                <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
                                    {/* Start of Sidebar Overlay */}
                                    <div className="sidebar-overlay" />
                                    <a className="sidebar-close" href="#">
                                        <i className="close-icon" />
                                    </a>
                                    {/* Start of Sidebar Content */}
                                    <div className="sidebar-content scrollable">
                                        {/* Start of Sticky Sidebar */}
                                        <div className="pin-wrapper" style={{ height: "1808.3px" }}>
                                            <div
                                                className="sticky-sidebar"
                                                style={{
                                                    borderBottom: "0px none rgb(102, 102, 102)",
                                                    width: 280
                                                }}
                                            >
                                                <div className="filter-actions">
                                                    <label>Filter :</label>
                                                    <a href="#" className="btn btn-dark btn-link filter-clean">
                                                        Clean All
                                                    </a>
                                                </div>
                                                {/* Start of Collapsible widget */}
                                                <div className="widget widget-collapsible">
                                                    <h3 className="widget-title">
                                                        <span>All Categories</span>
                                                        <span className="toggle-btn" />
                                                    </h3>
                                                    <ul className="widget-body filter-items search-ul">
                                                        <li>
                                                            <a href="#">Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Babies</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Beauty</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Decoration</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Electronics</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Fashion</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Food</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Furniture</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Kitchen</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Medical</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Sports</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Watches</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* End of Collapsible Widget */}
                                                {/* Start of Collapsible Widget */}
                                                <div className="widget widget-collapsible">
                                                    <h3 className="widget-title">
                                                        <span>Price</span>
                                                        <span className="toggle-btn" />
                                                    </h3>
                                                    <div className="widget-body">
                                                        <ul className="filter-items search-ul">
                                                            <li>
                                                                <a href="#">$0.00 - $100.00</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">$100.00 - $200.00</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">$200.00 - $300.00</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">$300.00 - $500.00</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">$500.00+</a>
                                                            </li>
                                                        </ul>
                                                        <form className="price-range">
                                                            <input
                                                                type="number"
                                                                name="min_price"
                                                                className="min_price text-center"
                                                                placeholder="$min"
                                                            />
                                                            <span className="delimiter">-</span>
                                                            <input
                                                                type="number"
                                                                name="max_price"
                                                                className="max_price text-center"
                                                                placeholder="$max"
                                                            />
                                                            <a href="#" className="btn btn-primary btn-rounded">
                                                                Go
                                                            </a>
                                                        </form>
                                                    </div>
                                                </div>
                                                {/* End of Collapsible Widget */}
                                                {/* Start of Collapsible Widget */}
                                                <div className="widget widget-collapsible">
                                                    <h3 className="widget-title">
                                                        <span>Size</span>
                                                        <span className="toggle-btn" />
                                                    </h3>
                                                    <ul className="widget-body filter-items item-check mt-1">
                                                        <li>
                                                            <a href="#">Extra Large</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Large</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Medium</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Small</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* End of Collapsible Widget */}
                                                {/* Start of Collapsible Widget */}
                                                <div className="widget widget-collapsible">
                                                    <h3 className="widget-title">
                                                        <span>Brand</span>
                                                        <span className="toggle-btn" />
                                                    </h3>
                                                    <ul className="widget-body filter-items item-check mt-1">
                                                        <li>
                                                            <a href="#">Elegant Auto Group</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Green Grass</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Node Js</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">NS8</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Red</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Skysuite Tech</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Sterling</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* End of Collapsible Widget */}
                                                {/* Start of Collapsible Widget */}
                                                <div className="widget widget-collapsible">
                                                    <h3 className="widget-title">
                                                        <span>Color</span>
                                                        <span className="toggle-btn" />
                                                    </h3>
                                                    <ul className="widget-body filter-items item-check">
                                                        <li>
                                                            <a href="#">Black</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Blue</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Brown</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Green</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Grey</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Orange</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Yellow</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* End of Collapsible Widget */}
                                            </div>
                                        </div>
                                        {/* End of Sidebar Content */}
                                    </div>
                                    {/* End of Sidebar Content */}
                                </aside>
                                {/* End of Shop Sidebar */}
                                {/* Start of Main Content */}
                                <div className="main-content">
                                    {/* Start of Shop Banner */}
                                    <div
                                        className="shop-default-banner shop-boxed-banner banner d-flex align-items-center mb-6 br-xs"
                                        style={{
                                            backgroundImage: `url(${wat})`,
                                            backgroundColor: "#FFC74E"
                                        }}
                                    >
                                        <div className="banner-content">
                                            <h4 className="banner-subtitle font-weight-bold">
                                                Accessories Collection
                                            </h4>
                                            <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-10">
                                                Smart Watches
                                            </h3>
                                            <a
                                                href="#"
                                                className="btn btn-dark btn-rounded btn-icon-right"
                                            >
                                                Discover Now
                                                <i className="w-icon-long-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End of Shop Banner */}
                                    <nav className="toolbox sticky-toolbox sticky-content fix-top">
                                        <div className="toolbox-left">
                                            <a
                                                href="#"
                                                className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                  btn-icon-left d-block d-lg-none"
                                            >
                                                <i className="w-icon-category" />
                                                <span>Filters</span>
                                            </a>
                                            <div className="toolbox-item toolbox-sort select-box text-dark">
                                                <label>Sort By :</label>
                                                <select name="orderby" className="form-control">
                                                    <option value="default" selected="selected">
                                                        Default sorting
                                                    </option>
                                                    <option value="popularity">Sort by popularity</option>
                                                    <option value="rating">Sort by average rating</option>
                                                    <option value="date">Sort by latest</option>
                                                    <option value="price-low">Sort by pric: low to high</option>
                                                    <option value="price-high">Sort by price: high to low</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="toolbox-right">
                                            <div className="toolbox-item toolbox-show select-box">
                                                <select name="count" className="form-control">
                                                    <option value={9}>Show 9</option>
                                                    <option value={12} selected="selected">
                                                        Show 12
                                                    </option>
                                                    <option value={24}>Show 24</option>
                                                    <option value={36}>Show 36</option>
                                                </select>
                                            </div>
                                            <div className="toolbox-item toolbox-layout">
                                                <a
                                                    href="#"
                                                    className="icon-mode-grid btn-layout active"
                                                >
                                                    <i className="w-icon-grid" />
                                                </a>
                                                <a href="#" className="icon-mode-list btn-layout">
                                                    <i className="w-icon-list" />
                                                </a>
                                            </div>
                                        </div>
                                    </nav>
                                    <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                                        {product.map((item) => {
                                            return (
                                                <>
                                                    <div className="product-wrap">
                                                        <Link to={`/product/${item.slug}`}>
                                                            <div className="product text-center">
                                                                <figure className="product-media" style={{ height: 300 }}>

                                                                    <img
                                                                        src={item.featured_image}
                                                                        alt="Product"
                                                                        width={300}
                                                                        height={338}
                                                                    />

                                                                    <div className="product-action-horizontal">
                                                                        <a
                                                                            href="#"
                                                                            className="btn-product-icon btn-cart w-icon-cart"
                                                                            title="Add to cart"
                                                                        />
                                                                        <a
                                                                            href="#"
                                                                            className="btn-product-icon btn-wishlist w-icon-heart"
                                                                            title="Wishlist"
                                                                        />
                                                                        <a
                                                                            href="#"
                                                                            className="btn-product-icon btn-compare w-icon-compare"
                                                                            title="Compare"
                                                                        />
                                                                        <a
                                                                            href="#"
                                                                            className="btn-product-icon btn-quickview w-icon-search"
                                                                            title="Quick View"
                                                                        />
                                                                    </div>
                                                                </figure>
                                                                <div className="product-details">
                                                                    <div className="product-cat">
                                                                        <a href="#">{item.category}</a>
                                                                    </div>
                                                                    <h3 className="product-name">
                                                                        <a href="#">{item.description}</a>
                                                                    </h3>
                                                                    <div className="ratings-container">
                                                                        <div className="ratings-full">
                                                                            <span className="ratings" style={{ width: "100%" }} />
                                                                            <span className="tooltiptext tooltip-top" />
                                                                        </div>
                                                                        <a
                                                                            href="#"
                                                                            className="rating-reviews"
                                                                        >
                                                                            (3 reviews)
                                                                        </a>
                                                                    </div>
                                                                    <div className="product-pa-wrapper">
                                                                        <div className="product-price">{item.sale_price}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </>
                                            )
                                        })}


                                    </div>
                                    <div className="toolbox toolbox-pagination justify-content-between">
                                        <p className="showing-info mb-2 mb-sm-0">

                                            Showing<span>1-{product.length} of {product.length}</span>Products
                                        </p>
                                        <ul className="pagination">
                                            <li className="prev disabled">
                                                <a
                                                    href="#"
                                                    aria-label="Previous"
                                                    tabIndex={-1}
                                                    aria-disabled="true"
                                                >
                                                    <i className="w-icon-long-arrow-left" />
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="next">
                                                <a href="#" aria-label="Next">
                                                    Next
                                                    <i className="w-icon-long-arrow-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* End of Main Content */}
                            </div>
                            {/* End of Shop Content */}
                        </div>
                    </div>
                </main>


            </motion.div>
            <div  >
                <Footer />
            </div>
        </div>
    )
}

export default Allproduct