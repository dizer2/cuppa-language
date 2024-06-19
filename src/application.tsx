import React from 'react';

// styles
import "./styles/application.css";

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

// Plan section
import Plan from './sections/plan';

// Methods section
import Methods from './sections/methods';

// Feedbacks section
import Feedbacks from './sections/feedbacks';

// Team section
import Team from './sections/team';

// Contact section
import Contact from './sections/contact';

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
       <Plan />
       <Methods
          methods={
            [
              {
                id: 1,
                title: "ROZLOŽENÍ UČENÍ",
                description: "Aby si mozek více zapamatoval, je třeba opakovat látku v malých dávkách, ale často.",
                icon: "clock"
              },
              {
                id: 2,
                title: "PŘÍMÉ UČENÍ",
                description: "Cílevědomě a v kontextu opakujeme a probíráme jazyk. Minimalizujeme překlady a zbytečné poučky.",
                icon: "atom"
              },
              {
                id: 3,
                title: "AKTIVNÍ VYBAVOVÁNÍ",
                description: "Cílevědomě a v kontextu opakujeme a probíráme jazyk. Minimalizujeme překlady a zbytečné poučky.",
                icon: "bolt"
              },
              {
                id: 4,
                title: "JAZYK I OBSAH",
                description: "Naše lekce nejsou jen pokec na náhodné téma. Každá z nich má svůj jazykový i obsahový cíl.",
                icon: "pallete"
              },
            ]
          }
       />
       <Feedbacks
          feedbacks={
            [
              {
                id: 1,
                author: "Radka Krosnářová",
                feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac semper lorem, a bibendum erat. Ut non felis lorem. Nunc ut tellus enim. Nunc maximus mauris vel leo hendrerit dignissim. Fusce commodo convallis dui,",
                icon: "radka.png"
              },
              {
                id: 2,
                author: "Radka Krosnářová",
                feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac semper lorem, a bibendum erat. Ut non felis lorem. Nunc ut tellus enim. Nunc maximus mauris vel leo hendrerit dignissim. Fusce commodo convallis dui,",
                icon: "radka.png"
              },
              {
                id: 3,
                author: "Radka Krosnářová",
                feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac semper lorem, a bibendum erat. Ut non felis lorem. Nunc ut tellus enim. Nunc maximus mauris vel leo hendrerit dignissim. Fusce commodo convallis dui,",
                icon: "radka.png"
              }
            ]
          }
       />
       <Team
        members={
          [
            {
              name: "Štěpánka",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac semper lorem, a bibendum erat. Ut non felis lorem. Nunc ut tellus enim. Nunc maximus mauris vel leo hendrerit dignissim. Fusce commodo convallis dui,",
              image: "stepanka.png"
            },
            {
              name: "Štěpánka",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac semper lorem, a bibendum erat. Ut non felis lorem. Nunc ut tellus enim. Nunc maximus mauris vel leo hendrerit dignissim. Fusce commodo convallis dui,",
              image: "tanya.png"
            },
            {
              name: "Štěpánka",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac semper lorem, a bibendum erat. Ut non felis lorem. Nunc ut tellus enim. Nunc maximus mauris vel leo hendrerit dignissim. Fusce commodo convallis dui,",
              image: "john.png"
            },
          ]
        }
       />
       <Contact />
    </div>
  );
}

// export component
export default Application;
