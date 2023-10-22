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
            <div
              style={{
                background: "rgba(255, 255, 255, 0.35)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10.1px)",
                WebkitBackdropFilter: "blur(10.1px)",
                border: "1px solid rgba(255, 255, 255, 0.32)",
              }}
              className={style.glassmorf__box}
            ></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
