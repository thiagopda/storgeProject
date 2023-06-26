const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Importa a configuração do banco de dados e o modelo do usuário
const db = require('./models/index');
const User = require('./models/user');

app.use(express.json());

// Rota para criar um usuário (apenas um exemplo)
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = await User.create({ name, email });
    res.status(201).json({ user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

db.sequelize
  .sync() // Cria as tabelas no banco de dados se elas não existirem
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  app.get('/', (req, res) => {
    res.send('Storgecare API is running!');
  });
    

  