// import React
import React from "react";

// ReactSVG
import { ReactSVG } from "react-svg";

// import cups images
import Cup1 from "../img/cup1.png";
import Cup2 from "../img/cup2.png";

// styles
import "../styles/team.css";

// members inteface
interface Members {
  name: string;
  description: string;
  image: string;
}

// Props for teams
interface ITeamProps {
  members: Members[];
}

const images = require.context('../img/members', true);
const imageList = images.keys().map((image: any) => images(image));

// sort imageList so the stepanks is the first, tanya is the second
imageList.sort((a: any, b: any) => {
  if (a.includes('stepan')) {
    return -1;
  }
  if (b.includes('stepan')) {
    return 1;
  }
  if (a.includes('tanya')) {
    return -1;
  }
  if (b.includes('tanya')) {
    return 1;
  }
  return 0;
});

// Team component
const Team: React.FunctionComponent<ITeamProps> = ({ members }) => {
  return (
    <section className="team">
      <div className="container">
        {/* cups */}
        <img src={Cup1} alt="cup" className="team__cup" />
        <img src={Cup2} alt="cup" className="team__cup" />

        <h1 className="team__title">
          Náš tým
        </h1>
        <ul className="team__members">
          {members.map((member, index) => (
            <li key={index} className="team__member">
              <img src={!imageList[index] ? imageList[0] : imageList[index]} alt={member.name} className="team__member-image" />
              <h2 className="team__member-name">
                {member.name}
              </h2>
              <p className="team__member-description">
                {member.description}
              </p>
              {/* Envelope button */}
              <button className="team__email">
                <ReactSVG src="./svg/envelope.svg" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// export
export default Team;