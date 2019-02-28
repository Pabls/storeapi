const express = require('express');
const controller = require('../controllers/analytics')
const router = express.Router();

// http://localhost:5000/api/analytics/overview
router.get('/overview', (req, res) => {
    controller.overview(req, res);
});

// http://localhost:5000/api/analytics/result
router.get('/result', (req, res) => {
    controller.result(req, res);
});

module.exports = router;