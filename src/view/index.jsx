import React from "react";
import SliderPage from "../components/widgets/homeSlider.jsx";
import TrustBadges from "../components/widgets/TrustBadges";
import FeaturedProducts from "../components/widgets/featuredProducts";
import SeasonalCalendar from "../components/widgets/seasonalCalendar.jsx";
import TestimonialsSlider from "../components/widgets/TestimonialsSlider.jsx";

const Home = () => {
  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(
      `Hello Rishit Enterprise! I'm interested in ordering ${product.name}. Can you provide more details on pricing and availability? Thanks!`
    );
    window.open(`https://wa.me/+918238157599?text=${message}`, "_blank");
  };

	return (
		<>
			<SliderPage />
            <TrustBadges />
            <FeaturedProducts onWhatsAppOrder={handleWhatsAppOrder} />
            <SeasonalCalendar />
			<TestimonialsSlider />
		</>
	);
};

export default Home;
