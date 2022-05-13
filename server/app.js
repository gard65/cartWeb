/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable spaced-comment */
/* eslint-disable default-case */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ws = require('ws');
const morgan = require('morgan');
// const { v4: uuid } = require('uuid')
// const router = require('express').Router();
// const axios = require('axios');
const cookieParser = require('cookie-parser');
const path = require('path');

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
//   optionSuccessStatus: 204,
// };

const app = express();

const PORT = process.env.PORT ?? 3001;

const usersRouter = require('./src/routes/usersRouter');
const avatarRouter = require('./src/routes/avatarRouter');
const routeRouter = require('./src/routes/routeRouter');

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.use('/api', usersRouter);
app.use('/avatar', avatarRouter);
app.use('/route', routeRouter);

const wss = new ws.Server(
  {
    //Создаем Websocket server
    port: 3002,
  },
  () => console.log(`Server started on 3002`),
);

wss.on("connection", function connection(ws) {
  // Отрабатывает приподключении клиента
  ws.on("message", function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case "message":
        broadcastMessage(message);
        break;
      case "connection":
        broadcastMessage(message);
        break;
    }
  });
});

function broadcastMessage(message) {
  //Отправляем сообщение всем подключенным
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}

app.listen(PORT, () => {
  console.log('success');
});
