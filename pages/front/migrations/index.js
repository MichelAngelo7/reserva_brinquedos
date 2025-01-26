import React from "react";
import Header from "../components/header";
import { useState } from "react";
import styles from "./Resource.module.css";

export default function resource() {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    const response = await fetch("/api/v1/migrations", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseBody) => {
        if (responseBody) {
          alert("cadastrado" + responseBody);
        }
      });
  }

  return (
    <div>
      <Header />
      <h1>Rodar Migrations</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="subimit">Enviar</button>
      </form>
    </div>
  );
}
