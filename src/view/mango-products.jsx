import React from "react";

import MangoHero from "../components/widgets/MangoHero";
import MangoVarieties from "../components/widgets/MangoVarieties";
import MangoPulpProducts from "../components/widgets/MangoPulpProducts";
import SeasonalAvailability from "../components/widgets/SeasonalAvailability";
import RipenessGuide from "../components/widgets/RipenessGuide";
// import BulkOrderSection from "../components/widgets/BulkOrderSection";
import CustomerTestimonials from "../components/widgets/CustomerTestimonials";
const MangoProducts = () => {
  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(
      `Hello Rishit Enterprise! I'm interested in ordering ${product.name}. Can you provide details on pricing and availability? Thanks!`
    );
    window.open(`https://wa.me/918238157599?text=${message}`, "_blank");
  };

	return (
		<>
			<MangoHero />
			<MangoVarieties onOrderClick={handleWhatsAppOrder} />
			<MangoPulpProducts onOrderClick={handleWhatsAppOrder} />
			<SeasonalAvailability />
			<RipenessGuide />
			{/* <BulkOrderSection /> */}
			<CustomerTestimonials />
		</>
	);
};

export default MangoProducts;
