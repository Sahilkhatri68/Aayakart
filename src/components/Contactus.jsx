import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import Footer from './Footer'
import Mainheader from './Mainheader'

export default function Contactus() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        scrollToTop();
    }, [])
    return (
        <>
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
                }}><div className="page-content contact-us">
                    <div className="container">
                        <section className="content-title-section mb-10">
                            <h3 className="title title-center mb-3">Contact Information</h3>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut
                            </p>
                        </section>
                        {/* End of Contact Title Section */}
                        <section className="contact-information-section mb-10">
                            <div
                                className="swiper-container swiper-theme swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 1,
                      'breakpoints': {
                          '480': {
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
                                    id="swiper-wrapper-dcbc102685fe04fc5"
                                    aria-live="polite"
                                >
                                    <div
                                        className="swiper-slide icon-box text-center icon-box-primary swiper-slide-active"
                                        role="group"
                                        aria-label="1 / 4"
                                        style={{ width: 295, marginRight: 20 }}
                                    >
                                        <span className="icon-box-icon icon-email">
                                            <i className="w-icon-envelop-closed" />
                                        </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title">E-mail Address</h4>
                                            <p>mail@example.com</p>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide icon-box text-center icon-box-primary swiper-slide-next"
                                        role="group"
                                        aria-label="2 / 4"
                                        style={{ width: 295, marginRight: 20 }}
                                    >
                                        <span className="icon-box-icon icon-headphone">
                                            <i className="w-icon-headphone" />
                                        </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title">Phone Number</h4>
                                            <p>(123) 456-7890 / (123) 456-9870</p>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide icon-box text-center icon-box-primary"
                                        role="group"
                                        aria-label="3 / 4"
                                        style={{ width: 295, marginRight: 20 }}
                                    >
                                        <span className="icon-box-icon icon-map-marker">
                                            <i className="w-icon-map-marker" />
                                        </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title">Address</h4>
                                            <p>Lawrence, NY 11345, USA</p>
                                        </div>
                                    </div>
                                    <div
                                        className="swiper-slide icon-box text-center icon-box-primary"
                                        role="group"
                                        aria-label="4 / 4"
                                        style={{ width: 295, marginRight: 20 }}
                                    >
                                        <span className="icon-box-icon icon-fax">
                                            <i className="w-icon-fax" />
                                        </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title">Fax</h4>
                                            <p>1-800-570-7777</p>
                                        </div>
                                    </div>
                                </div>
                                <span
                                    className="swiper-notification"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                />
                            </div>
                        </section>
                        {/* End of Contact Information section */}
                        <hr className="divider mb-10 pb-1" />
                        <section className="contact-section">
                            <div className="row gutter-lg pb-3">
                                <div className="col-lg-6 mb-8">
                                    <h4 className="title mb-3">People usually ask these</h4>
                                    <div className="accordion accordion-bg accordion-gutter-md accordion-border">
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#collapse1" className="collapse">
                                                    How can I cancel my order?
                                                </a>
                                            </div>
                                            <div id="collapse1" className="card-body expanded">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod temp orincid idunt ut labore et dolore magna
                                                    aliqua. Venenatis tellus in metus vulp utate eu sceler isque
                                                    felis. Vel pretium.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#collapse2" className="expand">
                                                    Why is my registration delayed?
                                                </a>
                                            </div>
                                            <div id="collapse2" className="card-body collapsed">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod temp orincid idunt ut labore et dolore magna
                                                    aliqua. Venenatis tellus in metus vulp utate eu sceler isque
                                                    felis. Vel pretium.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#collapse3" className="expand">
                                                    What do I need to buy products?
                                                </a>
                                            </div>
                                            <div id="collapse3" className="card-body collapsed">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod temp orincid idunt ut labore et dolore magna
                                                    aliqua. Venenatis tellus in metus vulp utate eu sceler isque
                                                    felis. Vel pretium.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#collapse4" className="expand">
                                                    How can I track an order?
                                                </a>
                                            </div>
                                            <div id="collapse4" className="card-body collapsed">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod temp orincid idunt ut labore et dolore magna
                                                    aliqua. Venenatis tellus in metus vulp utate eu sceler isque
                                                    felis. Vel pretium.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#collapse5" className="expand">
                                                    How can I get money back?
                                                </a>
                                            </div>
                                            <div id="collapse5" className="card-body collapsed">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod temp orincid idunt ut labore et dolore magna
                                                    aliqua. Venenatis tellus in metus vulp utate eu sceler isque
                                                    felis. Vel pretium.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-8">
                                    <h4 className="title mb-3">Send Us a Message</h4>
                                    <form className="form contact-us-form" action="#" method="post">
                                        <div className="form-group">
                                            <label htmlFor="username">Your Name</label>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email_1">Your Email</label>
                                            <input
                                                type="email"
                                                id="email_1"
                                                name="email_1"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Your Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                cols={30}
                                                rows={5}
                                                className="form-control"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-dark btn-rounded">
                                            Send Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </section>
                        {/* End of Contact Section */}
                    </div>

                </div>
            </motion.div>
            <div><Footer /></div>
        </>
    )
}

