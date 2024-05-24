// React
import React from 'react';

// Lamp component
import Lamp from '../components/Lamp/lamp';

// styles
import "../styles/reasons.css";

// Reason
interface Reason {
  title: string;
  id: number;
  description: string;
}

// IReasonsProps
interface IReasonsProps {
  // reasons array of objects
  reasons: Reason[];
}

// Reasons
const Reasons: React.FunctionComponent<IReasonsProps> = ({ reasons }) => {
  return (
    <section className='reasons'>
      <div className="container">
        {/* title */}
        <h2 className='reasons__title'>Proč my ?</h2>

        {/* list */}
        <ul className='reasons__list'>
          {reasons.map((reason, index) => (
            <li className='reasons__list-item' key={index}>
              {/* header */}
              <div className="reasons__item-header">
                {/* lamp */}
                <div className="reasons__item-header__lamp-wrap">
                  <Lamp />
                </div>

                {/* count */}
                <span className="reasons__item-header__count">0{reason.id}</span>
              </div>

              {/* title */}
              <h3 className="reasons__item-title">{reason.title}</h3>

              {/* dividing line */}
              <div className="reasons__item-divider"></div>

              {/* description */}
              <p className="reasons__item-description">{reason.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// export
export default Reasons;