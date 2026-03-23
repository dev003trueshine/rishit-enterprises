import React from "react";
import AppImage from "components/ui/AppImage"; // adjust path if needed
import Icon from "components/ui/AppIcon";
import mangoPulpImg from "../../assets/images/mango-pulp.webp";

const handleWhatsAppClick = () => {
  const message = encodeURIComponent(
    "Hello Rishit Enterprise! I'm interested in your business services. Can you provide more details on bulk orders and pricing? Thanks!"
  );
  window.open(`https://wa.me/8238157599?text=${message}`, "_blank");
};
export default function MangoHero({ onWhatsAppClick = handleWhatsAppClick }) {
  const features = [
    { icon: "CheckBadgeIcon", text: "Farm-Direct Quality" },
    { icon: "TruckIcon", text: "Fast Delivery" },
    { icon: "ShieldCheckIcon", text: "Freshness Guaranteed" },
    { icon: "GiftIcon", text: "Premium Packaging" },
  ];

  return (
    <section className="position-relative bg-card py-24 overflow-hidden">
      <div className="container mx-auto px-4 position-relative z-10">
        <div className="d-grid lg-grid-cols-2 gap-48 align-items-center">
          {/* Content */}
          <div className="d-flex flex-column gap-4">
            <div className="">
              <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-warning-subtle rounded-full border border-warning svg-bg-warning">
                <Icon name="SparklesIcon" size={20} className="text-warning" variant="solid" />
                <span className="text-sm fw-semibold text-warning">
                  Premium Mango Collection
                </span>
              </div>
            </div>

            <h1 className="fw-bold text-6xl text-primary leading-tight">
              King of Fruits,
              <br />
              <span className="text-warning">Naturally Ripened</span>
            </h1>

            <p className="text-lg leading-relaxed max-w-xl">
              Experience the authentic taste of farm-fresh mangoes, harvested at
              peak ripeness and delivered with care. From classic Alphonso to
              exotic varieties, discover India&apos;s finest mango collection.
            </p>

            {/* Features */}
            <div className="d-grid grid-cols-1 sm-grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="d-flex align-items-center gap-12">
                  <div className="flex-shrink-0 w-10 h-10 bg-warning-subtle rounded-lg d-flex align-items-center justify-content-center">
                    <Icon
                      name={feature.icon}
                      size={20}
                      className="text-primary"
                      variant="solid"
                    />
                  </div>
                  <span className="fw-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 pt-6">
              <button
                onClick={onWhatsAppClick}
                className="d-flex align-items-center gap-2 px-4 md:px-8 py-4 btn btn-success text-white rounded-lg fw-semibold text-base shadow-md"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
                Order Fresh Mangoes
              </button>

              <a href="tel: +918238157599" className="d-flex align-items-center gap-2 px-8 py-4 btn btn-outline-primary rounded-lg fw-semibold text-base">
                <Icon name="PhoneIcon" size={24} />
                Bulk Orders
              </a>
            </div>

            {/* Trust Badge */}
            <div className="d-flex align-items-center flex-wrap gap-3 pt-4">
              <div className="d-flex gap-2">
                <div
                  className="w-10 h-10 rounded-full bg-primary-subtle d-flex align-items-center justify-content-center">
                  <Icon name="UserIcon" size={20} className="text-primary" variant="solid" />
                </div>
              </div>
              <div>
                <p className="fw-semibold text-heading m-0">2,500+ Happy Customers</p>
                <p className="text-sm m-0">This mango season</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <AppImage
                src={mangoPulpImg}
                alt="Fresh ripe Alphonso mangoes arranged in wooden basket with green leaves on rustic farm table"
                className="w-full h-full object-cover"
              />

              {/* Rating Badge */}
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md">
                <div className="flex items-center gap-2">
                  <Icon name="StarIcon" size={20} className="text-accent" variant="solid" />
                  <div>
                    <p className="font-bold text-lg text-foreground">5/5</p>
                    <p className="text-xs text-muted-foreground">Customer Rating</p>
                  </div>
                </div>
              </div>

              {/* Season Badge */}
              <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-md">
                <p className="font-bold text-sm">SEASON: APR - JUN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
