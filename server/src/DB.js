const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'education',
    password: 'fegaNaPa27_11',
    port: '5432',
});

module.exports = { pool };