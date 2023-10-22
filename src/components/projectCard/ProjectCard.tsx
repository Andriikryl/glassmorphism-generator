import React from "react";
import style from "./style.module.css";

interface ProjectCardProps {
  backgroundStyle: {
    background: string;
    borderRadius: string;
    boxShadow: string;
    backdropFilter: string;
    WebkitBackdropFilter: string;
    border: string;
  };
}

export default function ProjectCard({ backgroundStyle }: ProjectCardProps) {
  return (
    <div className={style.list__item} style={backgroundStyle}>
      <div className={style.item__card}>
        <div className={style.inner__card}>
          <h5 className={style.card__title}>Project Overview</h5>
          <span className={style.card__description}>Step one</span>
          <div className={style.line}></div>
          <div className={style.line__two}></div>
          <ul className={style.inner__list}>
            <li className={style.inner__item}></li>
            <li className={style.inner__item}></li>
            <li className={style.inner__item}></li>
          </ul>
          <div className={style.box}></div>
        </div>
      </div>
      <h6 className={style.item__title}>Quick Project Creation</h6>
      <span className={style.item__description}>
        Your new projects are simply a click away with our intuitive creation
        flow
      </span>
    </div>
  );
}
