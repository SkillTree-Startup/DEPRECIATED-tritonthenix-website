import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import './Header.css';

function Header() {
  const [position, setPosition] = useState('absolute');
  const [navbarTop, setNavbarTop] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [changedPosition, setChangedPosition] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    const supportPageOffset = window.pageYOffset !== undefined;

    function handleScroll() {
      const navbar = navbarRef.current;

      if (!navbar) return;

      const currentScrollPosition = supportPageOffset
        ? window.pageYOffset
        : document.documentElement.scrollTop;

      if (currentScrollPosition <= 0) {
        if (position !== 'absolute') {
          setChangedPosition(true);
        } else {
          setChangedPosition(false);
        }
        setPosition('absolute');
        setNavbarTop(0);
        setLastScrollPosition(0);
      } else {
        if (currentScrollPosition > lastScrollPosition) {
          if (position !== 'absolute') {
            setChangedPosition(true);
          } else {
            setChangedPosition(false);
          }
          setPosition('absolute');
          let { top, height } = navbar.getBoundingClientRect();
          if (top < -height) {
            top = -height;
          }
          setNavbarTop(currentScrollPosition + top);
        } else if (currentScrollPosition < lastScrollPosition) {
          const { top } = navbar.getBoundingClientRect();
          if (top >= 0) {
            setNavbarTop(0);
            if (position !== 'fixed') {
              setChangedPosition(true);
            } else {
              setChangedPosition(false);
            }
            setPosition('fixed');
          }
        }
        setLastScrollPosition(currentScrollPosition);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition, position]);

  return (
    <header className="Header">
      <Navbar ref={navbarRef} position={position} navbarTop={navbarTop} changedPosition={changedPosition} />
    </header>
  );
}

export default Header;
