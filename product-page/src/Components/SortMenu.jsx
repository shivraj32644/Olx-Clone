import { Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import React from "react";

export const SortMenu = () => {
  return (
    <Menu zIndex={582} closeOnSelect={true}>
      <MenuButton zIndex={582} >Sort By : Date Published</MenuButton>
      <MenuList zIndex={582} minWidth="240px">
        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
          <MenuItemOption value="date">Date Published</MenuItemOption>
          <MenuItemOption value="relevance">Relevance</MenuItemOption>
          <MenuItemOption value="asc">Price : Low to High</MenuItemOption>
          <MenuItemOption value="desc">Price : High to Low</MenuItemOption>
          <MenuItemOption value="distance">Distance</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
