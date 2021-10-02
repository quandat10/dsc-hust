import { Link } from "react-router-dom";

const ItemEvent = (props) => {
  return (
    <div
      className="course-card wow fadeInLeft"
      data-wow-duration="1000ms"
      data-wow-delay="400ms"
    >
      <div className="d-flex flex-wrap align-items-center">
        <ul className="course-meta">
          <li>
            <img src="assets/img/icon12.png" alt="" />
            {props.time}
          </li>
          <li>11AM to 15PM</li>
        </ul>
        <span>FREE</span>
      </div>
      <h3>
        <Link to="/events/machine-learning">{props.content}</Link>
      </h3>
      <div className="d-flex flex-wrap">
        <div className="posted-by">
          <img src="https://via.placeholder.com/26x26" alt="" />
          <Link to="/events/event1">{props.name}</Link>
        </div>
        <span className="locat">
          <img src="assets/img/loct.png" alt="" />
          {props.address}
        </span>
      </div>
    </div>
  );
};

export default ItemEvent;
