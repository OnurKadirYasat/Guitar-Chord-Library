function ChordCard({ chord, favorites, toggleFavorite }) {
  const strings = ["E", "A", "D", "G", "B", "E"];
  const isFavorite = favorites.includes(chord.id);

  return (
    <div className="chord-card">
      <h2>{chord.name}</h2>

      <button onClick={() => toggleFavorite(chord.id)}>
        {isFavorite ? "★" : "☆"}
      </button>

      <p>{chord.difficulty}</p>

      <div className="fretboard">
        {chord.fingers.split("").map((fret, index) => (
          <div key={index} className="string-column">
            <span className="string-name">{strings[index]}</span>

            <div className="frets">
              <div className={`finger ${fret !== "x" ? "active" : ""}`}>
                {fret}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChordCard;