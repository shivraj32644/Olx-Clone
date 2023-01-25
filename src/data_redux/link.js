import axios from "axios";

// pass global params here without destructure

export const axiosdata = (params) => {
  return axios.get(`https://olx-database-3xly.onrender.com//allOlxData`, {
    params: params,
  });
};
export const axiosdata2 = () => {
  return axios.get(`https://olx-database-3xly.onrender.com/allOlxData`);
};
