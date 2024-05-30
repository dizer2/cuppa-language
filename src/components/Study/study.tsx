// React
import React from "react";

const Study: React.FunctionComponent = () => {
  return (
    <div className="plan__step step-green study">
      <div className="step__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M5.83325 30V11.6667C5.83325 5.00004 7.49992 3.33337 14.1666 3.33337H25.8333C32.4999 3.33337 34.1666 5.00004 34.1666 11.6667V28.3334C34.1666 28.5667 34.1666 28.8 34.1499 29.0334" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.5833 25H34.1666V30.8333C34.1666 34.05 31.5499 36.6667 28.3333 36.6667H11.6666C8.44992 36.6667 5.83325 34.05 5.83325 30.8333V29.75C5.83325 27.1333 7.96659 25 10.5833 25Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.3333 11.6666H26.6666" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13.3333 17.5H21.6666" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <h4 className="step__title">Učení</h4>
    </div>
  )
}

export default Study;