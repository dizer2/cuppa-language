import React from 'react';

// header
import Header from './sections/header';

// Home section
import Home from './sections/home';

// Ad section
import Ad from './sections/ad';

// styles
import "./styles/application.css";

// props interface
interface IApplicationProps { }

// component applictaion
const Application: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Ad />
    </div>
  );
}

// export component
export default Application;
