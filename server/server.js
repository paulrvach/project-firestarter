const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');

const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');



// REQUIRE ROUTER
const apiRouter = require('./routes/apiRouter');

// RUNNING SERVER

app.use(express.json());
app.use(cors());
app.use(cookieParser());

//SERVE BUILD DIR
app.use('/dist', express.static(path.join(__dirname, '../dist')));
//SERVE MAIN PAGE
app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../index.html'));
});
//SERVE STATIC FILES
app.use('/', express.static(path.join(__dirname, '../src')));

//REROUTE API CALLS TO ROUTER
app.use('/api', apiRouter);

// GLOBAL ERROR ROUTE
app.get('*', (req, res) => {
  res.status(404).json({ Error: 'Unknown route error' });
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred: unknown one' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
