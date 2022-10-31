import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  // const [cities, setCities] = useState([]);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // if (cities.includes(city)){
      //   alert("Ya existe ciudad")
      // } else {
      //   setCities([...cities,city])
      //   onSearch(city);
      // }
      onSearch(city);
      setCity("");
    }}>
      <input
        type="text"
        placeholder=" 🔎 Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
