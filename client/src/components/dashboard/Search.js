import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [locationQuery, setLocationQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [sortOption, setSortOption] = useState("");

  // working fine but still giving HTML response
//   const handleSearch = async () => {
//     try {
//     const response = await fetch(
//       `/place/textsearch/json?key=${process.env.REACT_APP_API_KEY}&query=${locationQuery}&radius=10000&type=restaurant`
//     );    
//     if (response.ok) {
//       // const contentType = response.headers.get('content-type');
// // console.log('Content-Type:', contentType);
//       const data = await response.json();
//       setSearchResults(data.results);
//     } else {
//       throw new Error('Error: Unexpected response from API');
//     }
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

// working BUT giving CORS error
// const handleSearch = async () => {
//   try {
//     const response = await axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json", {
//       params: {
//         key: process.env.REACT_APP_API_KEY,
//         query: locationQuery,
//         radius: 10000,
//         type: "restaurant"
//       }
//     });
//     console.log("Response:", response); // Log the response object to see its details

//       const contentType = response.headers["content-type"];
//       if (contentType && contentType.includes("application/json")) {
//         setSearchResults(response.data.results);
//       } else {
//         throw new Error("Invalid response format. Expected JSON.");
//       }
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

// giving 404 Error 
// const handleSearch = async () => {
//   try {
//     const response = await axios.get("/place/textsearch/json", {
//       params: {
//         key: process.env.REACT_APP_API_KEY,
//         query: locationQuery,
//         radius: 10000,
//         type: "restaurant"
//       },
//       validateStatus: function (status) {
//         return status < 500; // Reject only if the status code is greater than or equal to 500
//       },
//     });

//     console.log("Response:", response);

//     const contentType = response.headers["content-type"];
//     console.log('Content-Type:', contentType);
//     if (contentType && contentType.includes("application/json")) {
//       setSearchResults(response.data.results);
//     } else {
//       throw new Error("Invalid response format. Expected JSON.");
//     }
//   } catch (error) {
//     console.error("Error fetching search results:", error.response);
//   }
// };





  //it helps me to see that Content-Type: text/html; charset=utf-8 so not JSON
//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `/place/textsearch/json?key=${process.env.REACT_APP_API_KEY}&query=${locationQuery}&radius=10000&type=restaurant`
//       );
  
//       if (response.ok) {
//         const contentType = response.headers.get('content-type');
// console.log('Content-Type:', contentType);
//         const data = await response.clone().text();
//         console.log(data); // Log the response to see its content
  
//         // Update the response parsing logic based on the actual response structure
//         const jsonData = JSON.parse(data);
//         setSearchResults(jsonData.results);
//       } else {
//         throw new Error('Error: Unexpected response from API');
//       }
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };
  
const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    fetchSearchResults();
  }
};

const fetchSearchResults = async (page,sort) => {
  try {
    const response = await axios.get("http://localhost:5000/api/place/textsearch/json", {
      params: {
        query: locationQuery,
        radius: 100,
        type: "restaurant",
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
