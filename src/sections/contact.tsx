// React
import React from "react";

// import photos
import BgCup from "../img/bg-cup.png";
import Worker1 from "../img/worker1.png";
import Worker2 from "../img/worker2.png";
import Worker3 from "../img/worker3.png";

// styles
import "../styles/contact.css";

const Contact: React.FunctionComponent = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__content">
          <h1 className="contact__content-title">
            Zarezervuj si svůj týden <br /> 
            <span>ZDARMA !</span>
          </h1>
          <form action="#" className="contact__content-form">
            <input placeholder="Jmeno" type="text" className="contact__form-input" />
            <input placeholder="Příjmení" type="text" className="contact__form-input" />
            <input placeholder="Telefonní číslo" type="number" className="contact__form-input" />
            <input placeholder="E-mail" type="email" className="contact__form-input" />

            <button type="submit" className="contact__form-button">
              Odeslat
            </button>
          </form>
        </div>
        <div className="contact__image">
          <img src={BgCup} alt="BgCup" className="contact__image-cup-img" />
          <div className="contact__image-people">
            <img src={Worker1} alt="Worker1" className="contact__image-people-img" />
            <div className="contact__image-people__col">
              <img src={Worker2} alt="Worker2" className="contact__image-people-img" />
              <img src={Worker3} alt="Worker3" className="contact__image-people-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export
export default Contact;