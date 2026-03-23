import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Offcanvas, Form, Button } from "react-bootstrap";
import Icon from "components/ui/AppIcon";
import Slider from "react-slick";
import slider1 from "../assets/images/mango.webp";
import slider2 from "../assets/images/banner.webp";
const ProductDetail = () => {

  const FeatureItem = [
    {
      id: 1,
      icon: 'TruckIcon',
      title: 'Fast Delivery',
      description: 'Fresh fruits delivered fast',
    },
    {
      id: 2,
      icon: 'ShieldCheckIcon',
      title: 'Quality Assured',
      description: '100% Organic',
    },
    {
      id: 3,
      icon: 'CurrencyRupeeIcon',
      title: 'Best Prices',
      description: 'Farm Direct',
    },
    {
      id: 4,
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Easy Ordering',
      description: 'Via WhatsApp',
    }
  ];

  const [quantity, setQuantity] = useState(1);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const productImages = [slider1, slider2, slider1, slider2];

  const mainSliderSettings = {
    asNavFor: nav2,
    ref: sliderRef1,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const thumbSliderSettings = {
    asNavFor: nav1,
    ref: sliderRef2,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
  };
  const productReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Home Chef",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png",
      alt: "Professional headshot of Indian woman with long black hair in traditional attire smiling",
      rating: 5,
      review: "The Alphonso mangoes were absolutely divine! Perfectly ripe, incredibly sweet, and the aroma filled my entire kitchen. My family loved the mango lassi I made. Will definitely order again next season!",
      orderType: "Alphonso - 5kg",
      date: "May 2025",
    },
    {
      id: 2,
      name: "Rajesh Patel",
      role: "Restaurant Owner",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffb8dc87-1763296355766.png",
      alt: "Professional headshot of Indian man in formal blue shirt with confident smile",
      rating: 5,
      review: "As a business owner, consistency is crucial. Rishit Fruits delivers premium quality mangoes every single time. Their bulk ordering process is seamless, and the dedicated support is exceptional.",
      orderType: "Bulk Order - 25kg",
      date: "June 2025",
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Health Enthusiast",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9af19c6-1763297142251.png",
      alt: "Professional headshot of young Indian woman with short hair in casual attire",
      rating: 5,
      review: "I appreciate that these mangoes are naturally ripened without any chemicals. The taste is authentic and reminds me of mangoes from my childhood. The mango pulp is also excellent for smoothies!",
      orderType: "Alphonso - 3kg",
      date: "May 2025",
    }
  ];

  const [showReviewCanvas, setShowReviewCanvas] = useState(false);
  const handleCloseReviewCanvas = () => setShowReviewCanvas(false);
  const handleShowReviewCanvas = () => setShowReviewCanvas(true);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="py-12 bg-card">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="d-flex align-items-center gap-2 text-sm">
          <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#!">Home</a></li>
              <li className="breadcrumb-item"><a href="#!">Fruits Catalog</a></li>
              <li className="breadcrumb-item active" aria-current="page">Alphonso Mangoes</li>
            </ol>
          </nav>
        </div>

        <div className="row gy-4 mb-12">
          {/* Product Images */}
          <div className="col-lg-6">
            <div className="product-gallery">

              {/* Main Image Slider */}
              <Slider {...mainSliderSettings}>
                {productImages.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt="product"
                      style={{ width: "100%", borderRadius: "12px" }}
                    />

                    {/* Slide Counter */}
                    <div className="slider-number">
                      {currentSlide + 1} / {productImages.length}
                    </div>
                  </div>
                ))}
              </Slider>

              {/* Thumbnail Slider */}
              <Slider {...thumbSliderSettings} style={{ marginTop: "15px" }}>
                {productImages.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt="thumb"
                      style={{
                        width: "100%",
                        padding: "4px",
                        border:
                          currentSlide === index
                            ? "2px solid green"
                            : "2px solid transparent",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                ))}
              </Slider>


            </div>
          </div>

          {/* Product Info */}
          <div className="col-lg-6">
            <div className="product-info">
              <h2 className="fw-bold text-4xl text-primary">Premium Alphonso Mangoes</h2>
              <ul className="list-unstyled d-flex align-items-center flex-wrap gap-3 mb-0">
                <li className="text-body">Naturally Ripened</li>
                <li className="text-body">|</li>
                <li className="text-body">Farm Fresh</li>
                <li className="text-body">|</li>
                <li className="text-body">Chemical-Free</li>
              </ul>

              {/* Rating */}
              <div className="d-flex align-items-center gap-3 mt-3">
                <div className="d-flex align-items-center gap-1 svg-bg-warning">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="StarIcon"
                      size={20}
                      className={i ? 'text-warning' : 'text-body'}
                      variant="solid" />
                  ))}
                </div>
                <span className="fw-semibold text-heading">4.8</span>
                <span>(156 Reviews)</span>
              </div>

              {/* Price */}
              <div className="bg-warning-subtle rounded-lg p-6 border-l-4 mt-4">
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <span className="fw-bold text-4xl text-primary">₹450</span>
                  <span className="text-lg">/Kg</span>
                  <span className="text-lg text-decoration-line-through">₹600</span>
                  <span className="px-3 py-1 bg-danger text-white rounded-full text-sm fw-semibold">25% OFF</span>
                </div>
                <p className="text-sm text-success fw-medium mt-2 mb-0">You save ₹150 per kg!</p>
              </div>

              {/* Stock */}
              <div className="d-flex align-items-center gap-2 px-4 py-3 bg-success-subtle border border-success rounded-lg mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" data-component-id="src/app/individual-product-pages/components/ProductInteractive.tsx:390:14" data-component-path="src/app/individual-product-pages/components/ProductInteractive.tsx" data-component-line="390" data-component-end-line="390" data-component-file="ProductInteractive.tsx" data-component-name="Icon" data-component-content="%7B%22elementName%22%3A%22Icon%22%2C%22name%22%3A%22CheckCircleIcon%22%2C%22className%22%3A%22text-success%22%7D" width="20" height="20" class=" text-success"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path></svg>
                <span className="fw-semibold text-success">In Stock - Fresh Batch Available</span>
              </div>

              {/* Quantity */}
              <div className="mt-4">
                <form>
                  <div className="form-group">
                    <label className="fw-semibold text-heading">Quantity</label>
                    <div className="d-flex align-items-center gap-3 mt-2">
                      <div className="d-flex align-items-center border rounded-lg overflow-hidden">
                        <button type="button" onClick={decrement} className="w-12 h-12 d-flex align-items-center justify-content-center btn btn-body">-</button>
                        <input className="w-16 h-12 text-center fw-semibold text-lg border-left border-right" type="text" value={quantity} readOnly />
                        <button type="button" onClick={increment} className="w-12 h-12 d-flex align-items-center justify-content-center btn btn-body">+</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Subtotal */}
              <div className="bg-body rounded-lg p-4 mt-2">
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center justify-content-between text-sm">
                    <span>Subtotal ({quantity} kg)</span>
                    <span className="fw-semibold text-heading">₹{450 * quantity}</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-sm">
                    <span>Savings</span>
                    <span className="fw-semibold text-success">-₹{150 * quantity}</span>
                  </div>
                </div>
                <div className="border-top mt-2 pt-2 d-flex align-items-center justify-content-between">
                  <span className="fw-semibold text-heading">Total Amount</span>
                  <span className="fw-bold text-2xl text-heading">₹{300 * quantity}</span>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-4">
                <button className="w-100 py-4 btn btn-success text-white rounded-lg fw-bold text-lg shadow-organic-md d-flex align-items-center justify-content-center gap-3">
                  Order via WhatsApp
                </button>
              </div>

              {/* Key Highlights */}
              <div className="mt-4">
                <h3 className="fw-semibold text-lg text-primary mb-3">Key Highlights</h3>
                <div className="d-flex flex-column gap-2">
                  {[
                    "100% Naturally Ripened - No Artificial Chemicals",
                    "Handpicked from Certified Organic Farms",
                    "Rich in Vitamins A, C, and Dietary Fiber",
                    "Perfect Balance of Sweetness and Tanginess",
                    "Hygienic Packaging with Freshness Seal",
                    "Farm-to-Table in 24-48 Hours",
                  ].map((text, idx) => (
                    <div key={idx} className="d-flex align-items-start gap-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-success mt-1 flex-shrink-0" variant="solid" />
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <Tabs
            defaultActiveKey="product-detail"
            id="product-tabs"
            className="mb-5 product-detail-tab"
          >
            <Tab
              eventKey="product-detail"
              title={
                <span className="d-flex align-items-center gap-2 px-4 py-2 fw-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                  Product Detail
                </span>
              }
            >
              <div className="d-grid lg-grid-cols-2 gap-5 mt-4">
                {/* Left Column */}
                <div className="d-flex flex-column gap-4">
                  <div>
                    <h3 className="fw-bold text-xl text-primary mb-3">About This Product</h3>
                    <span className="leading-relaxed">
                      Experience the king of mangoes - our premium Alphonso mangoes are handpicked
                      at peak ripeness from our certified organic farms in Ratnagiri. Each mango is
                      carefully selected for its perfect golden-yellow color, rich aroma, and unmatched
                      sweetness. These mangoes are naturally ripened using traditional methods, ensuring
                      you get the authentic taste that Alphonso is famous for worldwide.
                    </span>
                  </div>

                  <div className="bg-body rounded-lg p-6 d-flex flex-column gap-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full d-flex align-items-center justify-content-center svg-bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="24"
                          height="24"
                          className="text-primary-foreground"
                        >
                          <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                          <path
                            fillRule="evenodd"
                            d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="fw-bold text-xl text-primary mb-0">Storage & Ripening Tips</h3>
                    </div>

                    <div className="d-grid gap-3 mt-4">
                      {/* Tip 1 */}
                      <div className="bg-card rounded-lg p-4 shadow-organic shadow-card-md-hover">
                        <div className="d-flex align-items-start gap-3">
                          <div className="w-12 h-12 bg-warning-subtle rounded-lg d-flex align-items-center justify-content-center flex-shrink-0 svg-bg-warning">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              width="24"
                              height="24"
                              className="text-accent"
                            >
                              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="fw-semibold text-heading">Room Temperature Ripening</h4>
                            <p className="text-sm leading-relaxed m-0">
                              Keep unripe mangoes at room temperature (20-25°C) away from direct sunlight.
                              They will ripen naturally in 2-4 days.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Tip 2 */}
                      <div className="bg-card rounded-lg p-4 shadow-organic shadow-card-md-hover">
                        <div className="d-flex align-items-start gap-3">
                          <div className="w-12 h-12 bg-warning-subtle rounded-lg d-flex align-items-center justify-content-center flex-shrink-0 svg-bg-warning">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              width="24"
                              height="24"
                              className="text-accent"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="fw-semibold text-heading">Refrigeration for Ripe Mangoes</h4>
                            <p className="text-sm leading-relaxed m-0">
                              Once ripe, store in the refrigerator's fruit drawer. This extends freshness
                              for 3-5 days while maintaining flavor.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Tip 3 */}
                      <div className="bg-card rounded-lg p-4 shadow-organic shadow-card-md-hover">
                        <div className="d-flex align-items-start gap-3">
                          <div className="w-12 h-12 bg-warning-subtle rounded-lg d-flex align-items-center justify-content-center flex-shrink-0 svg-bg-warning">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              width="24"
                              height="24"
                              className="text-accent"
                            >
                              <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="fw-semibold text-heading">Check Ripeness</h4>
                            <p className="text-sm leading-relaxed m-0">
                              Gently squeeze the mango - it should yield slightly to pressure. A sweet
                              aroma near the stem indicates perfect ripeness.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Tip 4 */}
                      <div className="bg-card rounded-lg p-4 shadow-organic shadow-card-md-hover">
                        <div className="d-flex align-items-start gap-3">
                          <div className="w-12 h-12 bg-warning-subtle rounded-lg d-flex align-items-center justify-content-center flex-shrink-0 svg-bg-warning">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              width="24"
                              height="24"
                              className="text-accent"
                            >
                              <path
                                fillRule="evenodd"
                                d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="fw-semibold text-heading">Avoid Plastic Bags</h4>
                            <p className="text-sm leading-relaxed m-0">
                              Never store mangoes in sealed plastic bags as this traps moisture and
                              accelerates spoilage. Use breathable containers.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Pro Tip */}
                      <div className="bg-warning-subtle text-warning border-l-4 p-4">
                        <div className="d-flex align-items-start gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="20"
                            height="20"
                            className="text-warning mt-0.5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <h6 className="fw-semibold text-warning text-sm m-0">Pro Tip</h6>
                            <p className="text-sm text-warning mt-1 mb-0">
                              For best flavor, consume within 2-3 days of ripening. Store ripe fruits in
                              the refrigerator to extend freshness by 3-5 days.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Nutrition */}
                <div className="bg-card rounded-lg border border-primary p-6 mt-4">
                  <div className="border-bottom border-primary pb-3">
                    <h3 className="fw-bold text-2xl text-primary mb-1">Nutrition Facts</h3>
                    <span className="text-sm">Per 100g</span>
                  </div>

                  <div className="border-bottom pb-4 mt-4">
                    <div className="d-flex align-items-baseline justify-content-between gap-1">
                      <span className="fw-bold text-heading text-lg">Calories</span>
                      <span className="fw-bold text-3xl text-primary">60</span>
                    </div>
                  </div>

                  <div className="border-bottom pb-4 mt-4">
                    <div className="d-flex align-items-baseline justify-content-between gap-1">
                      <span />
                      <span className="fw-semibold text-xs">% Daily Value*</span>
                    </div>
                  </div>

                  {[
                    ["Total Carbohydrates", "15g", "5%"],
                    ["Dietary Fiber", "1.6g", "6%"],
                    ["Sugars", "13.7g", "-"],
                    ["Protein", ".8g", "2%"],
                    ["Vitamin A", "1082 IU", "22%"],
                    ["Vitamin C", "36.4mg", "61%"],
                    ["Potassium", "168mg", "5%"],
                    ["Calcium", "11mg", "1%"],
                  ].map(([label, value, percent], i) => (
                    <div key={i} className="border-bottom pb-4 mt-4">
                      <div className="d-flex align-items-baseline justify-content-between gap-1">
                        <span className="fw-medium text-heading">{label}</span>
                        <div className="d-flex align-items-center gap-4">
                          <span className="fw-semibold text-heading">{value}</span>
                          <div className="fw-bold text-primary">{percent}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Health Benefits */}
                  <div className="bg-body rounded-lg p-4 d-flex flex-column gap-3 mt-4">
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                        className="text-error"
                      >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>
                      <h4 className="fw-semibold text-primary mb-0">Health Benefits</h4>
                    </div>

                    {[
                      "Boosts immunity with high Vitamin C content",
                      "Supports eye health with Vitamin A and beta-carotene",
                      "Aids digestion with natural enzymes and fiber",
                      "Promotes healthy skin with antioxidants",
                      "Helps maintain blood pressure with potassium",
                    ].map((text, i) => (
                      <div key={i} className="d-flex align-items-start gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="16"
                          height="16"
                          className="text-success mt-0.5 flex-shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs fst-italic mt-4 mb-0">
                    * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be
                    higher or lower depending on your calorie needs.
                  </p>
                </div>
              </div>
            </Tab>

            {/* ================= Reviews Tab ================= */}
            <Tab
              eventKey="reviews"
              title={
                <span className="d-flex align-items-center gap-2 px-4 py-2 fw-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  Customer Reviews
                </span>
              }
            >
              <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-5 mt-4">
                <h5 className="mb-0">Customer Review</h5>
                <div className="d-flex align-items-center gap-3">
                  <button
                    onClick={handleShowReviewCanvas}
                    className="btn btn-link p-0 text-decoration-underline text-primary"
                  >
                    Add Review
                  </button>
                  <Link to="/all-review" className="btn btn-link p-0 text-decoration-underline text-primary">
                    View All
                  </Link>
                </div>
              </div>

              <div className="d-grid md-grid-cols-2 lg-grid-cols-3 gap-5">
                {productReviews.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-card border rounded-xl p-6 shadow-organic shadow-card-md-hover"
                  >
                    {/* Header */}
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="position-relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.alt}
                          className="w-100 h-100 object-cover"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="fw-bold text-base m-0">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm m-0 text-muted">
                          {testimonial.role}
                        </p>
                        {/* Rating */}
                        <div className="d-flex align-items-center gap-1 mt-1 svg-bg-warning">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon
                              key={i}
                              name="StarIcon"
                              size={14}
                              className="text-warning"
                              variant="solid"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Review */}
                    <p className="text-sm text-heading leading-relaxed mb-0">
                      "{testimonial.review}"
                    </p>

                    {/* Footer */}
                    <div className="d-flex align-items-center justify-content-between pt-3 mt-3 border-top">
                      <div className="d-flex align-items-center gap-2">
                        <Icon
                          name="ShoppingBagIcon"
                          size={16}
                          className="text-body"
                        />
                        <span className="text-xs text-muted">
                          {testimonial.orderType}
                        </span>
                      </div>
                      <span className="text-xs text-muted">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className="mb-12">
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <h3 className="fw-bold text-2xl text-primary">You May Also Like</h3>
            <a href="#!" className="text-sm fw-medium btn btn-link p-0 d-flex align-items-center gap-1">
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width="16"
                height="16"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Feature Cards */}
          <div className="rounded-lg p-8">
            <div className="d-grid md-grid-cols-4 gap-4">
              {/* Card 1 */}
              {FeatureItem.map((badge) => (
                <div className="d-flex flex-column align-items-center gap-2">
                  <div className="w-16 h-16 bg-primary rounded-full d-flex align-items-center justify-content-center svg-bg-white">
                    <Icon name={badge.icon} size={32} variant="solid" />
                  </div>
                  <h4 className="fw-semibold text-primary">{badge.title}</h4>
                  <span className="text-sm">{badge.description}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* Add Review Offcanvas */}
      <Offcanvas show={showReviewCanvas} onHide={handleCloseReviewCanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Add Review</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <div className="d-flex flex-column gap-4">
              <Form.Group>
                <Form.Label className="fw-medium mb-2 text-heading">Full Name <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Your full name" required />
              </Form.Group>

              <Form.Group>
                <Form.Label className="fw-medium mb-2 text-heading">Email Address <span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" placeholder="Your email address" required />
              </Form.Group>

              <Form.Group>
                <Form.Label className="fw-medium mb-2 text-heading">Phone Number <span className="text-danger">*</span></Form.Label>
                <Form.Control type="tel" placeholder="Your phone number" required />
              </Form.Group>

              <Form.Group>
                <Form.Label className="fw-medium mb-2 text-heading">Rate Us <span className="text-danger">*</span></Form.Label>
                <div className="d-flex align-items-center gap-1 svg-bg-warning">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="StarIcon" size={24} className={i < 4 ? "text-warning" : "text-body"} variant={i < 4 ? "solid" : "outline"} />
                  ))}
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label className="fw-medium mb-2 text-heading">Your Review <span className="text-danger">*</span></Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Tell us how we can help you..." required />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100 d-flex align-items-center justify-content-center gap-2 px-6 py-3 rounded-lg fw-semibold text-lg text-white mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"></path>
                </svg>
                <span>Send Review</span>
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ProductDetail;
