// React
import React from "react";

// Study component
import Study from "../components/Study/study";

// Arrow component
import Arrow from "../components/Arrow/arrow";

// Rest component
import Rest from "../components/Rest/rest";

// Effectivness component
import Effectivness from "../components/Effectivness/efectivness";

// Progress component
import Progress from "../components/Progress/progress";

// styles
import "../styles/plan.css";

// IPlanProps
interface IPlanProps {};

const Plan: React.FunctionComponent<IPlanProps> = () => {
  return (
    <section className="plan">
      <h1 className="plan__title">
        Jak to vypadá ?
      </h1>
      <div className="plan__steps">
        <Study />
        <Arrow />
        <Rest />
        <Arrow />
        <Effectivness />
        <Arrow />
        <Progress />
      </div>
    </section>
  )
}

export default Plan;