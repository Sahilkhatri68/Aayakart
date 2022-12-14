import React from 'react'
import bnr from "./../assets/images/demos/demo1/banners/4.jpg"
export default function NewBanner() {
  return (
    <div
      className="banner banner-fashion appear-animate br-sm mb-9 fadeIn appear-animation-visible"
      style={{
        backgroundImage: `url(${bnr})`,
        backgroundColor: "rgb(56, 56, 57)",
        animationDuration: "1.2s"
      }}
    >
      <div className="banner-content align-items-center">
        <div className="content-left d-flex align-items-center mb-3">
          <div className="banner-price-info font-weight-bolder text-secondary text-uppercase lh-1 ls-25">
            25&nbsp;
            <sup className="font-weight-bold">% &nbsp;</sup> &nbsp;
            <sub className="font-weight-bold ls-25">Off</sub>
          </div>
          <hr className="banner-divider bg-white mt-0 mb-0 mr-8" />
        </div>
        <div className="content-right d-flex align-items-center flex-1 flex-wrap">
          <div className="banner-info mb-0 mr-auto pr-4 mb-3">
            <h3 className="banner-title text-white font-weight-bolder text-uppercase ls-25">
              For Today's Fashion
            </h3>
            <p className="text-white mb-0">
              Use code
              <span className="text-dark bg-white font-weight-bold ls-50 pl-1 pr-1 d-inline-block">
                Black
                <strong>12345</strong>
              </span>{" "}
              to get best offer.
            </p>
          </div>
          <a
            href="shop-banner-sidebar.html"
            className="btn btn-white btn-outline btn-rounded btn-icon-right mb-3"
          >
            Shop Now
            <i className="w-icon-long-arrow-right" />
          </a>
        </div>
      </div>
    </div>

  )
}

