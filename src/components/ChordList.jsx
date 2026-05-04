import ChordCard from "./ChordCard";

function ChordList ({ chords, favorites, toggleFavorite }) {
  if (chords.length === 0) {
    return <p>No chords match your search.</p>
  }

  return (
    <div className="chord-list">
      {chords.map((chord) => (
        <ChordCard 
        key={chord.id} 
        chord={chord}
        favorites={favorites}
        toggleFavorite={toggleFavorite} 
        />
      ))}
    </div>
  )
}

export default ChordList