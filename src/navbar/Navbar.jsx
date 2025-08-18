import { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Science",
    "Sports",
    "Technology"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand">
          <h1 className="logo">Muntaha's News</h1>
          <p className="tagline">Stay Informed, Stay Ahead</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {categories.map((category) => (
              <li key={category} className="nav-item">
                <a href="#" className="nav-link">{category}</a>
              </li>
            ))}
          </ul>
          
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search news..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </form>
        </nav>

        {/* Mobile Navigation */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <form onSubmit={handleSearch} className="mobile-search-form">
            <input
              type="text"
              placeholder="Search news..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </form>

          <ul className="mobile-nav-list">
            {categories.map((category) => (
              <li key={category} className="mobile-nav-item">
                <a href="#" className="mobile-nav-link">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

// Search icon component
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
  </svg>
);