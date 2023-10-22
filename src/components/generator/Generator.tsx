"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { InputFrame } from "../inputFrame/InputFrame";
import ProductCard from "../productCard/ProductCard";
import DivContent from "../divContent/DivContent";
import clsx from "clsx";
import AboutCard from "../aboutCard/AboutCard";
import ProjectCard from "../projectCard/ProjectCard";
import WorkWeb from "../WorkWeb/WorkWeb";

export default function Generator() {
  const [generatorVolumeTransparansy, setGeneratorVolumeTransparansy] =
    React.useState(0);
  const [generatorVolumeBlur, setGeneratorVolumeBlur] = React.useState(10);
  const [generatorVolumeOutline, setGeneratorVolumeOtline] =
    React.useState(0.3);
  const [selectedOption, setSelectedOption] = React.useState("work-web");
  const [selectedOptionBackground, setSelectedOptionBackground] =
    React.useState("Image");
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
          </div>
          <div
            className={clsx(style.content__box, {
              [style.gradient]: selectedOptionBackground === "gradient",
              [style.image]: selectedOptionBackground === "Image",
              [style.solid]: selectedOptionBackground === "solid",
            })}
          >
            {selectedOption === "div" && (
              <DivContent backgroundStyle={backgroundStyle} />
            )}
            {selectedOption === "product-card" && (
              <ProductCard backgroundStyle={backgroundStyle} />
            )}
            {selectedOption === "about-card" && (
              <AboutCard backgroundStyle={backgroundStyle} />
            )}
            {selectedOption === "project-card" && (
              <ProjectCard backgroundStyle={backgroundStyle} />
            )}
            {selectedOption === "work-web" && (
              <WorkWeb backgroundStyle={backgroundStyle} />
            )}
          </div>
          <div className={style.control__group}>
            <div className={style.bg__control}>
              <form className={style.form__direaction}>
                <fieldset>
                  <legend className={style.legend}>Background type</legend>
                  <select
                    className={style.select}
                    value={selectedOptionBackground}
                    onChange={(event) => {
                      setSelectedOptionBackground(event.target.value);
                    }}
                  >
                    <option value="gradient">gradient</option>
                    <option value="Image">Image</option>
                    <option value="solid">Solid</option>
                  </select>
                </fieldset>
              </form>
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
            <div className={style.bg__control}>
              <form className={style.form__direaction}>
                <fieldset>
                  <legend className={style.legend}>Content type</legend>
                  <select
                    className={style.select}
                    value={selectedOption}
                    onChange={(event) => {
                      setSelectedOption(event.target.value);
                    }}
                  >
                    <option value="div">div</option>
                    <option value="product-card">product-card</option>
                    <option value="about-card">about-card</option>
                    <option value="project-card">project-card</option>
                    <option value="work-web">work-web</option>
                  </select>
                </fieldset>
              </form>
            </div>
          </div>
          <div className={style.code__box}>
            <code className={style.code}>
              <span>background-color: {backgroundStyle.background};</span>
              <span>backdrop-filter: {backgroundStyle.backdropFilter};</span>
              <span>border: {backgroundStyle.border}</span>
            </code>
          </div>
        </div>
      </Container>
    </section>
  );
}
