import React from "react";
import mango from "../assets/images/banner-logo.png";
import Icon from "components/ui/AppIcon";

import Timeline from "../components/widgets/timeline.jsx";
import FarmerProfilesSection from "../components/widgets/farmerProfilesSection";
import FarmingPracticesSection from "../components/widgets/farmingPracticesSection.jsx";
import CertificationsSection from "../components/widgets/certificationsSection.jsx";
import CTASection from "../components/widgets/CTASection";
import TestimonialsSlider from "../components/widgets/TestimonialsSlider.jsx";

const About = () => {
    return (
        <>
            {/* hero section */}
            <section className="position-relative">
                <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_117f77560-1765968270309.png"
                    alt="Aerial view of lush green mango orchard with rows of healthy fruit trees under clear blue sky"
                    className="w-100 h-600px object-cover"
                    loading="eager"
                />

                <div className="position-absolute top-0 left-0 w-100 h-100 bg-black bg-opacity-50 d-flex align-items-center justify-content-center">
                    <div className="position-relative container mx-auto px-4 h-full d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 className="fw-bold text-6xl text-white mb-4">Our Farm Story</h1>
                        <p className="text-xl text-white max-w-2xl">Three generations of farming excellence, bringing you naturally ripened fruits straight from our orchards to your home.</p>
                    </div>
                </div>

            </section>
            {/* about content section */}
            <section className="py-24 bg-gray-900 ">
                <div className="container mx-auto px-4">
                    <div className="d-grid lg-grid-cols-2 gap-12 align-items-center md-gap-16 gap-3 mb-16">
                        <div>
                            <h2 className="fw-bold text-4xl mb-4">From Our Orchards to Your Table</h2>

                            <div className="d-flex flex-column gap-3">
                                <p className="text-lg leading-relaxed m-0">
                                    <strong>Rishit Fruits</strong> was founded with a simple yet powerful mission:
                                    to bridge the gap between our sun-ripened orchards and your home. Our journey
                                    began in 2024, driven by a passion for delivering fruits in their purest form—naturally
                                    ripened, chemical-free, and bursting with authentic flavor. What started as a
                                    local farm initiative quickly grew as we earned the trust of over 200 families
                                    who shared our vision for healthier, farm-fresh produce.
                                </p>

                                <p className="text-lg leading-relaxed m-0">
                                    As our community expanded to over 500 families by 2025, so did our harvest.
                                    While our premium Mangoes remain a seasonal favorite, we introduced the
                                    celebrated Navsari Chikoo to our collection, ensuring that our customers
                                    receive the very best of South Gujarat's bounty. We take immense pride in
                                    our sustainable farming approach, where every fruit is handpicked at the
                                    perfect moment to ensure peak sweetness and nutrition.
                                </p>

                                <p className="text-lg leading-relaxed m-0">
                                    Today, in 2026, we are entering an exciting new era with the launch of our
                                    <strong> 100% Natural Fruit Pulp</strong>. By preserving the essence of our
                                    Mangoes and Chikoos without any artificial additives, we are making farm-fresh
                                    goodness available year-round. As we strive to serve 1,000+ families this year,
                                    our commitment remains unchanged: transparency, quality, and a personal
                                    connection that makes you a part of the Rishit Fruits family.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <img src={mango} alt="About Us Image" className="w-100 rounded-xl shadow-organic shadow-lg object-cover h-96"></img>
                        </div>
                    </div>
                    {/* timeline Section */}
                    <Timeline />
                </div>
            </section>
            <FarmerProfilesSection />
            <FarmingPracticesSection />
            {/* Commitment Statement */}
            <div className="">
                <div className="container mx-auto px-4">
                    <div className="bg-primary rounded-lg p-12 text-center">
                        <Icon
                            name="GlobeAltIcon"
                            size={48}
                            className="text-white mx-auto mb-4"
                            variant="solid"
                        />
                        <h3 className="fw-bold text-3xl text-white mb-3">
                            Our Environmental Commitment
                        </h3>
                        <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed my-0">
                            We believe that sustainable farming is not just good for the environment—it produces better, healthier fruits. Every decision we make considers the long-term health of our soil, water, and ecosystem. Our goal is to leave the land better than we found it for the next generation.
                        </p>
                    </div>
                </div>
            </div>
            <CertificationsSection />
            <CTASection />
            <TestimonialsSlider />

        </>
    );
};

export default About;
