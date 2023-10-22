import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Avatar from "public/workCard/avatar.svg";

interface WorkWebProps {
  backgroundStyle: {
    background: string;
    borderRadius: string;
    boxShadow: string;
    backdropFilter: string;
    WebkitBackdropFilter: string;
    border: string;
  };
}

export default function WorkWeb({ backgroundStyle }: WorkWebProps) {
  return (
    <div className={style.box} style={backgroundStyle}>
      <div className={style.box__header}>
        <div className={style.flex__group}>
          <span className={style.circul}></span>
          <span className={style.circul}></span>
          <span className={style.circul}></span>
        </div>
        <div className={style.header__search}></div>
      </div>
      <div className={style.body}>
        <div className={style.aside}>
          <div className={style.image__box}>
            <Image src={Avatar} width={28} height={28} alt="avatar" />
            <span className={style.avatar__name}>Lucy p</span>
          </div>
          <span className={style.aside__line}></span>
          <span className={style.aside__line}></span>
          <span className={style.aside__line}></span>
        </div>
        <div className={style.main}>
          <div className={style.marquee}>
            <div className={style.marquee__content}>
              <div className={style.slider__line}></div>
              <div className={style.slider__line}></div>
              <div className={style.slider__line}></div>
              <div className={style.slider__line}></div>
              <div className={style.slider__line}></div>
            </div>
            <div className={style.marquee__content} aria-hidden="true">
              <div className={style.slider__line}></div>
              <div className={style.slider__line}></div>
              <div className={style.slider__line}></div>
              <div className={style.slider__line}></div>
              <div className={style.slider__line}></div>
            </div>
          </div>
          <div className={style.body__content}>
            <div className={style.placement}>button placement</div>
            <div className={style.implementation}>button implementation</div>
            <div className={style.navigation}>Navigation</div>
            <div className={style.product}>Product release</div>
            <div className={style.footer}>Footer menu</div>
          </div>
        </div>
      </div>
    </div>
  );
}
