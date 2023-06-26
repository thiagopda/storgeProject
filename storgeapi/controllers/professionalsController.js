// controllers/professionalsController.js
const pool = require('../db');

exports.search = async (req, res) => {
  const { searchCriteria } = req.body;

  try {
    const query = `
      SELECT * FROM profissional_de_saude
      WHERE LOWER(especialidade) LIKE LOWER($1)
      ORDER BY nome;
    `;

    const { rows } = await pool.query(query, [`%${searchCriteria}%`]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
