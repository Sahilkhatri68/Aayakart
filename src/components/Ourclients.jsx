import React from 'react'
import "./../assets/css/demo1.min.css"
import "./../assets/css/style.min.css"
import d1 from "./../assets/images/demos/demo1/brands/1.png"
import d2 from "./../assets/images/demos/demo1/brands/2.png"
import d3 from "./../assets/images/demos/demo1/brands/3.png"
import d4 from "./../assets/images/demos/demo1/brands/4.png"
import d5 from "./../assets/images/demos/demo1/brands/5.png"
import d6 from "./../assets/images/demos/demo1/brands/6.png"
import d7 from "./../assets/images/demos/demo1/brands/7.png"
import d8 from "./../assets/images/demos/demo1/brands/8.png"
import d9 from "./../assets/images/demos/demo1/brands/9.png"
import d10 from "./../assets/images/demos/demo1/brands/10.png"
import d11 from "./../assets/images/demos/demo1/brands/11.png"
import d12 from "./../assets/images/demos/demo1/brands/12.png"
export default function Ourclients() {
    return (
        <div style={{margin:"auto"}}   >
            <div>
                <h2
                    className="title title-underline mb-4 ls-normal appear-animate fadeIn appear-animation-visible"
                    style={{ animationDuration: "1.2s" }}>
                    Our Clients
                </h2>
            </div>
            <div>
                <div
                    className="swiper-container swiper-theme brands-wrapper mb-9 appear-animate swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events fadeIn appear-animation-visible"
                    data-swiper-options="{
              'spaceBetween': 0,
              'slidesPerView': 2,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 4
                  },
                  '992': {
                      'slidesPerView': 5
                  },
                  '1200': {
                      'slidesPerView': 6
                  }
              }
          }"
                    style={{ animationDuration: "1.2s" }}
                >
                    <div
                        className="swiper-wrapper "
                        id="swiper-wrapper-7106b10c3c5905fd21"
                        aria-live="polite"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                        <div
                            className="swiper-slide brand-col swiper-slide-active"
                            role="group"
                            aria-label="1 / 6"
                            style={{ width: "219.8px" }}
                        >
                            <figure className="brand-wrapper">
                                <img
                                    src={d1}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                            <figure className="brand-wrapper">
                                <img
                                    src={d2}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                        </div>
                        <div
                            className="swiper-slide brand-col swiper-slide-next"
                            role="group"
                            aria-label="2 / 6"
                            style={{ width: "219.8px" }}
                        >
                            <figure className="brand-wrapper">
                                <img
                                    src={d3}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                            <figure className="brand-wrapper">
                                <img
                                    src={d4}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                        </div>
                        <div
                            className="swiper-slide brand-col"
                            role="group"
                            aria-label="3 / 6"
                            style={{ width: "219.8px" }}
                        >
                            <figure className="brand-wrapper">
                                <img
                                    src={d5}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                            <figure className="brand-wrapper">
                                <img
                                    src={d6}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                        </div>
                        <div
                            className="swiper-slide brand-col"
                            role="group"
                            aria-label="4 / 6"
                            style={{ width: "219.8px" }}
                        >
                            <figure className="brand-wrapper">
                                <img
                                    src={d7}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                            <figure className="brand-wrapper">
                                <img
                                    src={d8}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                        </div>
                        <div
                            className="swiper-slide brand-col"
                            role="group"
                            aria-label="5 / 6"
                            style={{ width: "219.8px" }}
                        >
                            <figure className="brand-wrapper">
                                <img
                                    src={d9}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                            <figure className="brand-wrapper">
                                <img
                                    src={d10}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                        </div>
                        <div
                            className="swiper-slide brand-col"
                            role="group"
                            aria-label="6 / 6"
                            style={{ width: "219.8px" }}
                        >
                            <figure className="brand-wrapper">
                                <img
                                    src={d1}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                            <figure className="brand-wrapper">
                                <img
                                    src={d12}
                                    alt="Brand"
                                    width={410}
                                    height={186}
                                />
                            </figure>
                        </div>
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

