import React from "react";
import style from "./style.module.css";

interface DivContentProps {
  backgroundStyle: {
    background: string;
    borderRadius: string;
    boxShadow: string;
    backdropFilter: string;
    WebkitBackdropFilter: string;
    border: string;
  };
}

export default function DivContent({ backgroundStyle }: DivContentProps) {
  return <div style={backgroundStyle} className={style.glassmorf__box}></div>;
}
