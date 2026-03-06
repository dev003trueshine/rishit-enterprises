import React from "react";
import Icon from "components/ui/AppIcon";

export default function LocationInfo() {
  const locationDetails = [
    {
      icon: "MapPinIcon",
      label: "Farm Address",
      value: "P2WP+X67 Vikas, NH 48, Majigam, Gujarat 396521",
    },
    {
      icon: "TruckIcon",
      label: "Delivery Areas",
      value: "Gujarat, Mumbai",
      // value: "Pune, Mumbai, Nashik & surrounding areas within 200km radius",
    },
    {
      icon: "PhoneIcon",
      label: "Schedule a Call",
      value: "+91 8238157599",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="fw-bold text-4xl mb-3">
              Visit Our Farm
            </h2>
            <p className="text-lg max-w-2xl mx-auto my-0">
              Experience the freshness firsthand! Our farm is open for visits by
              appointment. See where your fruits grow and meet our farming
              family.
            </p>
          </div>

          <div className="d-grid lg-grid-cols-2 align-items-center justify-content-center gap-5">
            {/* Map */}
            <div className="bg-card border rounded-lg overflow-hidden shadow-organic h-600px">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Rishit Fruits Farm Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.4305962410681!2d73.0358333883914!3d20.7475228980093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ed2a48c1cb8f%3A0xf674199f2df487c2!2sVikas!5e1!3m2!1sen!2sin!4v1772559204477!5m2!1sen!2sin"
                className="w-full h-full">
              </iframe>
            </div>

            {/* Location Details */}
            <div className="d-flex flex-column gap-4">
              {locationDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-lg p-6 shadow-card-md-hover transition-organic"
                >
                  <div className="d-flex gap-3">
                    <div className="w-12 h-12 bg-primary-subtle rounded-full d-flex align-items-center justify-content-center flex-shrink-0">
                      <Icon
                        name={detail.icon}
                        size={24}
                        className="text-primary"
                        variant="solid"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="fw-semibold text-lg mb-2">
                        {detail.label}
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="bg-card border rounded-lg p-6 shadow-card-md-hover transition-organic">
                <div className="d-flex gap-3">
                  <Icon
                    name="CalendarDaysIcon"
                    size={32}
                    className="text-primary flex-shrink-0"
                    variant="solid"
                  />
                  <div>
                    <h3 className="fw-semibold text-lg mb-2">
                      Schedule a Farm Visit
                    </h3>
                    <p className="text-sm mb-3">
                      Book a guided tour of our farm! Perfect for families,
                      schools, and anyone interested in organic farming
                      practices.
                    </p>
                    <button className="d-inline-flex align-items-center gap-2 px-4 py-2 btn btn-primary text-white rounded-lg fw-semibold text-sm">
                      <Icon name="PhoneIcon" size={16} />
                      <span>Call to Schedule</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
