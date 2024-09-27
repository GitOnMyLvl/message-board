const pool = require('./pool');

exports.getAllMessages = async() => {
  const { rows } = await pool.query(
    `SELECT * FROM message ORDER BY id ASC`
  );
  return rows;
}

exports.getMessage = async(id) => {
  const { rows } = await pool.query (
    `SELECT * FROM message WHERE id = $1`, [id] 
  );
  return rows[0]; 
}

exports.addMessage = async(username, text) => {
  const date = new Date().toISOString().split('T')[0];
  await pool.query (
    `INSERT INTO message (username, text, date)
    VALUES ($1, $2, $3)`, [username, text, date]
  )
}