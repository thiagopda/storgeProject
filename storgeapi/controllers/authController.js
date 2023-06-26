// controllers/authController.js
const pool = require('../db');

exports.signIn = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const query = `
      SELECT * FROM paciente
      WHERE email = $1 AND senha = $2;
    `;

    const { rows } = await pool.query(query, [email, senha]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.signUp = async (req, res) => {
  const { nome, sobrenome, endereco, email, telefone, data_nascimento, senha } = req.body;

  try {
    const query = `
      INSERT INTO paciente (nome, sobrenome, endereco, email, telefone, data_nascimento, senha)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    const { rows } = await pool.query(query, [nome, sobrenome, endereco, email, telefone, data_nascimento, senha]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
