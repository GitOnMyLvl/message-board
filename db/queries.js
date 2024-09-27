const pool = require('./pool');

exports.getAllMessages = async() => {
  const { rows } = await pool.query(
    `SELECT * FROM users ORDER BY id ASC`
  );
  return rows;
}