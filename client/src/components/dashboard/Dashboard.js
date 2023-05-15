import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";

function Dashboard({ logoutUser, auth }) {
  const { user } = auth;
  const [searchTerm, setSearchTerm] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onLogoutClick = e => {
    e.preventDefault();
    logoutUser();
  };

  const handleSearch = async () => {
    const response = await fetch(
      `https://meteor-places.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&location=${zipcode}&radius=10000&type=restaurant`
    );
    const data = await response.json();
    setSearchResults(data.results);
  };


  return (
    <div>
      <Navbar logoutUser={logoutUser} />
    <div className="container valign-wrapper">
      <div className="row">
        <header className="dashboard-header">
          <div className="dashboard-header-text">
            <h1>All you need is here & classified</h1>
            <h2>Restaurants, activities and many more</h2>
          </div>
        </header>

        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b> {user.name.split(" ")[0]}
          </h4>
          <div className="search-container row">
            <div className="col s6">
              <input
                type="text"
                placeholder="Search for restaurants, bookstores, movie theaters..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col s6">
              <input
                type="text"
                placeholder="Enter zip code"
                value={zipcode}
                onChange={e => setZipcode(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn btn-primary waves-effect waves-light hoverable blue accent-3"
            onClick={handleSearch}
          >
            Search
          </button>
          <ul className="search-results">
            {searchResults.map(result => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
    </div>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
