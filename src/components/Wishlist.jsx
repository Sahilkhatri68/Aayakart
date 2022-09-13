import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import Footer from './Footer'
import axios from "axios";

import Mainheader from './Mainheader'
import whs from "./../assets/images/shop/7-1.jpg"
import whs2 from "./../assets/images/shop/19-1.jpg"
import whs3 from "./../assets/images/shop/20.jpg"
import Emptycart from './Emptycart';
export default function Wishlist() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        scrollToTop();
    }, [])



    // getting data
    const [product, setProduct] = useState([]);
    async function GetData(slug) {
        const res = await axios.get(`https://ayakart.dauqu.com/api/cart`);
        setProduct(res.data);
        // GetData();

        console.log(res.data);
    }
    useEffect(() => {
        GetData();
    }, []);

    return (
        <>
            {product.length === 0 ? (<><Emptycart /></>) : (<>
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
                    }}>
                    <main className="main wishlist-page">
                        {/* Start of Page Header */}
                        <div className="page-header">
                            <div className="container">
                                <h1 className="page-title mb-0">Wishlist</h1>
                            </div>
                        </div>
                        {/* End of Page Header */}
                        {/* Start of Breadcrumb */}
                        <nav className="breadcrumb-nav mb-10">
                            <div className="container">
                                <ul className="breadcrumb">
                                    <li>
                                        <a href="demo1.html">Home</a>
                                    </li>
                                    <li>Wishlist</li>
                                </ul>
                            </div>
                        </nav>
                        {/* End of Breadcrumb */}
                        {/* Start of PageContent */}
                        <div className="page-content">
                            <div className="container">
                                <h3 className="wishlist-title">My wishlist</h3>
                                <table className="shop-table wishlist-table">
                                    <thead>
                                        <tr>
                                            <th className="product-name">
                                                <span>Product</span>
                                            </th>
                                            <th />
                                            <th className="product-price">
                                                <span>Price</span>
                                            </th>
                                            <th className="product-stock-status">
                                                <span>Stock Status</span>
                                            </th>
                                            <th className="wishlist-action">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <div className="p-relative">
                                                    <a href="product-default.html">
                                                        <figure>
                                                            <img
                                                                src={whs}
                                                                alt="product"
                                                                width={300}
                                                                height={338}
                                                            />
                                                        </figure>
                                                    </a>
                                                    <button type="submit" className="btn btn-close">
                                                        <i className="fas fa-times" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="product-name">
                                                <a href="product-default.html">Blue Sky Trunk</a>
                                            </td>
                                            <td className="product-price">
                                                <ins className="new-price">$85.00</ins>
                                            </td>
                                            <td className="product-stock-status">
                                                <span className="wishlist-in-stock">In Stock</span>
                                            </td>
                                            <td className="wishlist-action">
                                                <div className="d-lg-flex">
                                                    <a
                                                        href="#"
                                                        className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
                                                    >
                                                        Quick View
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart"
                                                    >
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <div className="p-relative">
                                                    <a href="product-default.html">
                                                        <figure>
                                                            <img
                                                                src={whs2}
                                                                alt="product"
                                                                width={300}
                                                                height={338}
                                                            />
                                                        </figure>
                                                    </a>
                                                    <button type="submit" className="btn btn-close">
                                                        <i className="fas fa-times" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="product-name">
                                                <a href="product-default.html">Handmade Ring</a>
                                            </td>
                                            <td className="product-price">
                                                <ins className="new-price">$5.00</ins>
                                            </td>
                                            <td className="product-stock-status">
                                                <span className="wishlist-in-stock">In Stock</span>
                                            </td>
                                            <td className="wishlist-action">
                                                <div className="d-lg-flex">
                                                    <a
                                                        href="#"
                                                        className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
                                                    >
                                                        Quick View
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart"
                                                    >
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <div className="p-relative">
                                                    <a href="product-default.html">
                                                        <figure>
                                                            <img
                                                                src={whs3}
                                                                alt="product"
                                                                width={300}
                                                                height={338}
                                                            />
                                                        </figure>
                                                    </a>
                                                    <button type="submit" className="btn btn-close">
                                                        <i className="fas fa-times" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="product-name">
                                                <a href="product-default.html">Pencil Case</a>
                                            </td>
                                            <td className="product-price">
                                                <ins className="new-price">$54.00</ins>
                                            </td>
                                            <td className="product-stock-status">
                                                <span className="wishlist-in-stock">In Stock</span>
                                            </td>
                                            <td className="wishlist-action">
                                                <div className="d-lg-flex">
                                                    <a
                                                        href="#"
                                                        className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
                                                    >
                                                        Quick View
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart"
                                                    >
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="social-links">
                                    <label>Share On:</label>
                                    <div className="social-icons social-no-color border-thin">
                                        <a href="#" className="social-icon social-facebook w-icon-facebook" />
                                        <a href="#" className="social-icon social-twitter w-icon-twitter" />
                                        <a
                                            href="#"
                                            className="social-icon social-pinterest w-icon-pinterest"
                                        />
                                        <a href="#" className="social-icon social-email far fa-envelope" />
                                        <a href="#" className="social-icon social-whatsapp fab fa-whatsapp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of PageContent */}
                    </main>

                </motion.div>
                <div>
                    <Footer />
                </div></>)}

        </>
    )
}

