import ApiPlaceHolder from "../apis/ApiPlaceHolder";

export const GetEvent = () => {
  return async (dispatch) => {
    const response = await ApiPlaceHolder.get("/v1/events");
    dispatch({
      type: "FETCH_EVENTS",
      payload: response,
    });
  };
};
export const GetMember = () => async (dispatch) => {
  const response = await ApiPlaceHolder.get("/v1/members");
  dispatch({
    type: "FETCH_MEMBERS",
    payload: response,
  });
};
export const GetToken = (username, password) => async (dispatch) => {
  const response = await ApiPlaceHolder.post("/v1/authen/login", {
    username: username,
    password: password,
  });
  dispatch({
    type: "FETCH_LOGIN",
    payload: response,
  });
};
