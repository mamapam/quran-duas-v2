const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.QURAN_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// instance.interceptors.request.use((request) => {
//   console.log('Starting Request', request);
//   return request;
// });

// instance.interceptors.response.use((response) => {
//   console.log('Response:', response);
//   return response;
// });

module.exports = instance;
