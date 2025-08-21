import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onNavClick }) {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    console.log(`Navigating to ${sectionId}`);
    
    const element = document.getElementById(sectionId);
    console.log('Found element:', element);
    
    if (element) {
      console.log('Scrolling to element...');
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
    
    if (onNavClick) {
      onNavClick();
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work" onClick={(e) => handleLinkClick(e, 'work')}>
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-black/80 border-b border-gold/20">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-gold hover:text-gold-light"
          >
            Alekhya
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-gold hover:text-gold-light focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden bg-black/95 border-t border-gold/20"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onNavClick={handleNavClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
