import React, { useState } from "react";
import "./index.scss";

function GuessPlace() {
  const [place, setPlace] = useState("");
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (place) {
      setPlaces([...places, place]);
      setPlace("");
    }
  };

  const handleRandomPlace = () => {
    if (places.length > 0) {
      const randomIndex = Math.floor(Math.random() * places.length);
      setSelectedPlace(places[randomIndex]);
    }
  };

  return (
    <div className="place-container">
      <form className="place-form" onSubmit={handleSubmit}>
        <h2>Enter a Place</h2>
        <div className="form-group">
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Enter a place name"
            required
          />
        </div>
        <button type="submit" className="add-button">
          Add Place
        </button>
      </form>

      <div className="places-list">
        <h3>Places List</h3>
        <ul>
          {places.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleRandomPlace} className="random-button">
        Pick Random Place
      </button>

      {selectedPlace && (
        <div className="selected-place">
          <h3>Selected Place: {selectedPlace}</h3>
        </div>
      )}
    </div>
  );
}

export default GuessPlace;
