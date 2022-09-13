import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import Footer from './Footer'
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import axios from "axios";
import Mainheader from './Mainheader'
import sp from "./../assets/images/shop/12.jpg"
import sp1 from "./../assets/images/shop/13.jpg"
import Emptycart from './Emptycart';
export default function Cart() {
    function Subscription() {

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };
        useEffect(() => {
            scrollToTop();
        }, [])
    }

    // ----------------

    //   const cartDetails = useSelector((state) => state.cart);
    //   const { cartItems } = cartDetails;
    const { slug } = useParams();

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


    //   check user--------------------
    // async function GetUsers() {
    //     try {
    //         const response = await axios.get("https://ayakart.dauqu.com/api/profile", {
    //             withCredentials: true,
    //         });
    //         setUser(response.data);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // React.useEffect(() => {
    //     GetUsers();
    // }, []);

    // const [user, setUser] = useState([]);
    // console.log(user)
    // // checking user
    // async function CheckUser() {
    //     try {
    //         const resp = await axios.post(
    //             `https://ayakart.dauqu.com/api/login/checklogin`,
    //             {
    //                 withCredentials: true,
    //             }
    //         );
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // React.useEffect(() => {
    //     CheckUser();
    // }, []);

    // remove from cart
    const { id } = useParams();
    async function RemoveItem(id) {
        const res = await axios
            .delete(`https://ayakart.dauqu.com/api/cart/${id}`)
            .then((res) => {
                console.log(res.data);
                alert("Item removed from cart")
                GetData();
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        RemoveItem(id);
    }, []);
    return (

        <>
            {product.length == 0 ? (<><Emptycart /></>) : (<> <div>
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
                    <main className="main cart">
                        {/* Start of Breadcrumb */}
                        <nav className="breadcrumb-nav">
                            <div className="container">
                                <ul className="breadcrumb shop-breadcrumb bb-no">
                                    <li className="active">
                                        <a href="cart.html">Shopping Cart</a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="order.html">Order Complete</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* End of Breadcrumb */}
                        {/* Start of PageContent */}
                        <div className="page-content">
                            <div className="container">
                                <div className="row gutter-lg mb-10">
                                    <div className="col-lg-8 pr-lg-4 mb-6">
                                        <table className="shop-table cart-table">
                                            <thead>
                                                <tr>
                                                    <th className="product-name">
                                                        <span>Product</span>
                                                    </th>
                                                    <th />
                                                    <th className="product-price">
                                                        <span>Price</span>
                                                    </th>
                                                    <th className="product-quantity">
                                                        <span>Quantity</span>
                                                    </th>
                                                    <th className="product-subtotal">
                                                        <span>Subtotal</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {product.map((item) => {
                                                    return (
                                                        <><tr>
                                                            <td className="product-thumbnail">
                                                                <div className="p-relative">
                                                                    <a href="product-default.html">
                                                                        <figure>
                                                                            <img
                                                                                src={item.product_image}
                                                                                alt="product"
                                                                                width={300}
                                                                                height={338}
                                                                            />
                                                                        </figure>
                                                                    </a>
                                                                    <button type="submit" className="btn btn-close" onClick={() => RemoveItem(`${item.id}`)}>
                                                                        <i className="fas fa-times" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className="product-name">
                                                                <a href="product-default.html">{item.product_name}</a>
                                                            </td>
                                                            <td className="product-price">
                                                                <span className="amount"> {Intl.NumberFormat("en-US", {
                                                                    style: "currency",
                                                                    currency: "INR",
                                                                }).format(item.price)}</span>
                                                            </td>
                                                            <td className="product-quantity">
                                                                <div className="input-group">
                                                                    <input
                                                                        className="quantity form-control"
                                                                        type="number"
                                                                        min={1}
                                                                        max={100000}
                                                                    />
                                                                    <button className="quantity-plus w-icon-plus" />
                                                                    <button className="quantity-minus w-icon-minus" />
                                                                </div>
                                                            </td>
                                                            <td className="product-subtotal">
                                                                <span className="amount">{Intl.NumberFormat("en-US", {
                                                                    style: "currency",
                                                                    currency: "INR",
                                                                }).format(item.price)}</span>
                                                            </td>
                                                        </tr></>
                                                    )
                                                })}


                                            </tbody>
                                        </table>
                                        <div className="cart-action mb-6">
                                            <Link to="/"
                                                href="#"
                                                className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"
                                            >
                                                <i className="w-icon-long-arrow-left" />
                                                Continue Shopping
                                            </Link>
                                         
                                            <button
                                                type="submit"
                                                className="btn btn-rounded btn-update disabled"
                                                name="update_cart"
                                                value="Update Cart"
                                            >
                                                Order
                                            </button>
                                        </div>
                                        <form className="coupon">
                                            <h5 className="title coupon-title font-weight-bold text-uppercase">
                                                Coupon Discount
                                            </h5>
                                            <input
                                                type="text"
                                                className="form-control mb-4"
                                                placeholder="Enter coupon code here..."
                                                required=""
                                            />
                                            <button className="btn btn-dark btn-outline btn-rounded">
                                                Apply Coupon
                                            </button>
                                        </form>
                                    </div>
                                    <div className="col-lg-4 sticky-sidebar-wrapper">
                                        <div className="pin-wrapper" style={{ height: "791.359px" }}>
                                            <div
                                                className="sticky-sidebar"
                                                style={{
                                                    borderBottom: "0px none rgb(102, 102, 102)",
                                                    width: "auto"
                                                }}
                                            >
                                                <div className="cart-summary mb-4">
                                                    <h3 className="cart-title text-uppercase">Cart Totals</h3>
                                                    <div className="cart-subtotal d-flex align-items-center justify-content-between">
                                                        <label className="ls-25">Subtotal</label>
                                                        <span>$100.00</span>
                                                    </div>
                                                    <hr className="divider" />
                                                    <ul className="shipping-methods mb-2">
                                                        <li>
                                                            <label className="shipping-title text-dark font-weight-bold">
                                                                Shipping
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    id="free-shipping"
                                                                    className="custom-control-input"
                                                                    name="shipping"
                                                                />
                                                                <label
                                                                    htmlFor="free-shipping"
                                                                    className="custom-control-label color-dark"
                                                                >
                                                                    Free Shipping
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    id="local-pickup"
                                                                    className="custom-control-input"
                                                                    name="shipping"
                                                                />
                                                                <label
                                                                    htmlFor="local-pickup"
                                                                    className="custom-control-label color-dark"
                                                                >
                                                                    Local Pickup
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    id="flat-rate"
                                                                    className="custom-control-input"
                                                                    name="shipping"
                                                                />
                                                                <label
                                                                    htmlFor="flat-rate"
                                                                    className="custom-control-label color-dark"
                                                                >
                                                                    Flat rate: $5.00
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="shipping-calculator">
                                                        <p className="shipping-destination lh-1">
                                                            Shipping to <strong>CA</strong>.
                                                        </p>
                                                        <form className="shipping-calculator-form">
                                                            <div className="form-group">
                                                                <div className="select-box">
                                                                    <select
                                                                        name="country"
                                                                        className="form-control form-control-md"
                                                                    >
                                                                        <option value="default" selected="selected">
                                                                            United States (US)
                                                                        </option>
                                                                        <option value="us">United States</option>
                                                                        <option value="uk">United Kingdom</option>
                                                                        <option value="fr">France</option>
                                                                        <option value="aus">Australia</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="select-box">
                                                                    <select
                                                                        name="state"
                                                                        className="form-control form-control-md"
                                                                    >
                                                                        <option value="default" selected="selected">
                                                                            California
                                                                        </option>
                                                                        <option value="ohaio">Ohaio</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <input
                                                                    className="form-control form-control-md"
                                                                    type="text"
                                                                    name="town-city"
                                                                    placeholder="Town / City"
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <input
                                                                    className="form-control form-control-md"
                                                                    type="text"
                                                                    name="zipcode"
                                                                    placeholder="ZIP"
                                                                />
                                                            </div>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-dark btn-outline btn-rounded"
                                                            >
                                                                Update Totals
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <hr className="divider mb-6" />
                                                    <div className="order-total d-flex justify-content-between align-items-center">
                                                        <label>Total</label>
                                                        <span className="ls-50">$100.00</span>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout"
                                                    >
                                                        Proceed to checkout
                                                        <i className="w-icon-long-arrow-right" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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

