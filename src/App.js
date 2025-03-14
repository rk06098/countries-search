import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://countries-search-data-prod-812920491762.asia-south1.run.app/countries'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error('Error fetching countries:', err);
        setError(err.message);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {error && <p className="error-message">Error loading data: {error}</p>}

      <div className="countries-container">
        {filteredCountries.map((country, index) => (
          <div key={index} className="countryCard">
            <img
              src={country.png}
              alt={`Flag of ${country.common}`}
              className="flag-image"
            />
            <h3>{country.common}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
