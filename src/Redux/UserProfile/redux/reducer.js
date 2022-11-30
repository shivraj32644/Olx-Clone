import { ERROR, FETCH_DATA, LOADING, LINK } from "./action";

const initState = {
  loading: false,
  error: false,
  url: "",
  data: [],
};

export const Homereducer = (store = initState, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return { ...store, loading: true };
    }
    case ERROR: {
      return (store.error = true);
    }
    case FETCH_DATA: {
      return { ...store, data: payload };
    }
    case LINK: {
      return { ...store, url: payload };
    }
    default: {
      return store;
    }
  }
};
