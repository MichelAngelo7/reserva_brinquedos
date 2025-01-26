import React from "react";
import Header from "../components/header";
import { useState } from "react";
import styles from "./Resource.module.css";

export default function resource() {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("/api/v1/resource", {
      method: "POST",
      body: JSON.stringify({
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseBody) => {
        if (responseBody) {
          alert("cadastrado com sucesso");
        }
      });
  }

  return (
    <div>
      <Header />
      <h1>{id ? "Editar Evento" : "Cadastrar Evento"}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <spam>Nome:</spam>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="nome"
        />
        <button type="subimit">Enviar</button>
      </form>
    </div>
  );
}
