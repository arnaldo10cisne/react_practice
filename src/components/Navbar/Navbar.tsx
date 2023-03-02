import React from 'react';
import './Navbar.scss';
import NavbarButton from './NavbarButton';

interface NavbarProps {
  selectedButton: string;
}

const navbarItems = [
  {
    label: 'Home',
    to: '/home',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Portfolio',
    to: '/portfolio',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

const Navbar = ({ selectedButton }: NavbarProps) => {
  return (
    <div className="navbar_container">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="menu">
        {navbarItems.map((item) => (
          <NavbarButton label={item.label} route={item.to} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
