import React from "react";
import Slider from "react-slick";
import Icon from "components/ui/AppIcon";

import slide1 from "../../assets/images/banner.png";

const slides = [
  {
    bg: slide1,
    title: "Organic Fruit Pulps",
    subtitle: "Pure, Preservative‑Free Goodness",
    desc: "Our signature mango and chikoo pulps capture the essence of fresh fruits, perfect for smoothies, desserts, and traditional recipes.",
  },
  {
    bg: slide1,
    title: "Farm Fresh Mangoes",
    subtitle: "Healthy & Natural",
    desc: "Fresh mangoes directly from farms with natural sweetness and premium quality.",
  },
  {
    bg: slide1,
    title: "Fast Delivery",
    subtitle: "Within 24 Hours",
    desc: "We deliver farm fresh fruit pulps directly to your doorstep quickly and safely.",
  },
];

const SliderPage = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <section className="banner-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="banner-slide"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="banner-overlay">

                <div className="banner-content">

                  <span className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-warning text-heading rounded-full mb-4 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" data-component-id="src/app/homepage/components/HeroSection.tsx:85:12" data-component-path="src/app/homepage/components/HeroSection.tsx" data-component-line="85" data-component-end-line="85" data-component-file="HeroSection.tsx" data-component-name="Icon" data-component-content="%7B%22elementName%22%3A%22Icon%22%2C%22name%22%3A%22SparklesIcon%22%7D" width="20" height="20" class=" "><path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg>
                    <span className="fw-semibold text-sm text-uppercase tracking-wide">100% Natural</span></span>

                  <h1 className="fw-bolder text-6xl mb-3 leading-tight text-white">{slide.title}</h1>

                  <p className="fw-semibold text-2xl mb-4 text-warning">{slide.subtitle}</p>

                  <p className="line-clamp-2">{slide.desc}</p>

                  <div className="d-flex flex-column flex-sm-row gap-3">
                    <button className="d-flex align-items-center justify-content-center gap-12 px-8 py-4 btn btn-success text-white rounded-lg fw-bold text-lg shadow-lg">
                      Order on WhatsApp
                    </button>

                    <button className="d-flex align-items-center justify-content-center gap-12 px-8 py-4 btn btn-white-01 backdrop-blur-sm text-white border border-white-02 rounded-lg fw-semibold text-lg">
                      Browse Catalog
                    </button>
                  </div>

                  {/* Features */}
                  <div className="d-flex flex-wrap align-items-center gap-4 mt-5 pt-8 border-top border-white-02">
                    <div className="d-flex align-items-center gap-2">
                      <Icon name="CheckBadgeIcon" size={24} className="text-success" variant="solid" />
                      <span>Farm Direct</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Icon name="TruckIcon" size={24} className="text-warning" />
                      <span>24/7 Delivery</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Icon name="ShieldCheckIcon" size={24} className="text-success" variant="solid" />
                      <span>Quality Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderPage;
