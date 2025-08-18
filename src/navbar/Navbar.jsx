import './navbar.css'
import { useState } from 'react';
export function Navbar() {
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Science",
    "Sports",
    "Technology"
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <h4 className="logo-text">
              Muntaha's News
            </h4>
            <small className="logo-subtext">
              Stay Updated
            </small>
          </div>
          
          {/* Hamburger menu for mobile */}
          <button 
            className="hamburger-menu" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          <ul className={`category-list ${isMenuOpen ? 'active' : ''}`}>
            {categories.map((category) => (
              <li key={category} className="category-item">
                <a href="#" className="category-link">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}