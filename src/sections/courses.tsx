// React
import React from "react";

// styles
import "../styles/courses.css";

// curves
import Curve1 from "../img/curve2.png";
import Curve2 from "../img/curve1.png";

// images
const images = require.context('../img/courses', true);
const imageList = images.keys().map((image: any) => images(image));

// sort images so start image is the first, english is the second 
imageList.sort((a, b) => {
  if (a.includes('start')) {
    return -1;
  } else if (b.includes('start')) {
    return 1;
  } else if (a.includes('english')) {
    return -1;
  } else {
    return 1;
  }
});

// ICourses interface
interface ICourses {
  id: number,
  title: string,
  description: string,
  img: string
}

// ICoursesProps
interface ICoursesProps {
  courses: ICourses[];
}

const Courses: React.FunctionComponent<ICoursesProps> = ({ courses }) => {
  return (
    <section className="courses">
      {/* curves */}
      <img src={Curve1} className="courses__curve" />
      <img src={Curve2} className="courses__curve" />

      <div className="container">
        {/* title */}
        <h2 className="courses__title">Kurzy pro jakýkoli účel a úroveň</h2>

        {/* list */}
        <ul className="courses__list">
          {courses.map((course, index) => (
            <li className="courses__list-item" key={index}>
              <div className="course__top">
                <img className="course__img" src={imageList[index]} alt={course.title} />
                <h4 className="course__title">{course.title}</h4>
              </div>
              <div className="course__bottom">
                <p className="course__description">
                  {course.description}
                </p>
                <a href="#" className="course__link">Uvidět víc</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Courses;