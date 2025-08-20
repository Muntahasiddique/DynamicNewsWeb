import { useNewsContext } from "../context/Context";
import { useTheme } from "../context/ThemeContext";
import "./navbar.css";

export function Navbar() {
  const { category, changeCategory, setQuery } = useNewsContext();
  const { isDark, toggleTheme } = useTheme();
  
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    setQuery(query);
  };

  return (
    <nav className="header">
      <div className="logo">
        <h4>Muntaha's news</h4>
        <small>NewsApp</small>
      </div>

      <ul className="category-list">
        {categories.map((categoryName) => (
          <li 
            key={categoryName} 
            className={`category-item ${category === categoryName ? "active" : ""}`} 
            onClick={() => changeCategory(categoryName)}
          >
            {categoryName}
          </li>
        ))}
      </ul>

      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="search news..." />
          <button type="submit">Search</button>
        </form>
        
        {/* Theme Toggle Switch */}
        <label className="theme-toggle">
          <input 
            type="checkbox" 
            checked={isDark} 
            onChange={toggleTheme} 
          />
          <span className="toggle-slider"></span>
          <div className="toggle-icons">
            {isDark ? '🌙' : '☀️'}
          </div>
        </label>
      </div>
    </nav>
  );
}