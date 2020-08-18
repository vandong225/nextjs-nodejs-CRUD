import axios from "axios";

const URL = "http://localhost:3000";

export const getAll = () => {
  try {
    return axios.get(`${URL}/api/v1/student`).then((res) => {
      console.log(res);
      return res.data;
    });
  } catch (err) {
    console.log(err);
  }
};
