import React, { useState } from "react";

// styles
import "../styles/header.css";

// import logotype
import Logotype from "../components/Logo/logo";

// navigation
import Navigation from "../components/Navigation/navigation";

// props interface
interface IHeaderProps { };

// header
const Header: React.FunctionComponent<IHeaderProps> = () => {
  // displayNavigation state
  const [displayNavigation, setDisplayNavigation] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container header__container">
        {/* render the logo */}
        <Logotype />

        {/* render the navigation */}
        <Navigation
          displayNavigation={displayNavigation}
          setDisplayNavigation={setDisplayNavigation}
        />

        {/* burger btn */}
        <button className="burger-btn" onClick={() => setDisplayNavigation(true)}>
          <span className="burger-btn__line"></span>
          <span className="burger-btn__line"></span>
          <span className="burger-btn__line"></span>
        </button>
      </div>
    </header>
  );
}

// export component
export default Header;