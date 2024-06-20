// React
import React from "react";

// react-svg
import { ReactSVG } from "react-svg";

// curves
import Curve1 from "../img/curve3.png";
import Curve2 from "../img/curve4.png";

// styles
import "../styles/methods.css";

interface MethodsArray {
  id: number;
  title: string;
  icon: string;
  description: string;
}

// Methods props
interface IMethodsProps {
  methods: MethodsArray[];
}

// Methods component
const Methods: React.FunctionComponent<IMethodsProps> = ({ methods }) => {
  return (
    <section className="methods">
      <div className="container">
        {/* curves */}
        <img src={Curve1} alt="curve" className="methods__curve" />
        <img src={Curve2} alt="curve" className="methods__curve" />

        {/* title */}
        <h1 className="methods__title">Naše metody</h1>

        {/* methods list */}
        <ul className="methods__list">
          {methods.map((method) => (
            <li key={method.id} className="methods__item">
              <div className="method__number">
                <h3 className="method-id">0{method.id}</h3>
              </div>
              <div className="method__content">
                <h3 className="method-title">{method.title}</h3>
                <p className="method-description">{method.description}</p>
              </div>
              <div className="method__icon">
                <ReactSVG src={`./svg/${method.icon}.svg`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Methods;