import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import AboutImage from "public/aboutCard/one.png";
import BtnImage from "public/aboutCard/in.svg";

interface AboutCardProps {
  backgroundStyle: {
    background: string;
    borderRadius: string;
    boxShadow: string;
    backdropFilter: string;
    WebkitBackdropFilter: string;
    border: string;
  };
}

export default function AboutCard({ backgroundStyle }: AboutCardProps) {
  return (
    <div className={style.who__item} style={backgroundStyle}>
      <div className={style.item__image}>
        <Image src={AboutImage} width={113} height={113} alt="avatar" />
      </div>
      <h5 className={style.item__title}>Ivan Pavliuchenko</h5>
      <span className={style.item__ocupation}>CO-FOUNDER</span>
      <ul className={style.item__skills}>
        <li className={style.skills__item}>Candidate of medical sciences</li>
        <li className={style.skills__item}>
          Cryptocurrency trading specialist
        </li>
        <li className={style.skills__item}>
          Obstetrician-gynecologist with 20+ years of experience
        </li>
      </ul>
      <a className={style.item__link} href="#">
        <Image src={BtnImage} width={44} height={44} alt="social" />
      </a>
    </div>
  );
}
