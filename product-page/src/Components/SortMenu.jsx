import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchData } from "../redux/action";

export const SortMenu = () => {
  const [currValue, setCurValue] = useState("Date Published");

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCurValue(e);
    console.log(e);

    dispatch(fetchData(valfun(e)));
  };

  const valfun = (e) => {
    var val = "";

    switch (e) {
      case "Date Published": {
        return (val = {});
      }
      case "Relevance": {
        return (val = {});
      }
      case "Price : Low to High": {
        return (val = {
          _sort: "published_ads.cars.0.set_price",
          _order: "asc",
        });
      }
      case "Price : High to Low": {
        return (val = {
          _sort: "published_ads.cars.0.set_price",
          _order: "desc",
        });
      }
      case "Distance": {
        return (val = {});
      }
      default: {
        return (val = {});
      }
    }
  };

  return (
    <Menu zIndex={582} closeOnSelect={true}>
      <MenuButton onChange={handleChange} zIndex={582}>
        Sort By : {currValue}
      </MenuButton>
      <MenuList zIndex={582} minWidth="240px">
        <MenuOptionGroup
          onChange={handleChange}
          defaultValue="asc"
          title="Order"
          type="radio"
        >
          <MenuItemOption value="Date Published">Date Published</MenuItemOption>
          <MenuItemOption value="Relevance">Relevance</MenuItemOption>
          <MenuItemOption value="Price : Low to High">
            Price : Low to High
          </MenuItemOption>
          <MenuItemOption value="Price : High to Low">
            Price : High to Low
          </MenuItemOption>
          <MenuItemOption value="Distance">Distance</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
