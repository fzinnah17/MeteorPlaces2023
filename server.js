require('dotenv').config();

const express = require("express");
const cors = require("cors");
const app = express(); // Create an instance of the Express application
app.use(express.json());
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users"); // import user routes and store it in the users variable.

app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  next();
});

// Enable CORS -> enables Cross-Origin Resource Sharing (CORS) middleware to allow requests from different origins.
app.use(cors());

// Bodyparser middleware -> to parse incoming request bodies in JSON format.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI; // MongoDB connection URI. That key is hidden. For now it is being stored in db variable

// Connect to MongoDB -> mongoose.connect() method with the provided connection URI. If the connection is successful, log a success message; otherwise, log the error.
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config -> pass the passport object to configure it.
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

//Serve static assets if in production -> from the client/build directory using express.static().
app.use(express.static(path.join(__dirname, "client", "build")));


app.get("/api/place/textsearch/json", async (req, res) => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const query = req.query.query;
    const radius = req.query.radius;
    const type = req.query.type;
    const page = req.query.page; // Added parameter for page
    const sort = req.query.sort; // Added parameter for sort

    // Make a request to the Google Maps Places API using axios
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&radius=${radius}&type=${type}&page=${page}&sort=${sort}&key=${apiKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});


// Serve the index.html file for all unknown routes -> to allow the client-side routing to handle the route.
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
// }


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}!`)); //  logging a message when the server is up and running which I get by running 'node server.js' in the root directory
