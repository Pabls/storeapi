const express = require('express');
const controller = require('../controllers/auth')
const router = express.Router();

// http://localhost:5000/api/auth/login
router.post('/login', (req, res) => {
    controller.login(req, res);
});

// http://localhost:5000/api/auth/registration
router.post('/registration', (req, res) => {
    controller.registration(req, res);
});

module.exports = router;