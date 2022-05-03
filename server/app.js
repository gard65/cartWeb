require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const { v4: uuid } = require('uuid')
const router = require('express').Router();
const axios = require('axios');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = process.env.PORT ?? 3000;

const usersRouter = require('./src/routes/usersRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', usersRouter);

app.listen(PORT, () => {
  console.log('success');
});
