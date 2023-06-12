const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
  
const app = express();  

app.use(express.json());

const corsOptions = {
  origin: '*',
  methods: 'GET,POST,DELETE,OPTIONS,PUT,PATCH',
  optionsSuccessStatus: 200,
  allowedHeaders: '*',
};

app.use(cors(corsOptions));

// Alternativa ao corsOptions
/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    app.use(cors());
    next();
  }); */

app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(router);

module.exports = app;
