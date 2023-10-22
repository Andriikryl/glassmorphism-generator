"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { InputFrame } from "../inputFrame/InputFrame";
export default function Generator() {
  const [generatorVolumeHue, setGeneratorVolumeHue] = React.useState(0);
  const backgroundStyle = {
    background: `rgba(255, 255, 255, ${generatorVolumeHue})`,
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10.1px)",
    WebkitBackdropFilter: "blur(10.1px)",
    border: "1px solid rgba(255, 255, 255, 0.32)",
  };
  return (
    <section className={style.generator}>
      <Container>
        <div className={style.generator__content}>
          <div className={style.inner__box}>
            <h1 className={style.generator__title}>Glassmorphism</h1>
            <div style={backgroundStyle} className={style.glassmorf__box}></div>
          </div>

          <div className={style.control__box}>
            <InputFrame
              className={style.form__angel}
              value={generatorVolumeHue}
              set={setGeneratorVolumeHue}
              min={0}
              max={1}
              step={0.01}
              rangeLabel="transparansy"
              numberLabel="transparansy number"
            ></InputFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
