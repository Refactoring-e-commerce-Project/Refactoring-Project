

import React from "react";
// import "./Exclusive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "./exclusive.css";

function Exclusive() {
  return (
    <div className="exclusive__container">
      <div className="sidebar__exclusive">
        <span className="woman__fashion__exclusive">
          Woman's Fashion
          <div style={{ fontSize: "12px", color: "black" }}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </span>
        <span className="woman__fashion__exclusive">
          Men's Fashion
          <div style={{ fontSize: "12px", color: "black" }}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </span>
        <span>Electronics</span>
        <span>Home & Lifestyle</span>
        <span>Medcine</span>
        <span>Sports & Outdoor</span>
        <span>Baby's & Toys</span>
      </div>

      <div
        className="swiper__exclusive"
        style={{ width: "60%", marginLeft: "5%" }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="swipper__slide__exclusive">
            <img
              className="img_swipe_exclsive"
              src="https://mahajanelectronics.com/cdn/shop/articles/Mahajan_banner_18.jpg?v=1705637899"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img_swipe_exclsive"
              src="https://www.notebookcheck.net/fileadmin/_processed_/6/1/csm_iphone_12_ios14_4K_120_240_b0f5dafd77.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img_swipe_exclsive"
              src="https://cdnb.artstation.com/p/assets/images/images/059/174/059/large/motion-fox-phone-14-pro-mockup-pack-preview-image.jpg?1675800428"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img_swipe_exclsive"
              src="https://aetoswire.com/storage/clients/client-4203/product-line-up-image.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div></div>
    </div>
  );
}

export default Exclusive;
