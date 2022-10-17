import { ADD_PARAM, RESET } from "./action";

var initState = {
  globalParams: {
    // _sort: "published_ads.cars.0.set_price",
    // _order: "",
    // "published_ads.cars.0.set_price_lte": "",
    // "published_ads.cars.0.set_price_gte": "",
    // "published_ads.cars.0.car_brand": ["Maruti Suzuki"],
  },
};

export const ParamReducer = (store = initState, { type, payload }) => {

    // console.log(payload, "lsdjfkkkkkkkkk");
  switch (type) {
    case ADD_PARAM: {
      return { ...store, globalParams: {...store.globalParams,...payload }  };
      }
      case RESET: {
          return {...store, globalParams:{}}
          }
    default: {
      return store;
    }
  }
};
