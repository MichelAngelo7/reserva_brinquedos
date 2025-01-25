import { Container } from "../styles/GlobalStyles";
import { Title, Form } from "./styled";
import Header from "../components/header";
import { useState } from "react";

export default function resource() {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    const response = await fetch("http://localhost:3000/api/v1/resource", {
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
    <Container>
      <Header />
      <Title>{id ? "Editar Evento" : "Cadastrar Evento"}</Title>
      <Form onSubmit={handleSubmit}>
        <spam>Nome:</spam>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="nome"
        />
        <button type="subimit">Enviar</button>
      </Form>
    </Container>
  );
}
