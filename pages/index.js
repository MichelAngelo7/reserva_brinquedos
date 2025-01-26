import React from "react";
import Header from "./front/components/header";
import styles from "./Home.module.css";
import { GiHealthNormal } from "react-icons/gi";
import { MdAddHome } from "react-icons/md";
import { GrTableAdd } from "react-icons/gr";
import { SiReaddotcv } from "react-icons/si";
import { TbHorseToy } from "react-icons/tb";
export default function Home() {
  return (
    <div>
      <Header />
      <a href="front/events">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Exibir Eventos Cadastrados</h3>
          <SiReaddotcv size={70} className={styles.card__icon} />
          <h4 className={styles.card__info__h4}>
            Verifique todos os eventos cadastrados no sistema
          </h4>
        </div>
      </a>
      <a href="front/event">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Cadastro de Evento</h3>
          <GrTableAdd size={70} className={styles.card__icon} />
          <h4 className={styles.card__info__h4}>Cadastre um novo Evento</h4>
        </div>
      </a>
      <a href="front/resources">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Exibir Brinquedos cadastrados</h3>
          <TbHorseToy size={70} className={styles.card__icon} />
          <h4 className={styles.card__info__h4}>
            Verifique todos os Brinquedos cadastrados no sistema
          </h4>
        </div>
      </a>
      <a href="front/resource">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Cadastro de Brinquedo</h3>
          <MdAddHome size={70} className={styles.card__icon} />
          <h4 className={styles.card__info__h4}>Cadastre um novo Brinquedo</h4>
        </div>
      </a>
      <a href="front/status">
        <div className={styles.card}>
          <h3 className={styles.card__info}>Status</h3>
          <GiHealthNormal size={70} className={styles.card__icon} />
          <h4 className={styles.card__info__h4}>
            Verifique o status da aplicação
          </h4>
        </div>
      </a>
    </div>
  );
}
