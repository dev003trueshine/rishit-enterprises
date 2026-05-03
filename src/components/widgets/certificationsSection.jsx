import React from "react";
import Icon from "components/ui/AppIcon";
import AppImage from "components/ui/AppImage";
import certificateImg from "../../assets/images/fassi.png";

export default function CertificationsSection({ className = "" }) {
  const fssaiDetails = [
    { label: "Registration ID", value: "20726015000344", icon: "IdentificationIcon" },
    { label: "Valid Upto", value: "09-04-2027", icon: "CalendarIcon" },
    { label: "Registered Name", value: "Vikas Dahyabhai Patel\nC/O Rishit Enterprise", icon: "UserIcon" },
    { label: "Address", value: "33-KH Majigam Dera Faliya, Ta. Chikhli, Dist. Navsari, Gujarat – 396521", icon: "MapPinIcon" },
    { label: "Kind of Business", value: "Retailer, Wholesaler, Hawker (Itinerant / Mobile food vendor)", icon: "BriefcaseIcon" },
    { label: "Issuing Authority", value: "Navsari", icon: "BuildingOfficeIcon" },
    { label: "Issued On", value: "10-04-2026", icon: "DocumentCheckIcon" },
  ];

  const qualityPromises = [
    {
      icon: "ClockIcon",
      title: "Farm to Door",
      description: "We pick it from our trees and get it to you within 24-48 hours",
    },
    {
      icon: "HandThumbUpIcon",
      title: "Hand-Picked",
      description: "We check every single fruit by hand before it leaves our farm",
    },
    {
      icon: "ArrowPathIcon",
      title: "Our Promise",
      description: "Not happy with the quality? We'll make it right, no questions asked",
    },
    {
      icon: "TruckIcon",
      title: "Careful Delivery",
      description: "Packed with care and delivered fast to keep that farm-fresh taste",
    },
  ];

  return (
    <section className={`py-24 bg-body ${className}`}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-success-subtle rounded-pill mb-3">
            <Icon name="ShieldCheckIcon" size={20} className="text-success" variant="solid" />
            <span className="h6 fw-semibold text-sm text-success m-0 text-uppercase tracking-wide">
              Certified & Trusted
            </span>
          </div>
          <h2 className="fw-bold text-4xl mb-3">
            Certifications & Quality Promise
          </h2>
          <p className="text-lg max-w-2xl mx-auto m-0">
            Recognized excellence in food safety standards by the Government of India
          </p>
        </div>

        {/* FSSAI Certificate Card */}
        <div className="row gy-4 mb-5">
          <div className="col-lg-10 col-12 mx-auto">
            <div className="bg-card border rounded-2xl overflow-hidden shadow-organic">

              {/* Card Header */}
              <div className="d-flex align-items-center gap-3 px-4 py-3 bg-success-subtle border-bottom">
                <Icon name="ShieldCheckIcon" size={24} className="text-success" variant="solid" />
                <div>
                  <h5 className="fw-bold m-0 text-success">FSSAI Registration</h5>
                  <p className="text-xs m-0 text-success">Food Safety and Standards Authority of India</p>
                </div>
                <span className="ms-auto px-3 py-1 bg-success text-white rounded-pill text-xs fw-bold">
                  Active
                </span>
              </div>

              {/* Card Body: Image + Details */}
              <div className="row g-0">

                {/* Certificate Image */}
                <div className="col-lg-5 col-12">
                  <div
                    className="d-flex align-items-center justify-content-center p-4 h-100"
                    style={{ minHeight: "320px", background: "var(--bs-body-bg)" }}
                  >
                    <AppImage
                      src={certificateImg}
                      alt="FSSAI Registration ID Card for Rishit Enterprise"
                      className="w-100 rounded-xl shadow-sm"
                      style={{ maxWidth: "380px", objectFit: "contain" }}
                    />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="col-lg-7 col-12">
                  <div className="p-4">
                    <h6 className="fw-bold text-lg mb-4">Registration Details</h6>
                    <div className="d-flex flex-column gap-3">
                      {fssaiDetails.map((item, idx) => (
                        <div
                          key={idx}
                          className="d-flex align-items-start gap-3 p-3 bg-body rounded-lg"
                        >
                          <div
                            className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                            style={{
                              width: 36,
                              height: 36,
                              background: "var(--bs-success-bg-subtle)",
                            }}
                          >
                            <Icon name={item.icon} size={16} className="text-success" variant="solid" />
                          </div>
                          <div className="flex-fill min-w-0">
                            <p className="text-xs text-muted m-0 mb-1 text-uppercase fw-semibold">
                              {item.label}
                            </p>
                            <p
                              className="fw-semibold text-sm m-0"
                              style={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
                            >
                              {item.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Quality Promises */}
        <div className="bg-primary-05 rounded-lg p-4 p-lg-5">
          <h3 className="fw-bold text-3xl mb-5 text-center">
            Our Quality Promise to You
          </h3>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {qualityPromises.map((promise, index) => (
              <div key={index} className="col text-center">
                <div className="w-16 h-16 bg-primary rounded-full d-flex align-items-center justify-content-center mx-auto mb-3 shadow-organic">
                  <Icon
                    name={promise.icon}
                    size={28}
                    className="text-white"
                    variant="solid"
                  />
                </div>
                <h4 className="fw-semibold text-lg mb-2">{promise.title}</h4>
                <p className="text-sm text-muted-foreground m-0">{promise.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="max-w-3xl mx-auto my-0">
              Every fruit that leaves our farm carries our family's reputation.
              We stand behind our quality with a 100% satisfaction guarantee. If
              you're not completely happy with your order, we'll make it right—
              no questions asked.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
