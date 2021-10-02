import { connect } from "react-redux";
import { useState, useRef, useEffect } from "react";
import ApiPlaceHolder from "../../../apis/ApiPlaceHolder";

const Member = (props) => {
  const initial = useRef(true);

  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [gmail, setGmail] = useState("");
  const [role, setRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gender, setGender] = useState("male");
  const [data, setData] = useState("");

  const onSubmitChange = (e) => {
    e.preventDefault();
    setData({
      name,
      profile,
      gmail,
      role,
      imageUrl,
      gender,
    });
  };

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const token = props.token.data;
    console.log(data);
    const fectchPostEvent = async () => {
      const res = await ApiPlaceHolder.post(
        "/v1/members",
        {
          name: data.name,
          profile: data.profile,
          gmail: data.gmail,
          role: data.role,
          imageUrl: data.imageUrl,
          gender: data.gender,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
      console.log(res);
    };
    fectchPostEvent();
  }, [data]);
  return (
    <div className="event col-lg-6">
      {props.token.data.length === 0 ? null : (
        <form className="ui form">
          <div className="field">
            <label>Họ và tên</label>
            <input
              type="text"
              name="first-name"
              placeholder="Họ và tên"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Giới thiệu bản thân</label>
            <input
              type="text"
              name="last-name"
              placeholder="Giới thiệu bản thân"
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>
          <div className="field">
            <label>gmail</label>
            <input
              type="text"
              name="last-name"
              placeholder="gmail"
              onChange={(e) => setGmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Vai trò</label>
            <input
              type="text"
              name="last-name"
              placeholder="Vai trò"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Link Ảnh</label>
            <input
              type="text"
              name="last-name"
              placeholder="Link Ảnh"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="grouped fields">
            <label>Giới tính</label>
            <div className="field">
              <div
                className="ui radio checkbox"
                onChange={(e) => setGender(e.target.value)}
              >
                <input
                  value="male"
                  type="radio"
                  name="gender"
                  defaultChecked="checked"
                />
                <label>Nam</label>
              </div>
            </div>
            <div className="field">
              <div
                className="ui radio checkbox"
                onChange={(e) => setGender(e.target.value)}
              >
                <input value="female" type="radio" name="gender" />
                <label>Nữ</label>
              </div>
            </div>
          </div>

          <button
            className="ui button"
            type="submit"
            onClick={(e) => onSubmitChange(e)}
          >
            Tạo mới
          </button>
        </form>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Member);
