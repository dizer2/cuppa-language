// React
import React from "react";

// styles
import "../styles/feedbacks.css";

// IFeedbacks
interface IFeedbacks {
  id: number;
  author: string;
  feedback: string;
  icon: string;
}

// IFeedbacksProps
interface IFeedbacksProps {
  feedbacks: IFeedbacks[];
}

const images = require.context('../img/authors', true);
const imageList = images.keys().map((image: any) => images(image));

console.log(imageList)

// Feedbacks
const Feedbacks: React.FunctionComponent<IFeedbacksProps> = ({ feedbacks }) => {
  return (
    <section className="feedbacks">
      <div className="container">
        <h3 className="feedbacks__title">
          Co o nás myslí ?
        </h3>

        {/* list */}
        <ul className="feedbacks__list">
          {feedbacks.map((feedback: any, index) => (
            <li key={feedback.id} className="feedbacks__item">
              <div className="feedbacks__icon">
                <img src={!imageList[index] ? imageList[0] : imageList[index]} alt={feedback.author} />
              </div>
              <h4 className="feedbacks__author">
                {feedback.author}
              </h4>
              <p className="feedbacks__feedback">
                {feedback.feedback}
              </p>
              <a href="#" className="feedbacks__link">
                Uvidět víc
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* arrows pagination */}
      <div className="feedbacks__pagination">
        <button className="feedbacks__arrow feedbacks__arrow--left">
          {"<"}
        </button>
        <button className="feedbacks__arrow feedbacks__arrow--right">
          {">"}
        </button>
      </div>
    </section>
  )
}

export default Feedbacks;