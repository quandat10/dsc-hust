import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Login.css";
import ApiPlaceHolder from "../../../apis/ApiPlaceHolder";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { GetToken } from "../../../actions";
const Login = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [query, setQuery] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [err, setErr] = useState(false);

  const initialRender = useRef(true);
  const history = useHistory();

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const loginMethod = async () => {
      setIsLoading(true);
      try {
        await props.GetToken(user, password);
        setIsLoading(false);
        history.push("/admin/dashboard");
      } catch (e) {
        setIsLoading(false);
        setErr(true);
      }
    };
    loginMethod();
  }, [query]);
  const onSubmitChange = (e) => {
    e.preventDefault();
    setQuery({ user, password });
  };

  return (
    <div className="section">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <div className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <form
                  className="ui left icon input"
                  onSubmit={(e) => onSubmitChange(e)}
                >
                  <i className="user icon" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Tên Đăng Nhập"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </form>
              </div>
              <div className="field">
                <form
                  className="ui left icon input"
                  onSubmit={(e) => onSubmitChange(e)}
                >
                  <i className="lock icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </form>
              </div>
              <div
                className="ui fluid large teal submit button "
                onClick={() => setQuery({ user, password })}
              >
                Login
              </div>
              {err === true ? (
                <div>
                  <br />
                  <p style={{ color: "red" }}>
                    Tài khoản hoặc mật khẩu không chính xác
                  </p>
                </div>
              ) : null}
              {isLoading ? <div className="ui active loader"></div> : null}
            </div>
            <div className="ui error message" />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { GetToken })(Login);
