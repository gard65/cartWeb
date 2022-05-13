import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.css";
import { v4 as uuidv4 } from 'uuid';

const WebSock = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState(""); //Состояние инпута
  const socket = useRef();
  const [connected, setConnected] = useState(false); //Отображает состояние подключения
  const [username, setUsername] = useState(""); // Устанавливаем state для пользователя
  const currentUserId = useSelector((state) => state.user.id);
  const curentUserName = useSelector((state) => state?.user.name);

  useEffect(() => {
    connect();
  },[]);
  function connect() {
    socket.current = new WebSocket("ws://localhost:3002"); //Протокол WebSocket
    socket.current.onopen = () => {
      // Отрабатывает в момент подключенния
      setConnected(true);
      const message = {
        event: "connection",
        curentUserName,
        id: currentUserId,
      };
      socket.current.send(JSON.stringify(message)); //Отправляем на сервер клиента
    };
    socket.current.onmessage = (event) => {
      // Отрабатывает при получении сообщения
      const message = JSON.parse(event.data);
      setMessages((prev) => [message, ...prev]);
      console.log("message", message); //Принимаем сообщение
    };
    socket.current.onclose = () => {
      //Отрабатывает при закрытии подключения
      console.log("Socket закрыт");
    };
    socket.current.onerror = () => {
      console.log("Socket произошла ошибка"); //Срабатывает при ошибке
    };
  }

  const sendMessage = async () => {
    const message = {
      curentUserName,
      message: value,
      id: currentUserId,
      event: "message",
    };
    socket.current.send(JSON.stringify(message)); //Отправляем сообщение на сервер
    setValue("");
  };

  // if (!connected) {
  //   // Изменяем разметку при отсутствии подключения
  //   return (
  //     <div className={styles.center}>
  //       <div className={styles.form}>
  //         <input
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //           type="text"
  //           placeholder="Введите ваше имя"
  //         />
  //         <button onClick={connect}>Войти</button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.center}>
      <div>
        <div className={styles.form}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <button onClick={sendMessage}>Отправить</button>
        </div>
        <div className={styles.messages}>
          {messages.map((mess) => (
            <div>
              {mess.event === "connection" ? (
                <div className={styles.connection_message}>
                  Пользователь: {mess.curentUserName} подключился
                </div>
              ) : (
                <div key={uuidv4()} className={styles.message}>
                  {mess.curentUserName}: {mess.message}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebSock;
