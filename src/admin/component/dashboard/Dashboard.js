import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Switch, useHistory } from "react-router";
import { Link } from "react-router-dom";
import Blog from "../blog/Blog";
import Event from "../event/Event";
import Member from "../member/Member";
import Setting from "../setting/Setting";
import "./Dashboard.css";
const Dashboard = (props) => {
  const [check, setCheck] = useState(1);
  const history = useHistory();
  useEffect(() => {
    if (props.token.length === 0) {
      history.push("/admin/login");
    }
  }, []);
  return (
    <div>
      {props.token.length === 0 ? null : (
        <div className="parent">
          <div className="ui four item stackable tabs menu">
            <Link
              to="/admin/dashboard"
              className={`${check === 1 ? "active" : ""} item`}
              data-tab="definition"
              onClick={() => setCheck(1)}
            >
              Sự kiện
            </Link>

            <Link
              to="/admin/dashboard/blog"
              className={`${check === 2 ? "active" : ""} item`}
              data-tab="examples"
              onClick={() => setCheck(2)}
            >
              Blogs
            </Link>

            <Link
              to="/admin/dashboard/member"
              className={`${check === 3 ? "active" : ""} item`}
              data-tab="usage"
              onClick={() => setCheck(3)}
            >
              Thành viên
            </Link>

            <Link
              to="/admin/dashboard/setting"
              className={`${check === 4 ? "active" : ""} item`}
              data-tab="settings"
              onClick={() => setCheck(4)}
            >
              Cài đặt
            </Link>
          </div>
          <Switch>
            <Route path="/admin/dashboard" exact component={Event} />
            <Route path="/admin/dashboard/blog" exact component={Blog} />
            <Route path="/admin/dashboard/member" exact component={Member} />
            <Route path="/admin/dashboard/setting" exact component={Setting} />
          </Switch>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Dashboard);
