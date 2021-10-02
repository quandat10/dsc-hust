import axios from "axios";

export default axios.create({
  baseURL: "https://dsc-hust-wep-api.herokuapp.com",
  config: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
