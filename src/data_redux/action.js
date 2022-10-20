import { axiosdata } from "./link";

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const FETCH_DATA = "FETCH_DATA";
export const LINK = "LINK";

export const isloading = (payload) => ({
  type: LOADING,
  payload,
});

export const isError = () => ({
  type: ERROR,
});

export const getData = (payload) => ({
  type: FETCH_DATA,
  payload,
});


export const fetchData = (params) => (dispatch) => {


  dispatch(isloading(true));
  axiosdata(params)
    .then((res) => dispatch(getData(res.data)))
    .catch(() => dispatch(isError()))
    .finally(() => dispatch(isloading(false)));
};
