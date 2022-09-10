import React from 'react'
import "./../assets/css/demo1.min.css"
import "./../assets/css/style.min.css"
import pi from "./../assets/images/demos/demo1/blogs/1.jpg"
import pi2 from "./../assets/images/demos/demo1/blogs/2.jpg"
import pi3 from "./../assets/images/demos/demo1/blogs/3.jpg"
import pi4 from "./../assets/images/demos/demo1/blogs/4.jpg"
export default function OurBlog() {
    return (
        <div
            className="post-wrapper appear-animate mb-4 fadeIn appear-animation-visible"
            style={{ animationDuration: "1.2s" }}
        >
            <div className="title-link-wrapper pb-1 mb-4">
                <h2 className="title ls-normal mb-0">From Our Blog</h2>
                <a href="blog-listing.html" className="font-weight-bold font-size-normal">
                    View All Articles
                </a>
            </div>
            <div className="swiper">
                <div
                    className="swiper-container swiper-theme swiper-container-initialized swiper-container-horizontal swiper-container-ios"
                    data-swiper-options="{
                      'slidesPerView': 1,
                      'spaceBetween': 20,
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
                        id="swiper-wrapper-bde2de3109871072ec"
                        aria-live="polite"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                        <div
                            className="swiper-slide post text-center overlay-zoom swiper-slide-active"
                            role="group"
                            aria-label="1 / 4"
                            style={{ width: 295, marginRight: 20 }}
                        >
                            <figure className="post-media br-sm">
                                <a href="post-single.html">
                                    <img
                                        src={pi}
                                        alt="Post"
                                        width={280}
                                        height={180}
                                        style={{ backgroundColor: "#4b6e91" }}
                                    />
                                </a>
                            </figure>
                            <div className="post-details">
                                <div className="post-meta">
                                    by{" "}
                                    <a href="#" className="post-author">
                                        John Doe
                                    </a>
                                    -{" "}
                                    <a href="#" className="post-date mr-0">
                                        03.05.2021
                                    </a>
                                </div>
                                <h4 className="post-title">
                                    <a href="post-single.html">Aliquam tincidunt mauris eurisus</a>
                                </h4>
                                <a
                                    href="post-single.html"
                                    className="btn btn-link btn-dark btn-underline"
                                >
                                    Read More
                                    <i className="w-icon-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div
                            className="swiper-slide post text-center overlay-zoom swiper-slide-next"
                            role="group"
                            aria-label="2 / 4"
                            style={{ width: 295, marginRight: 20 }}
                        >
                            <figure className="post-media br-sm">
                                <a href="post-single.html">
                                    <img
                                        src={pi2}
                                        alt="Post"
                                        width={280}
                                        height={180}
                                        style={{ backgroundColor: "#cec9cf" }}
                                    />
                                </a>
                            </figure>
                            <div className="post-details">
                                <div className="post-meta">
                                    by{" "}
                                    <a href="#" className="post-author">
                                        John Doe
                                    </a>
                                    -{" "}
                                    <a href="#" className="post-date mr-0">
                                        03.05.2021
                                    </a>
                                </div>
                                <h4 className="post-title">
                                    <a href="post-single.html">Cras ornare tristique elit</a>
                                </h4>
                                <a
                                    href="post-single.html"
                                    className="btn btn-link btn-dark btn-underline"
                                >
                                    Read More
                                    <i className="w-icon-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div
                            className="swiper-slide post text-center overlay-zoom"
                            role="group"
                            aria-label="3 / 4"
                            style={{ width: 295, marginRight: 20 }}
                        >
                            <figure className="post-media br-sm">
                                <a href="post-single.html">
                                    <img
                                        src={pi3}
                                        alt="Post"
                                        width={280}
                                        height={180}
                                        style={{ backgroundColor: "#c9c7bb" }}
                                    />
                                </a>
                            </figure>
                            <div className="post-details">
                                <div className="post-meta">
                                    by{" "}
                                    <a href="#" className="post-author">
                                        John Doe
                                    </a>
                                    -{" "}
                                    <a href="#" className="post-date mr-0">
                                        03.05.2021
                                    </a>
                                </div>
                                <h4 className="post-title">
                                    <a href="post-single.html">Vivamus vestibulum ntulla nec ante</a>
                                </h4>
                                <a
                                    href="post-single.html"
                                    className="btn btn-link btn-dark btn-underline"
                                >
                                    Read More
                                    <i className="w-icon-long-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div
                            className="swiper-slide post text-center overlay-zoom"
                            role="group"
                            aria-label="4 / 4"
                            style={{ width: 295, marginRight: 20 }}
                        >
                            <figure className="post-media br-sm">
                                <a href="post-single.html">
                                    <img
                                        src={pi4}
                                        alt="Post"
                                        width={280}
                                        height={180}
                                        style={{ backgroundColor: "#d8dce0" }}
                                    />
                                </a>
                            </figure>
                            <div className="post-details">
                                <div className="post-meta">
                                    by{" "}
                                    <a href="#" className="post-author">
                                        John Doe
                                    </a>
                                    -{" "}
                                    <a href="#" className="post-date mr-0">
                                        03.05.2021
                                    </a>
                                </div>
                                <h4 className="post-title">
                                    <a href="post-single.html">Fusce lacinia arcuet nulla</a>
                                </h4>
                                <a
                                    href="post-single.html"
                                    className="btn btn-link btn-dark btn-underline"
                                >
                                    Read More
                                    <i className="w-icon-long-arrow-right" />
                                </a>
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
        </div>

    )
}

