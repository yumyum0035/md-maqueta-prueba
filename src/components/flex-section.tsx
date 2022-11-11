import "./flex-section.scss";
import CardFlex from "./card-flex";
import CardFlexGrid from "./card-flex-grid";
import LayoutFlex from "./layout-flex";

const FlexSection = () => {
  return (
    <section>
      <article className="mb-32">
        <p className="h2 mb-16 tit-m">
          01. Creación de un layout estructural con cambio de orden
        </p>
        <LayoutFlex />
      </article>
      <article className="mb-32">
        <p className="h2 mb-16 tit-m">02. Creación de una pieza de producto.</p>
        <CardFlex
          className="flex-responsive-size"
          src="https://holygrailcss.github.io/assets/placeholder/2-3.jpg"
          alt="Placeholder"
        />
      </article>

      <article className="mb-32">
        <p className="h2 mb-16 tit-m">
          03. Creación de un layout tipo parrilla de productos responsive.
        </p>
        <CardFlexGrid />
      </article>
    </section>
  );
};

export default FlexSection;
