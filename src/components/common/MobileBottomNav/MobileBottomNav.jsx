import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../ui/AppIcon';

const MobileBottomNav = () => {
  const navItems = [
    { label: 'Home', path: '/', icon: 'HomeIcon' },
    { label: 'Products', path: '/mango-products', icon: 'ShoppingBagIcon' },
    { label: 'Gallery', path: '/gallery', icon: 'PhotoIcon' },
    { label: 'About', path: '/about', icon: 'InformationCircleIcon' },
    { label: 'Contact', path: '/contact', icon: 'PhoneIcon' },
  ];

  return (
    <nav className="mobile-bottom-nav d-xl-none">
      <div className="nav-container">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <div className="icon-wrapper">
              <Icon name={item.icon} size={22} variant="solid" />
            </div>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
