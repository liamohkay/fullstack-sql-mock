// Express Server
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
// Port + routes
const port = 3000;
const router = require('./router');

// Set up express server apply middleware
const server = express()
  // Middleware
  .use(cors())
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Routes
  .use('/api', router)
  .use('/', express.static(path.join(__dirname + '/../client/dist')));

server.listen(port, () => console.log(`Connected to port: ${port}`));