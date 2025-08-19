import "./navbar.css";

export  function Navbar() {
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <nav className="header">
      <div className="logo">
        <h4>Rise Of Coding</h4>
        <small>NewsApp</small>
      </div>

      <ul className="category-list">
        {categories.map((categoryName) => (
          <li key={categoryName} className="category-item">
            {categoryName}
          </li>
        ))}
      </ul>

      <div className="search-bar">
        <form>
          <input type="text" name="search" placeholder="search news..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

