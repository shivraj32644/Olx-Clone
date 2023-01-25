import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
// import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../data_redux/action";

export const ParamContext = createContext();

export const ParamContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  var Price = searchParams.get("_order");
  var upp = searchParams.get("published_ads.cars.0.set_price_lte");
  var low = searchParams.get("published_ads.cars.0.set_price_gte");
  var brd = searchParams.getAll("published_ads.cars.0.car_brand");
  var cName = searchParams.getAll("published_ads.cars.0.car_name");

  // STATES FOR SORTING
  const [DateOrder, setDateOrder] = useState("");
  const [PriceOrder, setPriceOrder] = useState(Price);
  const [setDistanceOrder] = useState("");

  // STATES FOR SLIDER
  const [lowerValue, setLowerValue] = useState(low);
  const [upperValue, setUpperValue] = useState(upp);

  // STATES FOR CARBRAND

  const [brand, setBrand] = useState(brd);
  const [carName, setCarName] = useState(cName);

  // STATES FOR LIMIT

  // const [limit, setLimit] = useState(30)

  // ===========================================================================================================================================

  // THIS IS FOR SEARCH PARAMS
  var searchParamObject = {};
  useEffect(() => {
    if (PriceOrder) {
      searchParamObject._sort = "published_ads.cars.0.set_price";
      searchParamObject._order = PriceOrder;
    }
    if (lowerValue) {
      searchParamObject["published_ads.cars.0.set_price_gte"] = lowerValue;
    }
    if (upperValue) {
      searchParamObject["published_ads.cars.0.set_price_lte"] = upperValue;
    }

    if (lowerValue && upperValue) {
      searchParamObject["published_ads.cars.0.set_price_lte"] = upperValue;
      searchParamObject["published_ads.cars.0.set_price_gte"] = lowerValue;
    }
    if (brand) {
      searchParamObject["published_ads.cars.0.car_brand"] = brand;
    }

    if (carName) {
      searchParamObject["published_ads.cars.0.car_name"] = carName;
    }

    if (PriceOrder && lowerValue && upperValue && brand && carName) {
      searchParamObject._sort = "published_ads.cars.0.set_price";
      searchParamObject._order = PriceOrder;
      searchParamObject["published_ads.cars.0.set_price_lte"] = upperValue;
      searchParamObject["published_ads.cars.0.set_price_gte"] = lowerValue;
      searchParamObject["published_ads.cars.0.car_brand"] = brand;
      searchParamObject["published_ads.cars.0.car_name"] = carName;
    }

    setSearchParams(searchParamObject);
  }, [PriceOrder, upperValue, lowerValue, brand, carName]);

  // ===========================================================================================================================================

  // THIS IS FOR AXIOS
  var axiosObject = {};

  if (PriceOrder) {
    axiosObject._sort = "published_ads.cars.0.set_price";
    axiosObject._order = PriceOrder;
  }
  if (lowerValue || upperValue) {
    axiosObject["published_ads.cars.0.set_price_lte"] = upperValue;
    axiosObject["published_ads.cars.0.set_price_gte"] = lowerValue;
  }
  if (brand) {
    axiosObject["published_ads.cars.0.car_brand"] = brand;
  }

  if (lowerValue && upperValue) {
    axiosObject["published_ads.cars.0.set_price_lte"] = upperValue;
    axiosObject["published_ads.cars.0.set_price_gte"] = lowerValue;
  }

  // if (limit) {
  //     axiosObject._limit=limit
  // }
  if (carName) {
    axiosObject["published_ads.cars.0.car_name"] = carName;
  }

  if (PriceOrder && lowerValue && upperValue && brand && carName) {
    axiosObject._sort = "published_ads.cars.0.set_price";
    axiosObject._order = PriceOrder;
    axiosObject["published_ads.cars.0.set_price_lte"] = upperValue;
    axiosObject["published_ads.cars.0.set_price_gte"] = lowerValue;
    axiosObject["published_ads.cars.0.car_brand"] = brand;
    axiosObject["published_ads.cars.0.car_name"] = carName;
  }

  // ===========================================================================================================================================

  // DISPATCHING NEW UPDATED PARAMS
  // if (PriceOrder) {
  //   console.log(PriceOrder);
  // }

  useEffect(() => {
    dispatch(fetchData(axiosObject));
  }, [PriceOrder, lowerValue, upperValue, brand, carName]);

  var dispatchValues = {
    DateOrder,
    setDateOrder,
    setPriceOrder,
    setDistanceOrder,
    setLowerValue,
    setUpperValue,
    axiosObject,
    setBrand,
    upp,
    low,
    setCarName,
    // setLimit
  };
  return (
    <ParamContext.Provider value={dispatchValues}>
      {children}
    </ParamContext.Provider>
  );
};

//create state for value
// create keys
// use search params to set value in state
// create an object for both search params and axios
