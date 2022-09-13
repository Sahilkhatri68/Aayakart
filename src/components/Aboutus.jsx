import React from 'react'
import { motion } from "framer-motion"
import Mainheader from './Mainheader'
import Footer from './Footer'
import ab from "./../assets/images/pages/about_us/1.jpg"
import ab2 from "./../assets/images/pages/about_us/2.jpg"
import ab3 from "./../assets/images/pages/about_us/3.jpg"
import ab4 from "./../assets/images/pages/about_us/4.jpg"
import ab5 from "./../assets/images/pages/about_us/5.jpg"
import ab6 from "./../assets/images/pages/about_us/6.jpg"
import ab7 from "./../assets/images/pages/about_us/7.jpg"
import abs1 from "./../assets/images/pages/about_us/1.png"
import abs2 from "./../assets/images/pages/about_us/2.png"
import abs3 from "./../assets/images/pages/about_us/3.png"
import abs4 from "./../assets/images/pages/about_us/4.png"
function Aboutus() {
    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2, stiffness: 500 }}
            style={{
                width: "100%",
                height: "100%",
            }}>
            <div>
                <Mainheader />
            </div>
            <div>
                <main className="main">
                    {/* Start of Page Header */}
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title mb-0">About Us</h1>
                        </div>
                    </div>
                    {/* End of Page Header */}
                    {/* Start of Breadcrumb */}
                    <nav className="breadcrumb-nav mb-10 pb-8">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li>
                                    <a href="demo1.html">Home</a>
                                </li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </nav>
                    {/* End of Breadcrumb */}
                    {/* Start of Page Content */}
                    <div className="page-content">
                        <div className="container">
                            <section className="introduce mb-10 pb-10">
                                <h2 className="title title-center">
                                    We’re Devoted Marketing
                                    <br />
                                    Consultants Helping Your Business Grow
                                </h2>
                                <p className=" mx-auto text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor labore et dolore magna aliqua. Venenatis tellu metus
                                </p>
                                <figure className="br-lg">
                                    <img
                                        src={ab}
                                        alt="Banner"
                                        width={1240}
                                        height={540}
                                        style={{ backgroundColor: "#D0C1AE" }}
                                    />
                                </figure>
                            </section>
                            <section className="customer-service mb-7">
                                <div className="row align-items-center">
                                    <div className="col-md-6 pr-lg-8 mb-8">
                                        <h2 className="title text-left">
                                            We Provide Continuous &amp; Kind Service for Customers
                                        </h2>
                                        <div className="accordion accordion-simple accordion-plus">
                                            <div className="card border-no">
                                                <div className="card-header">
                                                    <a href="#collapse3-1" className="collapse">
                                                        Customer Service
                                                    </a>
                                                </div>
                                                <div className="card-body expanded" id="collapse3-1">
                                                    <p className="mb-0">
                                                        Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                                        sed do eius mod tempor incididunt ut labore et dolore magna
                                                        aliqua. Venenatis tell us in metus vulputate eu scelerisque
                                                        felis. Vel pretium vulp.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    <a href="#collapse3-2" className="expand">
                                                        Online Consultation
                                                    </a>
                                                </div>
                                                <div className="card-body collapsed" id="collapse3-2">
                                                    <p className="mb-0">
                                                        Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                                        sed do eius mod tempor incididunt ut labore et dolore magna
                                                        aliqua. Venenatis tell us in metus vulputate eu scelerisque
                                                        felis. Vel pretium vulp.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    <a href="#collapse3-3" className="expand">
                                                        Sales Management
                                                    </a>
                                                </div>
                                                <div className="card-body collapsed" id="collapse3-3">
                                                    <p className="mb-0">
                                                        Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                                        sed do eius mod tempor incididunt ut labore et dolore magna
                                                        aliqua. Venenatis tell us in metus vulputate eu scelerisque
                                                        felis. Vel pretium vulp.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-8">
                                        <figure className="br-lg">
                                            <img
                                                src={ab2}
                                                alt="Banner"
                                                width={610}
                                                height={500}
                                                style={{ backgroundColor: "#CECECC" }}
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </section>
                            <section className="count-section mb-10 pb-5">
                                <div
                                    className="swiper-container swiper-theme swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                    data-swiper-options="{
                      'slidesPerView': 1,
                      'breakpoints': {
                          '768': {
                              'slidesPerView': 2
                          },
                          '992': {
                              'slidesPerView': 3
                          }
                      }
                  }"
                                >
                                    <div
                                        className="swiper-wrapper "
                                        id="swiper-wrapper-d1296d75d874de7c"
                                        aria-live="polite"
                                    >
                                        <div
                                            className="swiper-slide counter-wrap swiper-slide-active"
                                            role="group"
                                            aria-label="1 / 3"
                                            style={{ width: 353 }}
                                        >
                                            <div className="counter text-center">
                                                <span className="count-to complete" data-to={15}>
                                                    15
                                                </span>
                                                <span>M+</span>
                                                <h4 className="title title-center">Products For Sale</h4>
                                                <p>
                                                    Diam maecenas ultricies mi eget mauris
                                                    <br />
                                                    Nibh tellus molestie nunc non
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide counter-wrap swiper-slide-next"
                                            role="group"
                                            aria-label="2 / 3"
                                            style={{ width: 353 }}
                                        >
                                            <div className="counter text-center">
                                                <span>$</span>
                                                <span className="count-to complete" data-to={25}>
                                                    25
                                                </span>
                                                <span>B+</span>
                                                <h4 className="title title-center">Community Earnings</h4>
                                                <p>
                                                    Diam maecenas ultricies mi eget mauris
                                                    <br />
                                                    Nibh tellus molestie nunc non
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide counter-wrap"
                                            role="group"
                                            aria-label="3 / 3"
                                            style={{ width: 353 }}
                                        >
                                            <div className="counter text-center">
                                                <span className="count-to complete" data-to={100}>
                                                    100
                                                </span>
                                                <span>M+</span>
                                                <h4 className="title title-center">Growing Buyers</h4>
                                                <p>
                                                    Diam maecenas ultricies mi eget mauris
                                                    <br />
                                                    Nibh tellus molestie nunc non
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
                                        style={{ display: "none" }}
                                    >
                                        <span
                                            className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Go to slide 1"
                                        />
                                    </div>
                                    <span
                                        className="swiper-notification"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    />
                                </div>
                            </section>
                        </div>
                        <section className="boost-section pt-10 pb-10">
                            <div className="container mt-10 mb-9">
                                <div className="row align-items-center mb-10">
                                    <div className="col-md-6 mb-8">
                                        <figure className="br-lg">
                                            <img
                                                src={ab3}
                                                alt="Banner"
                                                width={610}
                                                height={450}
                                                style={{ backgroundColor: "#9E9DA2" }}
                                            />
                                        </figure>
                                    </div>
                                    <div className="col-md-6 pl-lg-8 mb-8">
                                        <h4 className="title text-left">
                                            We Boost Our Clients’ Bottom Line by Optimizing Their Growth
                                            Potential
                                        </h4>
                                        <p className="mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Venenatis tellus in. metus vulputate eu scelerisque felis. Vel
                                            pretium lectus qua . Arpis massa. Nunc id cursus metus ididunt ut
                                            labore metus vulputate episcing.
                                        </p>
                                        <a href="#" className="btn btn-dark btn-rounded">
                                            Visit Our Store
                                        </a>
                                    </div>
                                </div>
                               
                            </div>
                        </section>
                        <section className="member-section mt-10 pt-9 mb-10 pb-4">
                            <div className="container">
                                <h4 className="title title-center mb-3">Meet Our Leaders</h4>
                                <p className="text-center mb-8">
                                    Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget.
                                    Aliquam
                                    <br />
                                    maecenas ultricies mi eget mauris. Volutpat ac
                                </p>
                                <div
                                    className="swiper-container swiper-theme swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                    data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 1,
                      'breakpoints': {
                          '576': {
                              'slidesPerView': 2
                          },
                          '768': {
                              'slidesPerView': 3
                          },
                          '992': {
                              'slidesPerView': 4
                          }
                      }
                  }"
                                >
                                    <div
                                        className="swiper-wrapper "
                                        id="swiper-wrapper-95e80ff73d295c06"
                                        aria-live="polite"
                                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                                    >
                                        <div
                                            className="swiper-slide member-wrap swiper-slide-active"
                                            role="group"
                                            aria-label="1 / 4"
                                            style={{ width: "249.75px", marginRight: 20 }}
                                        >
                                            <figure className="br-lg">
                                                <img
                                                    src={ab4}
                                                    alt="Member"
                                                    width={295}
                                                    height={332}
                                                />
                                                <div className="overlay">
                                                    <div className="social-icons">
                                                        <a
                                                            href="#"
                                                            className="social-icon social-facebook w-icon-facebook"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="social-icon social-twitter w-icon-twitter"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="social-icon social-instagram w-icon-instagram"
                                                        />
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="member-info text-center">
                                                <h4 className="member-name">John Doe</h4>
                                                <p className="text-uppercase">Founder &amp; CEO</p>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide member-wrap swiper-slide-next"
                                            role="group"
                                            aria-label="2 / 4"
                                            style={{ width: "249.75px", marginRight: 20 }}
                                        >
                                            <figure className="br-lg">
                                                <img
                                                    src={ab5}
                                                    alt="Member"
                                                    width={295}
                                                    height={332}
                                                />
                                                <div className="overlay">
                                                    <div className="social-icons">
                                                        <a
                                                            href="#"
                                                            className="social-icon social-facebook w-icon-facebook"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="social-icon social-twitter w-icon-twitter"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="social-icon social-instagram w-icon-instagram"
                                                        />
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="member-info text-center">
                                                <h4 className="member-name">Jessica Doe</h4>
                                                <p className="text-uppercase">Marketing</p>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide member-wrap"
                                            role="group"
                                            aria-label="3 / 4"
                                            style={{ width: "249.75px", marginRight: 20 }}
                                        >
                                            <figure className="br-lg">
                                                <img
                                                    src={ab6}
                                                    alt="Member"
                                                    width={295}
                                                    height={332}
                                                />
                                                <div className="overlay">
                                                    <div className="social-icons">
                                                        <a
                                                            href="#"
                                                            className="social-icon social-facebook w-icon-facebook"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="social-icon social-twitter w-icon-twitter"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="social-icon social-instagram w-icon-instagram"
                                                        />
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="member-info text-center">
                                                <h4 className="member-name">Rick Edward Doe</h4>
                                                <p className="text-uppercase">Developer</p>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide member-wrap"
                                            role="group"
                                            aria-label="4 / 4"
                                            style={{ width: "249.75px", marginRight: 20 }}
                                        >
                                            <figure className="br-lg">
                                                <img
                                                    src={ab7}
                                                    alt="Member"
                                                    width={295}
                                                    height={332}
                                                />
                                                <div className="overlay">
                                                    <div className="social-icons">
                                                        <a
                                                            href="#"
                                                            className="social-icon social-facebook w-icon-facebook"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="social-icon social-twitter w-icon-twitter"
                                                        />
                                                        <a
                                                            href="#"
                                                            className="social-icon social-instagram w-icon-instagram"
                                                        />
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="member-info text-center">
                                                <h4 className="member-name">Melinda Wolosky</h4>
                                                <p className="text-uppercase">Design</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
                                        style={{ display: "none" }}
                                    >
                                        <span
                                            className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Go to slide 1"
                                        />
                                    </div>
                                    <span
                                        className="swiper-notification"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

            </div>
            <Footer />
        </motion.div>
    )
}

export default Aboutus