// react
import React from 'react';

// styles
import "../styles/ad.css";

// IAdProps
export interface IAdProps {}

const Ad: React.FunctionComponent<IAdProps> = () => {
  return (
    <section className="ad">
      <div className="ad__block">
        <div className="line-left">
          <div className="ad__block-upBorder"></div>
        </div>
        <div className="ad__container">
          <div className="ad__content">
            <h2 className="ad__content-title">
              Změň svůj přístup.
            </h2>
            <p className="ad__content-paragraph">
              “Konec nudných hodinovek a dojíždění! Přinášíme inovativní přístup k učení angličtiny pro manažery. Zvedněte svou profesionální úroveň s námi a buďte sebevědomými lídry!”
            </p>
            <a href="#" className="ad__content-link">
              Tyden zdarma
            </a>
          </div>
          <div className="ad__avatar-border">
            <div className="ad__avatar">
              <div className="avatar-image"></div>
            </div>
          </div>
        </div>
        <div className="line-right">
          <div className="ad__block-downBorder"></div>
        </div>
      </div>
    </section>
  );
}

export default Ad;