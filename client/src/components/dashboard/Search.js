import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [locationQuery, setLocationQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [sortOption, setSortOption] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchSearchResults();
    }
  };

  const fetchSearchResults = async (page, sort) => {
    try {
      const response = await axios.get("http://localhost:5000/api/place/textsearch/json", {
        params: {
          query: locationQuery,
          radius: 10000,
          type: "restaurant",
          zipcode: zipcode,
          page: page,
          sort: sort,
        },
      });

      const contentType = response.headers["content-type"];
      if (contentType && contentType.includes("application/json")) {
        setSearchResults(response.data.results);
      } else {
        throw new Error("Invalid response format. Expected JSON.");
      }
    } catch (error) {
      console.error("Error fetching search results:", error.response);
    }
  };

//   const fetchSearchResults = async (page, sort) => {
//     try {
//       // Convert zip code to coordinates using the Geocoding API
//       const geocodeResponse = await axios.get(
//   `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${process.env.REACT_APP_API_KEY}`
// );

  
//       const { lat, lng } = geocodeResponse.data.results[0].geometry.location;
  
//       const response = await axios.get(
//         "http://localhost:5000/api/place/textsearch/json",
//         {
//           params: {
//             query: locationQuery,
//             radius: 10000,
//             type: "restaurant",
//             location: `${lat},${lng}`,
//             page: page,
//             sort: sort,
//           },
//         }
//       );
  
//       const contentType = response.headers["content-type"];
//       if (contentType && contentType.includes("application/json")) {
//         setSearchResults(response.data.results);
//       } else {
//         throw new Error("Invalid response format. Expected JSON.");
//       }
//     } catch (error) {
//       console.error("Error fetching search results:", error.response);
//     }
//   };
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchSearchResults(page, sortOption); // Fetch results with the new page
  };

  const handleSortChange = (sort) => {
    setSortOption(sort);
    fetchSearchResults(currentPage, sort); // Fetch results with the new sort option
  };


  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for nearby places"
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <input
          type="text"
          placeholder="Enter ZIP code"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button onClick={() => fetchSearchResults(currentPage, sortOption)}>Search</button>
      </div>
      <div className="card-container">
        {searchResults.map((result) => (
          <div className="card" key={result.place_id}>
            <h3>{result.name}</h3>
            <p>{result.address}</p>
            <p>{result.phone}</p>
            <p>{result.rating}</p>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        {/* Render pagination */}
        {Array.from({ length: 7 }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <div className="sort-container">
        {/* Render sort options */}
        <select value={sortOption} onChange={(e) => handleSortChange(e.target.value)}>
          <option value="">Sort by</option>
          <option value="distance">Distance</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
