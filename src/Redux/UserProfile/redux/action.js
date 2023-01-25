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

export const fetchData = () => (dispatch) => {
  dispatch(isloading(true));
  fetch(`https://olx-database-3xly.onrender.com/homedata`)
    .then((res) => res.json())
    .then((res) => dispatch(getData(res)))
    .catch(() => dispatch(isError()))
    .finally(() => dispatch(isloading(false)));
};
