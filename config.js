'use strict';

/**
  Configure your connection string in the .env file
 
  DATABASE_URL=postgres://<username>:<password>@<server>:<port>/<database>
 
  - ElephantSQL example:  
  DATABASE_URL=postgres://iipigr:WfGNrE2xK3FQDW7@stampy.db.elephantsql.com:5432/iipgr
  
  `process.env` contains the environment variables values so,
  
  `process.env.DATABASE_URL` now points to => "postgres://iipigr:WfGNrE2xK3FQDW7@stampy.db.elephantsql.com:5432/iipgr"
*/
 
const DATABASE = process.env.DATABASE_URL || 'postgres://localhost:5432/dev-items-app';

exports.DATABASE = {
  client: 'pg',
  connection: DATABASE,
  pool: {min : 0 , max : 3},
  debug: true
};

exports.PORT = process.env.PORT || 8080; 
