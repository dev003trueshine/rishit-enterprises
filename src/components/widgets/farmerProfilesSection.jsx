import React from "react";
import AppImage from "components/ui/AppImage";
import Icon from "components/ui/AppIcon";

import img1 from "../../assets/images/dahyabhai.webp";
import img2 from "../../assets/images/mohanbhai.webp";
import img3 from "../../assets/images/nanubhai.webp";

export default function FarmerProfilesSection({ className = "" }) {
  const farmers = [
    {
      id: 1,
      name: "Dahyabhai Patel",
      role: "Master Chikoo Specialist", // Highlighted his specialty
      experience: "25+ Years",
      image: img1,
      alt: "Dahyabhai Patel, Senior Farmer and Founder, standing in his orchard",
      expertise: ["Chikoo Cultivation Expert", "Organic Farming", "Export Quality Management"],
      quote: "Our Chikoo carries the sweetness of 25 years of dedicated organic farming.",
    },
    {
      id: 2,
      name: "Mohanbhai Patel",
      role: "Chief Quality & Harvest Manager",
      experience: "20 Years",
      image: img2,
      alt: "Mohanbhai Patel inspecting fruit quality in the packing facility",
      expertise: ["Mango & Chikoo Specialist", "Post-Harvest Care", "Organic Farming"],
      quote: "Whether it's Mango or Chikoo, we ensure every fruit meets our gold standard.",
    },
    {
      id: 3,
      name: "Nanubhai Patel",
      role: "Operations Head & Mango Specialist", // Highlighted Mango specialty
      experience: "20 Years",
      image: img3,
      alt: "Nanubhai Patel managing farm operations in the mango orchard",
      expertise: ["Mango Variety Specialist", "Modern Farm Tech", "Supply Chain Logistics"],
      quote: "Merging modern precision with traditional wisdom for the perfect harvest.",
    },
  ];


  return (
    <section className={`py-24 bg-body ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="fw-bold text-4xl mb-3">Meet Our Farm Family</h2>
          <p className="max-w-2xl mx-auto my-0">The passionate people behind every fruit that reaches your home</p>
        </div>

        {/* Cards */}
        <div className="d-grid md-grid-cols-2 lg-grid-cols-3 gap-5">
          {farmers.map((farmer) => (
            <div
              key={farmer.id}
              className="bg-card rounded-lg overflow-hidden shadow-organic shadow-card-lg-hover"
            >
              {/* Image */}
              <div className="position-relative h-80 overflow-hidden">
                <AppImage
                  src={farmer.image}
                  alt={farmer.alt}
                  className="w-100 rounded-xl shadow-organic shadow-lg object-cover"
                />

                <div className="position-absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="fw-bold text-xl text-white mb-1">
                    {farmer.name}
                  </h3>
                  <p className="text-sm text-white m-0">
                    {farmer.role}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Icon name="ClockIcon" size={16} className="text-primary" />
                  <span className="text-sm fw-medium">
                    {farmer.experience} Experience
                  </span>
                </div>

                <div className="mb-3 pb-3 border-bottom">
                  <h4 className="fw-semibold text-sm text-foreground mb-2">
                    Expertise:
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    {farmer.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-subtle text-primary text-xs fw-medium rounded-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm fst-italic mb-0">
                    "{farmer.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
