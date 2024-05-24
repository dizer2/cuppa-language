import React from "react";

// styles
import "../styles/home.css";

// IHomeProps
interface IHomeProps {};

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__content-title">
          <span className="home__title-span">Cuppa Language:</span> 
          <br />
          Investujte do vaší 
          <br />
          manažerské kariéry!
        </h1>

        <a className="home__content-link" href="#">
          Zjistit víc
        </a>
      </div>
    </section>
  );
}

export default Home;