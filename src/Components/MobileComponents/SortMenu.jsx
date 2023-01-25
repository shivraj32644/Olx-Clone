import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { MobileParamContext } from "../../Context/MobileParamContext";

export const SortMenu = () => {
  const [currValue, setCurValue] = useState("Date Published");

  const { setDateOrder, setPriceOrder, setDistanceOrder } =
    useContext(MobileParamContext);

  const handleChange = (e) => {
    setCurValue(e);
    valfun(e);
  };

  const valfun = (e) => {
    var val = "";

    switch (e) {
      case "Date Published": {
        setDateOrder("asc");
        break;
      }
      case "Relevance": {
        setPriceOrder("");
        break;
      }
      case "Price : Low to High": {
        setPriceOrder("asc");
        break;
      }
      case "Price : High to Low": {
        setPriceOrder("desc");
        break;
      }
      case "Distance": {
        setDistanceOrder("asc");
        break;
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
