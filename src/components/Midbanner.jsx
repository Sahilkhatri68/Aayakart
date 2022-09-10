import React from 'react'
import img1 from "./../assets/images/demos/demo1/categories/3-1.jpg"
import img2 from "./../assets/images/demos/demo1/categories/3-2.jpg"
export default function Midbanner() {
  return (
    <div
  className="row category-cosmetic-lifestyle appear-animate mb-5 fadeIn appear-animation-visible"
  style={{ animationDuration: "1.2s" }}
>
  <div className="col-md-6 mb-4">
    <div className="banner banner-fixed category-banner-1 br-xs">
      <figure>
        <img
          src={img1}
          alt="Category Banner"
          width={610}
          height={200}
          style={{ backgroundColor: "#3B4B48" }}
        />
      </figure>
      <div className="banner-content y-50 pt-1">
        <h5 className="banner-subtitle font-weight-bold text-uppercase">
          Natural Process
        </h5>
        <h3 className="banner-title font-weight-bolder text-capitalize text-white">
          Cosmetic Makeup
          <br />
          Professional
        </h3>
        <a
          href="shop-banner-sidebar.html"
          className="btn btn-white btn-link btn-underline btn-icon-right"
        >
          Shop Now
          <i className="w-icon-long-arrow-right" />
        </a>
      </div>
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="banner banner-fixed category-banner-2 br-xs">
      <figure>
        <img
          src={img2}
          alt="Category Banner"
          width={610}
          height={200}
          style={{ backgroundColor: "#E5E5E5" }}
        />
      </figure>
      <div className="banner-content y-50 pt-1">
        <h5 className="banner-subtitle font-weight-bold text-uppercase">
          Trending Now
        </h5>
        <h3 className="banner-title font-weight-bolder text-capitalize">
          Women's Lifestyle
          <br />
          Collection
        </h3>
        <a
          href="shop-banner-sidebar.html"
          className="btn btn-dark btn-link btn-underline btn-icon-right"
        >
          Shop Now
          <i className="w-icon-long-arrow-right" />
        </a>
      </div>
    </div>
  </div>
</div>

  )
}
