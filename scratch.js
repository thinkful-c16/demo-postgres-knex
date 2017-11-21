'use strict';

const { DATABASE, PORT } = require('./config');
const knex = require('knex')(DATABASE);

knex.select()
  .from('items')
  .limit(2)
  .debug(true)
  .then(results => console.log(results));

knex
  .insert([{ name: 'buy milk' }, { name: 'buy break' }])
  .into('items')
  .returning(['id', 'name'])
  .then(console.log);

knex('items')
  .insert({ name: 'buy coffee' })
  .returning(['id', 'name'])
  .then(console.log);

knex.select('id', 'name', 'completed')
  .from('items')
  .then(console.log);

knex.select('id', 'name', 'completed')
  .from('items')
  .where('name', 'buy coffee')
  .then(console.log);

knex.select('id', 'name', 'completed')
  .from('items')
  .where({ 'name': 'buy milk' })
  .then(console.log);

knex('items')
  .update('name', 'Buy great coffee')
  .where('name', 'buy coffee')
  .then(console.log);

knex('items')
  .where({ 'name': 'buy milk' })
  .update({
    completed: true
  })
  .then(console.log);

knex('items')
  .where('completed', true)
  .del()
  .then(console.log);

knex('items')
  .join('users', 'items.user_id', 'users.id')
  .select('items.id', 'name', 'username')
  .then(console.log);

knex('items')
  .join('users', 'items.user_id', 'users.id')
  .select('items.id as item_id', 'users.id as user_id', 'name', 'username')
  .where('items.id', 1002)
  .then(console.log);