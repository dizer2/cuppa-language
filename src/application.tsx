import React from 'react';

// header
import Header from './sections/header';

// Home section
import Home from './sections/home';

// Ad section
import Ad from './sections/ad';

// Reasons section
import Reasons from './sections/reasons';

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
      <Reasons reasons=
      {[
        {
          id: 1,
          title: 'Jedinečný přístup ke všem',
          description: 'Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu.'
        },
        {
          id: 2,
          title: 'Denní konzervace',
          description: 'Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu.'
        },
        {
          id: 3,
          title: "Zpětná vazba po lekci",
          description: 'Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu.',
        },
        {
          id: 4,
          title: "Denní konzervace",
          description: 'Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu.',
        },
        {
          id: 5,
          title: "Jedinečný přístup ke všem",
          description: 'Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu.',
        },
        {
          id: 6,
          title: "Denní konzervace",
          description: 'Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu.',
        }
      ]} />
    </div>
  );
}

// export component
export default Application;
