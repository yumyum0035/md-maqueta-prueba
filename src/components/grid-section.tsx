import "./grid-section.scss";
import Card from "./card";
import Layout from "./layout";
import CardGrid from "./card-grid";

//solving the problem using Grid
const GridSection = () => {
  return (
    <section>
      <article className="mb-32">
        <p className="h2 mb-16 tit-m">
          01. Creación de un layout estructural con cambio de orden
        </p>
        <Layout />
      </article>
      <article className="mb-32">
        <p className="h2 mb-16 tit-m">02. Creación de una pieza de producto.</p>
        <Card
          className="card-container responsive-size"
          src="https://holygrailcss.github.io/assets/placeholder/2-3.jpg"
          alt="Placeholder"
        />
      </article>

      <article className="mb-32">
        <p className="h2 mb-16 tit-m">
          03. Creación de un layout tipo parrilla de productos responsive.
        </p>
        <CardGrid />
      </article>
    </section>
  );
};

export default GridSection;
