// packages
const express = require('express');
const requestBodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// routes
const analyticsRoutes = require('./routes/analytics');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');

const app = express();

app.use(requestBodyParser.urlencoded({ extended: true }));
app.use(requestBodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/analytics', analyticsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;