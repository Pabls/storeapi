const express = require('express');
const controller = require('../controllers/category')
const router = express.Router();

// http://localhost:5000/api/category
router.get('/', (req, res) => {
    controller.getAll(req, res);
});

// http://localhost:5000/api/category/:id
router.get('/:id', (req, res) => {
    controller.getById(req, res);
});

// http://localhost:5000/api/category/:id
router.delete('/:id', (req, res) => {
    controller.remove(req, res);
});

// http://localhost:5000/api/category
router.post('/', (req, res) => {
    controller.create(req, res);
});

// http://localhost:5000/api/category/:id
router.patch('/:id', (req, res) => {
    controller.update(req, res);
});

module.exports = router;