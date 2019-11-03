const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

// get dist folder
const distDir = path.join(__dirname, '../../dist');

 express()
  .use(express.static(distDir))
  // serve the index.html
  .get('*', (req, res) => res.sendFile(path.join(distDir, 'index.html')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
