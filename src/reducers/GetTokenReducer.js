export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_LOGIN":
      return action.payload;
    default:
      return state;
  }
};
