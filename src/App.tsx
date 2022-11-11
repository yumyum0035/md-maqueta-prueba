import React, { useState } from "react";
import "./sass/style.scss";
import Explanation from "./components/explanation";
import GridSection from "./components/grid-section";
import FlexSection from "./components/flex-section";

function App() {
  const [currentTab, setCurrentTab] = useState("grid");

  const handleClick = (received: string) => {
    setCurrentTab(received);
  };

  return (
    <div className="is-grid gap-8 jc-center mx-32">
      <h1 className="head-l font-accent">CSS Exercise</h1>
      <Explanation />
      <section className="tabs is-center">
        <ul>
          <li className={currentTab === "grid" ? "is-active" : ""}>
            <a onClick={() => handleClick("grid")}>Grid</a>
          </li>
          <li className={currentTab === "flex" ? "is-active" : ""}>
            <a onClick={() => handleClick("flex")}>Flexbox</a>
          </li>
        </ul>
      </section>

      {currentTab === "grid" ? <GridSection /> : <FlexSection />}
    </div>
  );
}

export default App;
