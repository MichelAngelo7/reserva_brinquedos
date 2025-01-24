import { Container } from "../styles/GlobalStyles";
import { Title, Form } from "../home/styled";
import Header from "../components/header";
import { useState } from "react";

export default function resource() {
  const [id, setId] = useState(null);
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [timeinit, setTimeinit] = useState();
  const [timeend, setTimeend] = useState();
  const [eventtype, setEventtype] = useState();
  const [status, setStatus] = useState();
  const [sketch, setSketch] = useState();
  const [permitbh, setPermitbh] = useState();
  const [protocolpm, setProtocolpm] = useState();
  const [information, setInformation] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(
      id,
      date,
      title,
      timeinit,
      timeend,
      eventtype,
      status,
      sketch,
      permitbh,
      protocolpm,
      information,
    );

    const response = await fetch("http://localhost:3000/api/v1/event", {
      method: "POST",
      body: JSON.stringify({
        id,
        date,
        title,
        timeinit,
        timeend,
        eventtype,
        status,
        sketch,
        permitbh,
        protocolpm,
        information,
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
      <Title>{id ? "Editar Recurso" : "Cadastrar Novo Recurso"}</Title>
      <Form onSubmit={handleSubmit}>
        <spam>Título:</spam>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <spam>Data do evento:</spam>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Data do evento"
        />
        <spam>Início:</spam>
        <input
          type="time"
          value={timeinit}
          onChange={(e) => setTimeinit(e.target.value)}
          placeholder="Início"
        />
        <spam>Fim:</spam>
        <input
          type="time"
          value={timeend}
          onChange={(e) => setTimeend(e.target.value)}
          placeholder="Fim"
        />
        <spam>Tipo de evento:</spam>
        <select
          name="eventtype"
          id="eventtype"
          onChange={(e) => setEventtype(e.target.value)}
        >
          <option value=""></option>
          <option value="Evento de rua">Evento de rua</option>
        </select>
        <spam>Situação:</spam>
        <select
          name="status"
          id="status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value=""></option>
          <option value="Em andamento">Em andamento</option>
        </select>
        <spam>Croqui:</spam>
        <select
          name="sketch"
          id="sketch"
          onChange={(e) => setSketch(e.target.value)}
        >
          <option value=""></option>
          <option value="false">Não precisa</option>
        </select>
        <spam>Permissão Prefeitura</spam>
        <select
          name="permitbh"
          id="permitbh"
          onChange={(e) => setPermitbh(e.target.value)}
        >
          <option value=""></option>
          <option value="Não precisa">Não precisa</option>
        </select>
        <spam>Protocolo PM</spam>
        <select
          name="protocolpm"
          id="protocolpm"
          onChange={(e) => setProtocolpm(e.target.value)}
        >
          <option value=""></option>
          <option value="Não iniciado">Não iniciado</option>
        </select>
        <spam>Informações:</spam>
        <textarea
          type="textarea"
          value={information}
          onChange={(e) => setInformation(e.target.value)}
          placeholder="Informações"
        />
        <button type="subimit">Enviar</button>
      </Form>
    </Container>
  );
}
