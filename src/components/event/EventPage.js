import { connect } from "react-redux";
import Pagiation from "../pagiation/Pagiation";
import ItemEvent from "./ItemEvent";
import { GetEvent } from "../../actions";

import { useEffect } from "react";
import Loading from "../loader/Loading";
import { Link } from "react-router-dom";
const EventPage = (props) => {
  useEffect(() => {
    props.GetEvent();
  }, []);
  const renderItems =
    props.data === undefined
      ? null
      : props.data.map((item) => {
          return (
            <div className="col-lg-6" key={item._id}>
              <ItemEvent
                content={item.content}
                name={item.speaker[0]?.name}
                time={item.timeEvent}
                address={item.address}
              />
            </div>
          );
        });
  return (
    <div>
      <section className="pager-section">
        <div className="container">
          <div className="pager-content text-center">
            <h2>Sự kiện</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Events</span>
              </li>
            </ul>
          </div>
          {/*pager-content end*/}
          <h2 className="page-titlee">DSC</h2>
        </div>
      </section>
      {/*pager-section end*/}
      {props.data === undefined ? (
        <Loading />
      ) : (
        <section className="page-content">
          <div className="container">
            <div className="course-section">
              <div className="courses-list">
                <div className="row">{renderItems}</div>
              </div>
              {/*courses-list end*/}
            </div>
            {/* <Pagiation /> */}
            {/*pagination-end*/}
          </div>
        </section>
      )}
      {/*page-content end*/}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { data: state.events.data };
};

export default connect(mapStateToProps, { GetEvent: GetEvent })(EventPage);
