import React from 'react'
import "./../assets/css/demo1.min.css"
import "./../assets/css/style.min.css"
import sh from "./../assets/images/demos/demo1/sliders/shoes.png"
import slide from "./../assets/images/demos/demo1/sliders/slide-1.jpg"
import slide3 from "./../assets/images/demos/demo1/sliders/slide-3.jpg"
export default function Introsection() {
    return (
        <div>
            <section className="intro-section">
                <div
                    className="swiper-container swiper-theme nav-inner pg-inner swiper-nav-lg animation-slider pg-xxl-hide nav-xxl-show nav-hide"
                    data-swiper-options="{
              'slidesPerView': 1,
              'autoplay': {
                  'delay': 8000,
                  'disableOnInteraction': false
              }
          }"
                >
                    <div className="swiper-wrapper">
                        <div
                            className="swiper-slide banner banner-fixed intro-slide intro-slide1"
                            style={{
                                backgroundImage: `url(${slide3} )`,
                                backgroundColor: "#ebeef2"
                            }}
                        >
                            <div className="container">
                                <figure className="slide-image skrollable slide-animate">
                                    <img
                                        src={sh}
                                        alt="Banner"
                                        data-bottom-top="transform: translateY(10vh);"
                                        data-top-bottom="transform: translateY(-10vh);"
                                        width={474}
                                        height={397}
                                    />
                                </figure>
                                <div className="banner-content y-50 text-right">
                                    <h5
                                        className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate"
                                        data-animation-options="{
                              'name': 'fadeInRightShorter',
                              'duration': '1s',
                              'delay': '.2s'
                          }"
                                    >
                                        Custom <span className="p-relative d-inline-block">Men’s</span>
                                    </h5>
                                    <h3
                                        className="banner-title font-weight-bolder ls-25 lh-1 slide-animate"
                                        data-animation-options="{
                              'name': 'fadeInRightShorter',
                              'duration': '1s',
                              'delay': '.4s'
                          }"
                                    >
                                        RUNNING SHOES
                                    </h3>
                                    <p
                                        className="font-weight-normal text-default slide-animate"
                                        data-animation-options="{
                              'name': 'fadeInRightShorter',
                              'duration': '1s',
                              'delay': '.6s'
                          }"
                                    >
                                        Sale up to{" "}
                                        <span className="font-weight-bolder text-secondary">30% OFF</span>
                                    </p>
                                    <a
                                        href="#"
                                        className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
                                        data-animation-options="{
                              'name': 'fadeInRightShorter',
                              'duration': '1s',
                              'delay': '.8s'
                          }"
                                    >
                                        SHOP NOW
                                        <i className="w-icon-long-arrow-right" />
                                    </a>
                                </div>
                                {/* End of .banner-content */}
                            </div>
                            {/* End of .container */}
                        </div>
                        {/* End of .intro-slide1 */}
                        <div
                            className="swiper-slide banner banner-fixed intro-slide intro-slide2"
                            style={{
                                backgroundImage: `url(${slide})`,
                                backgroundColor: "#ebeef2"
                            }}
                        >
                            <div className="container">
                                <figure
                                    className="slide-image skrollable slide-animate"
                                    data-animation-options="{
                              'name': 'fadeInUpShorter',
                              'duration': '1s'
                          }"
                                >
                                    <img
                                        src="assets/images/demos/demo1/sliders/men.png"
                                        alt="Banner"
                                        data-bottom-top="transform: translateX(10vh);"
                                        data-top-bottom="transform: translateX(-10vh);"
                                        width={480}
                                        height={633}
                                    />
                                </figure>
                                <div className="banner-content d-inline-block y-50">
                                    <h5
                                        className="banner-subtitle font-weight-normal text-default ls-50 slide-animate"
                                        data-animation-options="{
                                  'name': 'fadeInUpShorter',
                                  'duration': '1s',
                                  'delay': '.2s'
                              }"
                                    >
                                        Mountain-<span className="text-secondary">Climbing</span>
                                    </h5>
                                    <h3
                                        className="banner-title font-weight-bolder text-dark mb-0 ls-25 slide-animate"
                                        data-animation-options="{
                                  'name': 'fadeInUpShorter',
                                  'duration': '1s',
                                  'delay': '.4s'
                              }"
                                    >
                                        Hot &amp; Packback
                                    </h3>
                                    <p
                                        className="font-weight-normal text-default slide-animate"
                                        data-animation-options="{
                                  'name': 'fadeInUpShorter',
                                  'duration': '1s',
                                  'delay': '.8s'
                              }"
                                    >
                                        Only until the end of this week.
                                    </p>
                                    <a
                                        href="#"
                                        className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
                                        data-animation-options="{
                                  'name': 'fadeInUpShorter',
                                  'duration': '1s',
                                  'delay': '1s'
                              }"
                                    >
                                        SHOP NOW
                                        <i className="w-icon-long-arrow-right" />
                                    </a>
                                </div>
                                {/* End of .banner-content */}
                            </div>
                            {/* End of .container */}
                        </div>
                        {/* End of .intro-slide2 */}
                        <div
                            className="swiper-slide banner banner-fixed intro-slide intro-slide3"
                            style={{
                                backgroundImage: "url(assets/images/demos/demo1/sliders/slide-3.jpg)",
                                backgroundColor: "#f0f1f2"
                            }}
                        >
                            <div className="container">
                                <figure
                                    className="slide-image skrollable slide-animate"
                                    data-animation-options="{
                              'name': 'fadeInDownShorter',
                              'duration': '1s'
                          }"
                                >
                                    <img
                                        src="assets/images/demos/demo1/sliders/skate.png"
                                        alt="Banner"
                                        data-bottom-top="transform: translateY(10vh);"
                                        data-top-bottom="transform: translateY(-10vh);"
                                        width={310}
                                        height={444}
                                    />
                                </figure>
                                <div className="banner-content text-right y-50">
                                    <p
                                        className="font-weight-normal text-default text-uppercase mb-0 slide-animate"
                                        data-animation-options="{
                                  'name': 'fadeInLeftShorter',
                                  'duration': '1s',
                                  'delay': '.6s'
                              }"
                                    >
                                        Top weekly Seller
                                    </p>
                                    <h5
                                        className="banner-subtitle font-weight-normal text-default ls-25 slide-animate"
                                        data-animation-options="{
                                  'name': 'fadeInLeftShorter',
                                  'duration': '1s',
                                  'delay': '.4s'
                              }"
                                    >
                                        Trending Collection
                                    </h5>
                                    <h3
                                        className="banner-title p-relative font-weight-bolder ls-50 slide-animate"
                                        data-animation-options="{
                                  'name': 'fadeInLeftShorter',
                                  'duration': '1s',
                                  'delay': '.2s'
                              }"
                                    >
                                        <span className="text-white mr-4">Roller</span>-skate
                                    </h3>
                                    <div
                                        className="btn-group slide-animate"
                                        data-animation-options="{
                                  'name': 'fadeInLeftShorter',
                                  'duration': '1s',
                                  'delay': '.8s'
                              }"
                                    >
                                        <a
                                            href="#"
                                            className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                                        >
                                            SHOP NOW
                                            <i className="w-icon-long-arrow-right" />
                                        </a>
                                    </div>
                                    {/* End of .banner-content */}
                                </div>
                                {/* End of .container */}
                            </div>
                        </div>
                        {/* End of .intro-slide3 */}
                    </div>
                    <div className="swiper-pagination" />
                    <button className="swiper-button-next" />
                    <button className="swiper-button-prev" />
                </div>
                {/* End of .swiper-container */}
            </section>
        </div>
    )
}
