import React from "react";
import Icon from "components/ui/AppIcon";

export default function FarmingPracticesSection({ className = "" }) {
  // const practices = [
  //   {
  //     id: 1,
  //     icon: "SparklesIcon",
  //     title: "Organic Farming",
  //     description:
  //       "Zero chemical pesticides or synthetic fertilizers. We use natural compost, bio-fertilizers, and traditional pest management techniques.",
  //   },
  //   {
  //     id: 2,
  //     icon: "SunIcon",
  //     title: "Natural Ripening",
  //     description:
  //       "All fruits ripen naturally on the tree. No artificial ripening agents like calcium carbide are ever used in our process.",
  //   },
  //   {
  //     id: 3,
  //     icon: "BeakerIcon",
  //     title: "Soil Health",
  //     description:
  //       "Regular soil testing and crop rotation maintain nutrient balance. We use organic matter to improve soil structure and fertility.",
  //   },
  //   {
  //     id: 4,
  //     icon: "CloudIcon",
  //     title: "Water Conservation",
  //     description:
  //       "Drip irrigation systems minimize water waste. Rainwater harvesting and mulching techniques preserve moisture naturally.",
  //   },
  //   {
  //     id: 5,
  //     icon: "ShieldCheckIcon",
  //     title: "Integrated Pest Management",
  //     description:
  //       "Beneficial insects, neem-based solutions, and physical barriers protect crops without harmful chemicals.",
  //   },
  //   {
  //     id: 6,
  //     icon: "ArrowPathIcon",
  //     title: "Sustainable Practices",
  //     description:
  //       "Composting farm waste, using renewable energy, and maintaining biodiversity for long-term farm health.",
  //   },
  // ];
  const practices = [
    {
      id: 1,
      icon: "SparklesIcon",
      title: "Desi Farming",
      description:
        "No chemical sprays or powders. We use only natural compost and old-school ways to keep our plants healthy.",
    },
    {
      id: 2,
      icon: "SunIcon",
      title: "Patience is Key",
      description:
        "We let our fruits ripen slowly on the tree under the sun. We never use chemicals or gas to rush them.",
    },
    {
      id: 3,
      icon: "HeartIcon", // Changed from BeakerIcon
      title: "Healthy Soil",
      description:
        "We keep our land fertile by adding natural cow dung and leaf mulch. Good soil makes for tasty, healthy food.",
    },
    {
      id: 4,
      icon: "CloudIcon", // Using simple words for water
      title: "Saving Every Drop",
      description:
        "We use smart watering and save rainwater to make sure we don't waste what nature gives us.",
    },
    {
      id: 5,
      icon: "ShieldCheckIcon",
      title: "Natural Protection",
      description:
        "Instead of poisons, we use neem water and friendly insects to keep the bad bugs away from our crops.",
    },
    {
      id: 6,
      icon: "ArrowPathIcon",
      title: "Giving Back",
      description:
        "Everything from the farm goes back into the farm. We turn waste into fertilizer to keep the land rich for years.",
    },
  ];
  return (
    <section className={`py-24 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="fw-bold text-4xl mb-3">
            Our Farming Practices
          </h2>
          <p className="text-lg max-w-2xl mx-auto my-0">
            Traditional wisdom meets modern sustainability for the healthiest fruits
          </p>
        </div>

        {/* Practice Cards */}
        <div className="d-grid md-grid-cols-2 lg-grid-cols-3 gap-4 gap-lg-5 mb-16">
          {practices.map((practice) => (
            <div
              key={practice.id}
              className="bg-card p-4 rounded-lg shadow-organic hshadow-card-md-hover"
            >
              <div className="w-12 h-12 bg-primary-subtle rounded-lg d-inline-flex align-items-center justify-content-center mb-3">
                <Icon name={practice.icon} size={24} className="text-primary" />
              </div>
              <h3 className="fw-semibold text-xl mb-75">
                {practice.title}
              </h3>
              <p className="m-0 leading-relaxed">
                {practice.description}
              </p>
            </div>
          ))}
        </div>

        {/* Behind the Scenes */}
        {/* <div className="bg-body rounded-lg p-12">
          <h3 className="fw-bold text-3xl mb-5 text-center">
            Behind the Scenes: From Tree to Table
          </h3>

          <div className="d-grid md-grid-cols-2 lg-grid-cols-4 gap-4">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="position-relative h-48 rounded-lg overflow-hidden mb-3 shadow-organic">
                  <AppImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />

                  <div className="position-absolute top-4 left-4 w-10 h-10 bg-primary rounded-full d-flex align-items-center justify-content-center">
                    <span className="fw-bold text-white text-sm">
                      {item.step}
                    </span>
                  </div>
                </div>
                <h4 className="fw-semibold text-lg">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
