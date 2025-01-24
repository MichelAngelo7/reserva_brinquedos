import { Card } from "./styled";
import { Container } from "pages/front/styles/GlobalStyles";
import React from "react";

export default function Home() {
  return (
    <Container>
      <a href="front/events">
        <Card>
          <h3>Exibir Eventos Cadastrados</h3>
          <h4>Verifique todos os eventos cadastrados no sistema</h4>
        </Card>
      </a>
      <a href="front/event">
        <Card>
          <h3>Cadastro de Evento</h3>
          <h4>Cadastre um novo Evento</h4>
        </Card>
      </a>
      <a href="front/resources">
        <Card>
          <h3>Exibir Brinquedos cadastrados</h3>
          <h4>Verifique todos os Brinquedos cadastrados no sistema</h4>
        </Card>
      </a>
      <a href="front/resource">
        <Card>
          <h3>Cadastro de Brinquedo</h3>
          <h4>Cadastre um novo Brinquedo</h4>
        </Card>
      </a>
      <a href="front/status">
        <Card>
          <h3>Status</h3>
          <h4> Verifique o status da aplicação</h4>
        </Card>
      </a>
    </Container>
  );
}
