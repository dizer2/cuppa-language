import React from 'react';

// header
import Header from './sections/header';

// Home section
import Home from './sections/home';

// Ad section
import Ad from './sections/ad';

// Reasons section
import Reasons from './sections/reasons';

// Courses section
import Courses from './sections/courses';

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
      <Reasons 
        reasons=
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
        ]} 
      />
      <Courses
        courses={
          [
            {
              id: 1,
              title: "INSTANT START",
              description: "Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu. Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu.",
              img: "start.png"
            },
            {
              id: 2,
              title: "CUPPA ENGLISH",
              description: "Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu. Quisque non dignissim lectus. Mauris eget. Vivamus sed nibh sit amet felis ignissim lectu.",
              img: "english.png"
            },
            {
              id: 3,
              title: "CUPPA TRAVEL",
              description: "Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu. Quisque non dignissim lectus. Mauris eget pharetra libero. Vivamus sed nibh sit amet felis ignissim lectu.",
              img: "travel.png"
            }
          ]
        }
       />
    </div>
  );
}

// export component
export default Application;
