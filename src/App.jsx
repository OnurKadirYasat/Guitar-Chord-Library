import SearchBar from './components/SearchBar'
import './App.css'
import { chords } from "./data/chords"
import ChordList from './components/ChordList'
import { useState, useEffect } from 'react'


function App() {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("All")
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const filteredChords = chords.filter((chord) => {
    const matchesSearch = chord.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase())

    const matchesFilter = 
    filter === "All" || chord.difficulty === filter

    const matchesFavorites = 
    !showFavoritesOnly || favorites.includes(chord.id)
    return matchesSearch && matchesFilter && matchesFavorites
  })

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }
  
  return ( 
    <div className='app'>
      <h1>🎸 Guitar Chord Library</h1>

      <SearchBar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      filter={filter}
      setFilter={setFilter}
      showFavoritesOnly={showFavoritesOnly}
      setShowFavoritesOnly={setShowFavoritesOnly}
      />

      <ChordList chords={filteredChords}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      />
    </div>
    
      
  )
}

export default App
