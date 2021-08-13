const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/config'); // This is new
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
app.use(cookieParser());

require('./routes/routes')(app);
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
