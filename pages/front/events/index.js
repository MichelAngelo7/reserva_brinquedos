import React from "react";
import Header from "../components/header";
import { useEffect, useState } from "react";
import styles from "./Events.module.css";

export default function events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getAllEvents() {
      const response = await fetch("http://localhost:3000/api/v1/event");
      const responsebody = await response.json();
      setEvents(responsebody.rows);
    }
    getAllEvents();
  }, []);

  return (
    <div>
      <Header />
      <h1>Eventos</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Data do evento</th>
            <th>Início</th>
            <th>Fim</th>
            <th>Tipo de evento</th>
            <th>Situação</th>
            <th>Croqui</th>
            <th>Permissão Prefeitura</th>
            <th>Protocolo PM</th>
            <th>Informações</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={String(event.id)}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.timeinit}</td>
              <td>{event.timeend}</td>
              <td>{event.eventtype}</td>
              <td>{event.status}</td>
              <td>{event.sketch}</td>
              <td>{event.permitbh}</td>
              <td>{event.protocolpm}</td>
              <td>{event.information}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
