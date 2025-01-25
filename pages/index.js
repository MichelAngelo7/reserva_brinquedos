import React from "react";
import Header from "./front/components/header";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <a href="front/events">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Exibir Eventos Cadastrados</h3>
          <h4 className={styles.card__info__h4}>
            Verifique todos os eventos cadastrados no sistema
          </h4>
        </div>
      </a>
      <a href="front/event">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Cadastro de Evento</h3>
          <h4 className={styles.card__info__h4}>Cadastre um novo Evento</h4>
        </div>
      </a>
      <a href="front/resources">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Exibir Brinquedos cadastrados</h3>
          <h4 className={styles.card__info__h4}>
            Verifique todos os Brinquedos cadastrados no sistema
          </h4>
        </div>
      </a>
      <a href="front/resource">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Cadastro de Brinquedo</h3>
          <h4 className={styles.card__info__h4}>Cadastre um novo Brinquedo</h4>
        </div>
      </a>
      <a href="front/status">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Status</h3>
          <h4 className={styles.card__info__h4}>
            Verifique o status da aplicação
          </h4>
        </div>
      </a>
    </div>
  );
}
