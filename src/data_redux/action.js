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

// export const fetchData = ()=>(dispatch) => {
//     dispatch(isloading(true))
//     fetch(`http://localhost:5000/data`)
//         .then((res) => res.json())
//         .then((res)=>dispatch(getData(res)))
//         .catch(() => dispatch(isError()))
//         .finally(() => dispatch(isloading(false)))

// }


// pass global params here without destructure
export const fetchData = (params) => (dispatch) => {

  // console.log(params , "params in action ")

  dispatch(isloading(true));
  axiosdata(params)
    .then((res) => dispatch(getData(res.data)))
    .catch(() => dispatch(isError()))
    .finally(() => dispatch(isloading(false)));
};
