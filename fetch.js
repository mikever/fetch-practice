const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('fetch'));

app.listen(8080, () => {
  console.log('App listening on Port 8080');
});

