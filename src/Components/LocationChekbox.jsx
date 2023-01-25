import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
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

  // const valfun = (e) => {
  //   var val = "";

  //   switch (e) {
  //     case "India": {
  //       // setDateOrder("asc");
  //       break;
  //     }
  //     case "Madhya Pradesh": {
  //       // setPriceOrder("");
  //       break;
  //     }
  //     case "Indore": {
  //       // setPriceOrder("asc");
  //       break;
  //     }
  //     case "Bhopal": {
  //       // setPriceOrder("desc")
  //       break;
  //     }
  //     case "Gwalior": {
  //       // setDistanceOrder("asc");
  //     }
  //     case "Jabalpur": {
  //       // setDistanceOrder("asc");
  //     }
  //     case "Ujjain": {
  //       // setDistanceOrder("asc");
  //     }
  //     case "Maharashtra": {
  //       // setDistanceOrder("asc");
  //     }
  //     case "Uttar Pradesh": {
  //       // setDistanceOrder("asc");
  //     }

  //     default: {
  //       return (val = {});
  //     }
  //   }
  // };

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
            className={isVisible ? styles.active : styles.default}
          >
            <BsDashLg style={{ marginRight: "5px" }} /> {familyTree.name}
          </Box>
        </div>
        {isVisible ? (
          familyTree.children?.map((e) => (
            <div key={e.items + e.name} className={styles.rDiv}>
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
