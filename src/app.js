const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/db');
connectDB();
const userRoutes = require('./routes/user.routes');

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

module.exports = app;