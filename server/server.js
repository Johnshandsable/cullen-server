const express = require('express');
// console.log(express);

// Create our application
const app = express();

// Listen for network requests
app.listen(3000, function () {
  // When the server is ready, call this function
  console.log('the app is listening at', 3000);
});
