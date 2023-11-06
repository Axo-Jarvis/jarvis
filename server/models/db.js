const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '34.102.42.237',
  database: 'postgres',
  password: 'BestPasswordEver',
  port: 5432,
});

module.exports = pool;
