import React from "react";
import ContactHero from "../components/widgets/ContactHero.jsx";
import ContactMethods from "../components/widgets/ContactMethods.jsx";
import BusinessHours from "../components/widgets/BusinessHours.jsx";
import LocationInfo from "../components/widgets/locationInfo.jsx";
// import FAQSection from "../components/widgets/faq.jsx";
// import ContactForm from "../components/widgets/ContactForm.jsx";
const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Rishit Enterprise! I'm interested in your business services. Can you provide more details on bulk orders and pricing? Thanks!"
    );
    window.open(`https://wa.me/918238157599?text=${message}`, "_blank");
  };

  const onPhoneClick = () => {
    window.location.href = "tel:+918238157599";
  };

  const onEmailClick = () => {
    window.location.href = "mailto:rishitenterprise.official@gmail.com";
  };

  const onInstagramClick = () => {
    window.open("https://www.instagram.com/_rishit_enterprise_?igsh=MTAzNnZ6NTNxOGd0cA%3D%3D&utm_source=qr", "_blank");
  };

  const onFacebookClick = () => {
    window.open("https://www.facebook.com/share/1CLUVReqtv/", "_blank");
  };

	return (
		<>
			<ContactHero />
			<ContactMethods
				handleWhatsAppClick={handleWhatsAppClick}
				onPhoneClick={onPhoneClick}
				onEmailClick={onEmailClick}
				onInstagramClick={onInstagramClick}
				onFacebookClick={onFacebookClick}
			/>
			<BusinessHours />
			<LocationInfo />
			{/* <FAQSection /> */}
			{/* <ContactForm /> */}
		</>
	);
};

export default Contact;
