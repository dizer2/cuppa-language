// React import 
import React from "react";

// ReactSVG
import { ReactSVG } from "react-svg";

// facebook image
import Facebook from "../img/fb.png";

// instagram image
import Instagram from "../img/insta.png";

// styles
import "../styles/footer.css";

// details list
const details = [
  {
    id: 1,
    title: "CUPPA LANGUAGE s.r.o.",
    icon: "flat.svg"
  },
  {
    id: 2,
    title: "IČ: 17930472",
    icon: "tick.svg"
  },
  {
    id: 3,
    title: "DIČ: 17930472",
    icon: "tick.svg"
  },
  {
    id: 4,
    title: "V Kopečku 169 50003 Hradec Králové",
    icon: "location.svg"
  }
];

// contacts list
const contacts = [
  {
    id: 1,
    title: "+420 000 000 000",
    icon: "phone.svg"
  },
  {
    id: 2,
    title: "email@gmail.cz",
    icon: "mail.svg"
  }
];

// Footer component
const Footer: React.FC = (() => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          {/* logo */}
          <div className="footer__info-logo">
            <ReactSVG src="./svg/logo.svg" />
            <p className="footer__info-logo__text">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Praesent ac semper lorem, a <br /> bibendum erat. Ut non felis lorem. Nunc ut <br /> tellus enim. Nunc.
            </p>
          </div>

          {/* navigation */}
          <ul className="footer__list navigation">
            <li className="footer__list-item"><h1 className="footer__list-title">Navigace</h1></li>
            <li className="footer__list-item"><a href="https://cuppa-language.vercel.app/" className="footer__list-text">Proč my</a></li>
            <li className="footer__list-item"><a href="https://cuppa-language.vercel.app/" className="footer__list-text">Služby</a></li>
            <li className="footer__list-item"><a href="https://cuppa-language.vercel.app/" className="footer__list-text">Naše metody</a></li>
          </ul>

          {/* details */}
          <ul className="footer__list details">
            {/* details map */}
            {details.map(item => {
              return (
                <li className="footer__list-item" key={item.id}>
                  <ReactSVG className="footer__list-icon" src={"./svg/" + item.icon} />
                  <h3 className="footer__list-text">{item.title}</h3>
                </li>
              )
            })}
          </ul>

          {/* contacts */}
          <div className="footer__contacts">
            <ul className="footer__list contacts">
              {/* contacts map */}
              {contacts.map(contact => {
                return (
                  <li className="footer__list-item" key={contact.id}>
                    <ReactSVG className="footer__list-icon" src={"./svg/" + contact.icon} />
                    <h3 className="footer__list-text">{contact.title}</h3>
                  </li>
                );
              })}
            </ul>
            <div className="footer__contacts-social">
              <a href="https://www.facebook.com/"><img className="footer__contacts-link" src={Facebook} alt="fb" /></a>
              <a href="https://www.instagram.com/"><img className="footer__contacts-link" src={Instagram} alt="insta" /></a>
            </div>
          </div>
        </div>
        <div className="footer__down">
          <div className="footer__down-year">
            <h5 className="footer__down-year__text">
              © {new Date().getFullYear()} Všechna práva vyhrazena
            </h5>
          </div>
          <div className="footer__down-company">
            <h5 className="footer__down-company__text">
              Návrh a výroba webu - 
            </h5>
            <ReactSVG src="./svg/company.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
});

// export 
export default Footer;