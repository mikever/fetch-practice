const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/home/mike/Documents/projects/develop-practice/fetch-practice'));

app.listen(8080, () => {
  console.log('App listening on Port 8080');
});

