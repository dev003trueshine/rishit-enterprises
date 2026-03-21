import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "components/ui/AppIcon";

import logo from "../../assets/images/logo.jpeg";


const Header = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/", external: true },
    // { label: "Fruits Catalog", href: "/fruits-catalog" },
    { label: "Mango Products", href: "/mango-products" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Rishit Enterprise! I'm interested in your business services. Can you provide more details on bulk orders and pricing? Thanks!"
    );
    window.open(`https://wa.me/+918238157599?text=${message}`, "_blank");
  };

  return (
    <header
      className={`w-full bg-card border-bottom position-sticky top-0 z-9 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="d-flex align-items-center justify-content-between h-20">
          {/* Logo Section */}
          <a
            href="/"
            className="d-flex align-items-center gap-2 hover:opacity-80 transition-organic"
          >
            {/* ...existing code... */}
            <img src={logo} alt="logo" className="img-fluid" style={{ width: "245px" }} />
          </a>

          {/* Desktop Navigation */}
          <nav className="d-none d-xl-flex align-items-center gap-5">
            {navigationItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="header-link fw-medium  transition-organic position-relative group"
                >
                  {item.label}
                  <span className="hover-line"></span>
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="header-link fw-medium  transition-organic position-relative group"
                >
                  {item.label}
                  <span className="hover-line"></span>
                </Link>
              )
            ))}
          </nav>

          {/* Right Section */}
          <div className="d-flex align-items-center gap-3">
            {/* Trust Badge - Desktop Only */}
            <div className="d-none d-xl-flex align-items-center gap-2 px-3 py-2 bg-muted rounded-full">
              <Icon
                name="CheckBadgeIcon"
                size={16}
                className="text-success"
                variant="solid"
              />
              <span className="text-xs fw-medium text-body">
                500+ Happy Families
              </span>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="btn btn-success text-white d-flex align-items-center justify-content-center rounded-lg gap-2 px-4 py-2 animate-whatsapp-pulse"
            >
              <Icon
                name="ChatBubbleLeftRightIcon"
                size={20}
                variant="solid"
              />
              <span className="d-none d-sm-inline">Order Now</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="d-xl-none btn btn-link p-2 text-foreground hover:text-primary transition-organic"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMobileMenuOpen ? "XMarkIcon" : "Bars3Icon"}
                size={24}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="d-xl-none py-4 border-top animate-fade-in">
            <div className="d-flex flex-column gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="fw-medium px-4 py-3 rounded-lg transition-organic"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Trust Badge */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted rounded-lg mt-2">
                <Icon
                  name="CheckBadgeIcon"
                  size={20}
                  className="text-success"
                  variant="solid"
                />
                <span className="text-sm font-medium text-muted-foreground">
                  Trusted by 500+ Families
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
