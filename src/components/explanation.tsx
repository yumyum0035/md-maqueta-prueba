import React from "react";
import "./explanation.scss";

const Explanation = () => {
  return (
    <section className="marketing-spot mb-32">
      <p>
        Usaremos el framework{" "}
        <a
          className="mb-16  link-line"
          href="https://github.com/holygrailcss/holygrail"
        >
          holygrail
        </a>
        . La prueba se realizará usando el mismo framework (tipo Bootstrap, Ant
        o Tailwind CSS). Como guía de consulta tenemos:{" "}
        <a className="mb-16  link-line" href="https://holyguide.es/">
          holyguide.es
        </a>
        . Los márgenes y paddings a usar son:{" "}
        <span className="strong">8 16 24 32 64</span>
      </p>
    </section>
  );
};

export default Explanation;
