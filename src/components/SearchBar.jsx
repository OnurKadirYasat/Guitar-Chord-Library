function SearchBar({ searchTerm, setSearchTerm, filter, setFilter, showFavoritesOnly, setShowFavoritesOnly}) {
  return (
    <div className="search-bar">
      <input
      type="text"
      placeholder="Search chords..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button 
      onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}>{showFavoritesOnly ? "Show All" : "Show Favorites ★"}
      </button>

      <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      > 
      <option value="All">All</option>
      <option value="Beginner">Beginner</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Advanced">Advanced</option>
      </select>
    </div>
    
  )
  
}

export default SearchBar