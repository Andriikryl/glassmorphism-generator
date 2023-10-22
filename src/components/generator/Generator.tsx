import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
export default function Generator() {
  return (
    <section className={style.generator}>
      <Container>
        <div className={style.generator__content}>
          <div className={style.inner__box}>
            <h1 className={style.generator__title}>Glassmorphism</h1>
            <div className={style.glassmorf__box}></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
