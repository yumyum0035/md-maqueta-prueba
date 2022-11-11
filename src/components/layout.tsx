import React from "react";
import "./layout.scss";

const Layout = () => {
  return (
    <section className="layout-component is-grid gap-32">
      <article className="element-01 is-grid ji-center p-16">
        <div className="child"></div>
      </article>
      <article className="element-02 is-grid ji-center ai-center">
        <p className="head-l child">03.</p>
      </article>
      <article className="element-03"></article>
      <article className="element-04"></article>
    </section>
  );
};

export default Layout;
