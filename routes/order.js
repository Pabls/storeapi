const express = require('express');
const controller = require('../controllers/order')
const router = express.Router();

// http://localhost:5000/api/order
router.get('/', (req, res) => {
    controller.getAll(req, res);
});

// http://localhost:5000/api/order
router.post('/', (req, res) => {
    controller.add(req, res);
});

module.exports = router;