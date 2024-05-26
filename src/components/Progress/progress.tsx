// React
import React from "react";

const Progress: React.FunctionComponent = () => {
  return (
    <div className="plan__step step-yellow progress">
      <div className="step__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M5 36.6666H35" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.33329 13.9667H6.66667C5.75 13.9667 5 14.7167 5 15.6333V30C5 30.9167 5.75 31.6667 6.66667 31.6667H9.33329C10.25 31.6667 11 30.9167 11 30V15.6333C11 14.7167 10.25 13.9667 9.33329 13.9667Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M21.3333 8.65002H18.6667C17.75 8.65002 17 9.40002 17 10.3167V30C17 30.9167 17.75 31.6667 18.6667 31.6667H21.3333C22.25 31.6667 23 30.9167 23 30V10.3167C23 9.40002 22.25 8.65002 21.3333 8.65002Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M33.3333 3.33337H30.6667C29.75 3.33337 29 4.08337 29 5.00004V30C29 30.9167 29.75 31.6667 30.6667 31.6667H33.3333C34.25 31.6667 35 30.9167 35 30V5.00004C35 4.08337 34.25 3.33337 33.3333 3.33337Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <h4 className="step__title">Pokrok</h4>
    </div>
  )
}

export default Progress;