import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const SortMenu = () => {
  const [currValue, setCurValue] = useState("Date Published");

  const handleChange = (e) => {
    setCurValue(e);

    // console.log(valfun(e));

    

  };

  const valfun = (e) => {
    var val = "";

    switch (e) {
      case "Date Published": {
        return (val = "date");
      }
      case "Relevance": {
        return (val = "relevance");
      }
      case "Price : Low to High": {
        return (val = "asc");
      }
      case "Price : High to Low": {
        return (val = "desc");
      }
      case "Distance": {
        return (val = "distance");
      }
      default: {
        return (val = "date");
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
