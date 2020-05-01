import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./index.css";
// import { Container } from './styles';

export default function Message({ history }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  const [currentUser, serCurrentUser] = useState("");

  const handleBack = async () => {
    history.push(`/`);
  };

  const handleSend = async (event) => {
    event.preventDefault();
    const user_id = localStorage.getItem("user");
    await api.post(
      "/messages",
      { message },
      {
        headers: {
          user_id,
        },
      }
    );
    setMessage("");
  };

  useEffect(() => {
    async function loadMessages() {
      const user_id = localStorage.getItem("user");

      const user = await api.get(`/session/${user_id}`);
      serCurrentUser(user.data.name);

      const response = await api.get("/messages");

      setMessages(response.data);
    }

    loadMessages();

    return () => {};
  }, [messages]);

  return (
    <div className="main-container">
      <header className="header-user">
        Logged User: <strong>{currentUser}</strong>
      </header>
      <nav>
        <ul className="message-list">
          {messages.map((messages) => (
            <li key={messages._id} className="messages-shown">
              {" "}
              {messages.date.split("-")[0]} {"-"} {messages.user}
              {" - "} {messages.date.split("-")[1]}
              {" => "}
              {messages.message}
            </li>
          ))}
        </ul>
      </nav>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Type you message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button className="enviar" onClick={handleSend}>
          Enviar
        </button>
        <button className="sair" onClick={handleBack}>
          Sair
        </button>
      </div>
    </div>
  );
}
