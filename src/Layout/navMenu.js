import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { slideMenu, staggerLinks, dropdownItem } from './animations';
import Logo from '../Layout/logo';
import '../css/nav-icon.css';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // For dropdowns
  const menuRef = useRef(); // To reference the side menu

  // Toggle the side menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dropdowns
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Add the logo */}
      <Logo />

      {/* Chevron to toggle the menu */}
      <FontAwesomeIcon
        icon={faChevronRight}
        className="chevron-icon"
        onClick={toggleMenu}
      />

      {/* Animate the slide-in menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="side-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideMenu}
            ref={menuRef} // Attach ref to the menu for click detection
          >
            <div className="menu-grid">
              <motion.ul className="nav-links" variants={staggerLinks}>
                <motion.li variants={dropdownItem}>
                  <Link to="/home" onClick={toggleMenu} className="link">Home</Link>
                </motion.li>

                {/* Mens dropdown */}
                <motion.li variants={dropdownItem} className="dropdown">
                  <span className="link" onClick={() => toggleDropdown('mens')}>Mens</span>
                  {openDropdown === 'mens' && (
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={staggerLinks}
                      className="dropdown-items"
                    >
                      <motion.li variants={dropdownItem}>
                        <Link to="/classic" onClick={toggleMenu} className="link">Classic</Link>
                      </motion.li>
                      <motion.li variants={dropdownItem}>
                        <Link to="/modern" onClick={toggleMenu} className="link">Modern</Link>
                      </motion.li>
                    </motion.ul>
                  )}
                </motion.li>

                {/* Womens dropdown */}
                <motion.li variants={dropdownItem} className="dropdown">
                  <span className="link" onClick={() => toggleDropdown('womens')}>Women</span>
                  {openDropdown === 'womens' && (
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={staggerLinks}
                      className="dropdown-items"
                    >
                      <motion.li variants={dropdownItem}>
                        <Link to="/her-watch" onClick={toggleMenu} className="link">Her Watch</Link>
                      </motion.li>
                      <motion.li variants={dropdownItem}>
                        <Link to="/straps" onClick={toggleMenu} className="link">Straps</Link>
                      </motion.li>
                    </motion.ul>
                  )}
                </motion.li>

                <motion.li variants={dropdownItem}>
                  <Link to="/checkout" onClick={toggleMenu} className="link">CheckOut</Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavMenu;
