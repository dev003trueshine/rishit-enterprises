import React from "react";
import Icon from "components/ui/AppIcon"; // adjust path if needed

export default function ContactMethods({
  handleWhatsAppClick,
  onPhoneClick,
  onEmailClick,
  onInstagramClick,
  onFacebookClick,
}) {
  const contactMethods = [
    {
      id: "whatsapp",
      icon: "ChatBubbleLeftRightIcon",
      title: "WhatsApp & Call Vikas Patel",
      description:
        "Instant messaging for quick orders and queries. Our most popular contact method!",
      value: "+91 8238157599",
      action: "whatsapp",
      actionLabel: "Start Chat",
      bgColor: "bg-secondary-subtle",
      iconColor: "text-secondary",
    },
    {
      id: "phone1",
      icon: "PhoneIcon",
      title: "Phone Call Tejas Patel",
      description:
        "Speak directly with our team for detailed discussions and bulk orders.",
      value: "+91 95582 87453",
      action: "phone",
      actionLabel: "Call Now",
      bgColor: "bg-primary-subtle",
      iconColor: "text-primary",
    },
    {
      id: "phone2",
      icon: "PhoneIcon",
      title: "Phone Call Chirag Patel",
      description:
        "Speak directly with our team for detailed discussions and bulk orders.",
      value: "+91 8238939658",
      action: "phone",
      actionLabel: "Call Now",
      bgColor: "bg-primary-subtle",
      iconColor: "text-primary",
    },
    {
      id: "email",
      icon: "EnvelopeIcon",
      title: "Email Support",
      description:
        "Send detailed inquiries and receive comprehensive responses within 24 hours.",
      value: "rishitenterprise.official@gmail.com",
      action: "email",
      actionLabel: "Send Email",
      bgColor: "bg-secondary-subtle",
      iconColor: "text-secondary",
    },
    {
      id: "instagram",
      icon: "instagramIcon",
      title: "Follow on Instagram",
      description:
        "Stay updated with our latest farm activities, fresh arrivals, and behind-the-scenes content.",
      value: "@_rishit_enterprise_",
      action: "instagram",
      actionLabel: "Follow Us",
      bgColor: "bg-secondary-subtle",
      iconColor: "text-secondary",
    },
    {
      id: "facebook",
      icon: "facebookIcon",
      title: "Follow on Facebook",
      description:
        "Join our Facebook community for updates, customer stories, and exclusive offers.",
      value: "Rishit Enterprise",
      action: "facebook",
      actionLabel: "Follow Us",
      bgColor: "bg-secondary-subtle",
      iconColor: "text-secondary",
    }
  ];

  const handleAction = (action) => {
    if (action === "whatsapp") handleWhatsAppClick();
    else if (action === "phone") onPhoneClick();
    else if (action === "email") onEmailClick();
    else if (action === "instagram") onInstagramClick();
    else if (action === "facebook") onFacebookClick();
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="fw-bold text-4xl mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-lg my-0 max-w-2xl mx-auto">
            We offer multiple ways to reach us. Select the method that works best
            for you!
          </p>
        </div>

        <div className="d-grid md-grid-cols-2 lg-grid-cols-3 gap-4 gap-lg-5 max-w-6xl mx-auto">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-card border rounded-lg p-8 shadow-card-lg-hover"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${method.bgColor} rounded-full d-flex align-items-center justify-content-center mb-4 hover-scale-105`}
              >
                <Icon
                  name={method.icon}
                  size={32}
                  className={method.iconColor}
                  variant="solid"
                />
              </div>

              {/* Content */}
              <h3 className="fw-bold text-xl mb-75">{method.title}</h3>
              <p className="text-sm mb-3">
                {method.description}
              </p>

              {/* Contact Value */}
              <div className="p-3 bg-body rounded-lg mb-4">
                <span className="fw-medium text-sm" style={{ lineBreak: "anywhere" }}>
                  {method.value}
                </span>
              </div>

              {/* Button */}
              <button
                onClick={() => handleAction(method.action)}
                className="w-full btn d-flex align-items-center justify-content-center gap-2 px-6 py-3 btn-primary text-white">
                <span>{method.actionLabel}</span>
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
