import React from "react";
import Card from "./card";
import "./card-grid.scss";

//typescript Prop sample
interface CardElements {
  src: string;
  alt?: string;
  className: string;
  key: string;
  isLongText?: boolean;
}

const CardGrid = () => {
  let grid: CardElements[] = [
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-0",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-1",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-2",
      isLongText: true,
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-3",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-4",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-5",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-6",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-7",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-8",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-9",
      isLongText: true,
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-10",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "card-container fixed-size",
      key: "element-11",
    },
  ];

  return (
    <section className="is-grid card-grid-component gap-8 content-start">
      {grid.map((element) => (
        <Card
          key={element.key}
          src={element.src}
          alt={element.alt}
          className={element.className}
          isLongText={element.isLongText}
        />
      ))}
    </section>
  );
};

export default CardGrid;
