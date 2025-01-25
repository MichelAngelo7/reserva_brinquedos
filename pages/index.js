import React from "react";
import Header from "./front/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <a href="front/events">
        <div>
          <h3>Exibir Eventos Cadastrados</h3>
          <h4>Verifique todos os eventos cadastrados no sistema</h4>
        </div>
      </a>
      <a href="front/event">
        <div>
          <h3>Cadastro de Evento</h3>
          <h4>Cadastre um novo Evento</h4>
        </div>
      </a>
      <a href="front/resources">
        <div>
          <h3>Exibir Brinquedos cadastrados</h3>
          <h4>Verifique todos os Brinquedos cadastrados no sistema</h4>
        </div>
      </a>
      <a href="front/resource">
        <div>
          <h3>Cadastro de Brinquedo</h3>
          <h4>Cadastre um novo Brinquedo</h4>
        </div>
      </a>
      <a href="front/status">
        <div>
          <h3>Status</h3>
          <h4> Verifique o status da aplicação</h4>
        </div>
      </a>
    </div>
  );
}
