const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 3001,
  database: 'storgecare',
  user: 'postgres',
  password: '4544', // Substitua pela senha do seu usuário postgres
});

module.exports = pool;
