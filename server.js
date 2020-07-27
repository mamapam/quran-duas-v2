// Import packages
require('dotenv').config();
const express = require('express');
const apiData = require('./apiData');

// Setup Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static.apply('client/build'));
}

let cachedData = {};

// API Routes
app.get('/api/duas', (req, res) => {
  if (Object.keys(cachedData).length !== 0) {
    console.log('hit cache');
    res.status(200).json(cachedData);
  } else {
    apiData
      .getAllData()
      .then((response) => {
        cachedData = { ...response };
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(500).json({ err: err });
      });
  }
});

// Listen for incoming requests
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
