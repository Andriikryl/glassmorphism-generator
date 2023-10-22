import React from "react";
import style from "./style.module.css";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import productImage from "public/productCard/image-product-desktop.jpg";
import Image from "next/image";

interface ProductCardProps {
  backgroundStyle: {
    background: string;
    borderRadius: string;
    boxShadow: string;
    backdropFilter: string;
    WebkitBackdropFilter: string;
    border: string;
  };
}

export default function ProductCard({ backgroundStyle }: ProductCardProps) {
  return (
    <article className={style.product} style={backgroundStyle}>
      <Image src={productImage} width={300} height={500} alt="product image" />
      <div className={style.product__contant}>
        <p className={style.product__category}>Perfume</p>
        <h1 className={style.product__title}>
          Gabrielle Essence Eau De Parfum
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          corrupti magnam, recusandae ea fugiat dicta deleniti minima impedit
          nobis laboriosam pariatur eligendi itaque. Impedit iure sunt, dolore
          placeat optio repellat?
        </p>
        <div className={style.flex__group}>
          <p className={style.product__price}>
            <VisuallyHidden>Curent price:</VisuallyHidden>
            $149.99
          </p>
          <p className={style.product__original__price}>
            <VisuallyHidden>Original price:</VisuallyHidden>
            <s>$169.99</s>
          </p>
        </div>
        <button data-icon="shopping-cart" className={style.button}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
