'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { DATABASE, PORT } = require('./config');

const knex = require('knex')(DATABASE);

const app = express();
app.use(bodyParser.json());

app.get('/items', (req, res) => {

  knex('items')
    .join('users', 'items.user_id', 'users.id')
    .select('items.id', 'name', 'username')
    .then(results => {
      res.json(results);
    });
});

app.get('/items/:id', (req, res) => {

  knex('items')
    .join('users', 'items.user_id', 'users.id')
    .select('items.id', 'name', 'username')
    .where('items.id', req.params.id)
    .then(results => {
      res.json(results);
    });
});

app.listen(PORT); 