import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [name, setName] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/session", { name });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push(`/message`);
  }

  return (
    <>
      <p>
        Entre com um nome de usário, se ainda não tem um usuário, será criado
        automáticamente
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Nome * </label>
        <input
          type="text"
          id="email"
          placeholder="nome do usário"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
