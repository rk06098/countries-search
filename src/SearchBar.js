import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={query}
      onChange={handleChange}
      style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
