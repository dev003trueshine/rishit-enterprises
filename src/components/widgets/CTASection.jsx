import React from "react";
import Icon from "components/ui/AppIcon";

export default function CTASection({ className = "" }) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Rishit Enterprise! I'm interested in your business services. Can you provide more details on bulk orders and pricing? Thanks!"
    );
    window.open(`https://wa.me/918238157599?text=${message}`, "_blank");
  };

  return (
    <section className={`py-24 bg-primary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Icon
            name="HeartIcon"
            size={56}
            className="text-white mx-auto mb-4"
            variant="solid"
          />

          <h2 className="fw-bold text-5xl text-white mb-4">
            Experience Farm-Fresh Quality
          </h2>

          <p className="text-xl text-white mb-5 max-w-2xl mx-auto leading-relaxed">
            Join 500+ families who trust Rishit Fruits for naturally ripened,
            organic fruits delivered fresh from our farm to your doorstep
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mt-40">
            <button
              onClick={handleWhatsAppClick}
              className="btn btn-success text-white d-flex align-items-center justify-content-center rounded-lg gap-2 px-8 py-4 shadow-organic-lg"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
              <span>Order Fresh Fruits</span>
            </button>
          </div>

          <div className="mt-48 pt-8 border-top border-white">
            <div className="d-grid grid-cols-1 sm-grid-cols-3 gap-4">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Icon name="TruckIcon" size={24} className="text-white" />
                <span className="text-white">Free Delivery</span>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <Icon name="ShieldCheckIcon" size={24} className="text-white" />
                <span className="text-white">
                  Quality Guaranteed
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <Icon name="ClockIcon" size={24} className="text-white" />
                <span className="text-white">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
