import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button';
import { IconContext } from 'react-icons/lib';

import './styles.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = useCallback(
    () => {
      setClick(!click)
    },
    [setClick, click],
  )

  const closeMobileMenu = useCallback(
    () => {
      setClick(false)
    },
    [setClick],
  )

  const showButton = useCallback(
    () => {
      if(window.innerWidth <= 960) {
        setButton(false)
      } else {
        setButton(true)
      }
    },
    [setButton],
  )

  useEffect(() => {
    showButton();
  }, [showButton])

  window.addEventListener('resize', showButton);
  
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdFingerprint className="nav-icon" />
            LAVISH
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle='btn--outline'>SIGN UP</Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize='btn--mobile'>SIGN UP</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Navbar
