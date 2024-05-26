import React, { SVGProps } from "react";

const Arrow: React.FunctionComponent<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg className="arrowSVG" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M24.0498 9.8833L34.1665 20L24.0498 30.1166" stroke="#2B2B2B" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.8335 20H33.8835" stroke="#2B2B2B" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Arrow;