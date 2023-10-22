"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { InputFrame } from "../inputFrame/InputFrame";
export default function Generator() {
  const [generatorVolumeTransparansy, setGeneratorVolumeTransparansy] =
    React.useState(0);
  const [generatorVolumeBlur, setGeneratorVolumeBlur] = React.useState(10);
  const [generatorVolumeOutline, setGeneratorVolumeOtline] =
    React.useState(0.3);
  const backgroundStyle = {
    background: `rgba(255, 255, 255, ${generatorVolumeTransparansy})`,
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: `blur(${generatorVolumeBlur}px)`,
    WebkitBackdropFilter: `blur(${generatorVolumeBlur}px)`,
    border: `1px solid rgba(255, 255, 255, ${generatorVolumeOutline})`,
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
              value={generatorVolumeTransparansy}
              set={setGeneratorVolumeTransparansy}
              min={0}
              max={1}
              step={0.01}
              rangeLabel="transparansy"
              numberLabel="transparansy number"
            ></InputFrame>
            <InputFrame
              className={style.form__angel}
              value={generatorVolumeBlur}
              set={setGeneratorVolumeBlur}
              min={0}
              max={40}
              step={1}
              rangeLabel="blur"
              numberLabel="blur number"
            ></InputFrame>
            <InputFrame
              className={style.form__angel}
              value={generatorVolumeOutline}
              set={setGeneratorVolumeOtline}
              min={0}
              max={1}
              step={0.01}
              rangeLabel="outline"
              numberLabel="outline number"
            ></InputFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
