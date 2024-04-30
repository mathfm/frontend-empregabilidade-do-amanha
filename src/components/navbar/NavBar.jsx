import React, { useState, useEffect } from 'react';
import './NavBar.css';

function NavBar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100 && isNavbarVisible) {
        setIsNavbarVisible(false);
      } else if (scrollPosition <= 100 && !isNavbarVisible) {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarVisible]);

  const handleMouseEnter = () => {
    setIsNavbarVisible(true);
  };

  const handleMouseLeave = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setIsNavbarVisible(false);
    }
  };

  return (
    <nav className={isNavbarVisible ? "nav-bar" : "nav-bar hidden"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="logo">
        <img src="src\assets\logo2.svg" alt="Logo" />
      </div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#">Cadastre-se</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default NavBar;
