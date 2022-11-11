import "./layout-flex.scss";

const LayoutFlex = () => {
  return (
    <section className="layout-flex-component is-flex flex-column">
      <article className="element-flex-01 p-16 is-flex align-multi-bottom">
        <div className="child"></div>
      </article>
      <article className="element-flex-02 is-flex align-middle content-center">
        <p className="head-l child">03.</p>
      </article>
      <article className="element-flex-03"></article>
      <article className="element-flex-04"></article>
    </section>
  );
};

export default LayoutFlex;
