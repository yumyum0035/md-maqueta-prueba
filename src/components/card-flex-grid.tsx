import CardFlex from "./card-flex";
import "./card-flex-grid.scss";

interface CardElements {
  src: string;
  alt?: string;
  className: string;
  key: string;
  isLongText?: boolean;
}

const CardFlexGrid = () => {
  let grid: CardElements[] = [
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-0",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-1",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-2",
      isLongText: true,
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-3",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-4",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-5",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-6",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-7",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-8",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-9",
      isLongText: true,
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-10",
    },
    {
      src: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
      alt: "Placeholder Product",
      className: "",
      key: "element-11",
    },
  ];

  return (
    <section className="is-flex flex-grid-component">
      {grid.map((element) => (
        <CardFlex
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

export default CardFlexGrid;
