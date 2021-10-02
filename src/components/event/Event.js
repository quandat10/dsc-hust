import { GetEvent } from "../../actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import ItemEvent from "./ItemEvent";
import Loading from "../loader/Loading";

const Event = (props) => {
  useEffect(() => {
    props.GetEvent();
  }, []);
  const renderItems = props.data?.slice(0, 3).map((item) => {
    return (
      <ItemEvent
        key={item._id}
        content={item.content}
        name={item.speaker[0]?.name}
        time={item.timeEvent}
        address={item.address}
      />
    );
  });
  return (
    <section className="course-section">
      {props.data === undefined ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="find-course">
                <div className="sec-title">
                  <h2>Sự kiện</h2>
                  <p></p>
                  <h3>
                    <img src="assets/img/icon11.png" alt="" />
                    Điện thoại:
                    <strong>+84 378 283 131</strong>
                  </h3>
                </div>
                {/*sec-title end*/}
                <div className="course-img">
                  <img src="assets/img/img_1.png" alt="" />
                </div>
                {/*course-img end*/}
              </div>
              {/*find-course end*/}
            </div>
            <div className="col-lg-6">
              <div className="courses-list">
                {renderItems}
                {/*course-card end*/}
              </div>
              {/*courses-list end*/}
              <a href="events.html" className="all-btn">
                All Events <i className="fa fa-long-arrow-alt-right" />
              </a>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
const mapStateToProps = (state) => {
  return { data: state.events.data };
};

export default connect(mapStateToProps, { GetEvent: GetEvent })(Event);
