const express = require('express');
const controller = require('../controllers/position')
const router = express.Router();

// http://localhost:5000/api/position/:categoryId
router.get('/:categoryId', (req, res) => {
    controller.getByCategoryId(req, res);
});

// http://localhost:5000/api/position
router.post('/', (req, res) => {
    controller.add(req, res);
});

// http://localhost:5000/api/position/:id
router.patch('/:id', (req, res) => {
    controller.update(req, res);
});

// http://localhost:5000/api/position/:id
router.delete('/:id', (req, res) => {
    controller.remove(req, res);
});

module.exports = router;