import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";

const API = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = countries.filter(country => 
      country.name && country.name.toLowerCase().includes(query) // Check if name exists
    );
    setFilteredCountries(filtered);
  };
  

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <SearchBar onSearch={handleSearch} />
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
      }}>
        {filteredCountries.map(({ name, flag, abbr }) => (
          <CountryCard key={abbr} name={name} flag={flag} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
