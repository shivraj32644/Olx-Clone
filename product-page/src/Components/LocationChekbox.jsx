import React, { useState } from "react";
import { Box, Button, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { BsDashLg } from "react-icons/bs";
import styles from "./styles/Recursive.module.css";
export function LocationChekbox({ familyTree }) {
  const [isVisible, setISVisible] = useState(false);

  const expand = (e) => {
    setISVisible(!isVisible);
    if (!isVisible) {
      
      console.log(e.target.innerText);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <Box 
            display={"flex"}
            alignItems="center"
            width={180}
            textAlign="left"
            onClick={expand}
            pl="5px"
            w={"100%"}
            className= { isVisible? styles.active :styles.default}

          >
            <BsDashLg style={{marginRight:"5px"}} /> {familyTree.name}
          </Box>
        </div>
        {isVisible ? (
          familyTree.children?.map((e) => (
            <div key={e.items+e.name} className={styles.rDiv}>
              <LocationChekbox familyTree={e} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
