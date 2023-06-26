const { Sequelize } = require('sequelize');

// Substitua pelos detalhes corretos de conexão do seu banco de dados
const sequelize = new Sequelize('storgecare', 'postgres', '4544', {
  host: 'localhost',
  dialect: 'postgres',
});

const db = {
  sequelize,
  Sequelize,
};

module.exports = db;

