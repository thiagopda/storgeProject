const express = require('express');
const router = express.Router();

// Importe seus controladores aqui

// Endpoints de autenticação
router.post('/api/auth/paciente', /* controlador de login do paciente */);
router.post('/api/auth/profissional', /* controlador de login do profissional de saúde */);

// Outros endpoints aqui

module.exports = router;
