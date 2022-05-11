require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const { v4: uuid } = require('uuid')
const router = require('express').Router();
const axios = require('axios');
const cookieParser = require('cookie-parser');
const path = require('path');

console.log(path);
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
//   optionSuccessStatus: 204,
// };

const app = express();

const PORT = process.env.PORT ?? 3001;

const usersRouter = require('./src/routes/usersRouter');
const avatarRouter = require('./src/routes/avatarRouter');

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.use('/api', usersRouter);
app.use('/avatar', avatarRouter);

app.listen(PORT, () => {
  console.log('success');
});
