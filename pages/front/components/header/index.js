import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <a className={styles.a} href="/">
        Home
      </a>
      <a className={styles.a} href="/front/events">
        Exibir Eventos
      </a>
      <a className={styles.a} href="/front/event">
        Cad. Evento
      </a>
      <a className={styles.a} href="/front/resources">
        Exibir Brinquedos
      </a>
      <a className={styles.a} href="/front/resource">
        Cad. brinquedo
      </a>
      <a className={styles.a} href="/front/status">
        Status
      </a>
    </nav>
  );
}
