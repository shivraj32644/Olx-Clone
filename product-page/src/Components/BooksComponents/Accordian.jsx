import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useRef } from "react";
import styles from "./styles/Accordian.module.css";
import { useState } from "react";
import { Indeterminate } from "./Indeterminate";
import { LocationChekbox } from "./LocationChekbox";
import { useDispatch } from "react-redux";
import { fetchData } from "../data_redux/action";
import { CheckboxC } from "./Checkbox";
import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { ParamContext } from "../Context/CarParamContext";
import { addParams } from "../param_reducer/action";

const AllBrands = [
  {
    id: 1,
    brand: "Maruti Suzuki",
  },
  {
    id: 2,
    brand: "Hyundai",
  },
  {
    id: 3,
    brand: "Mahindra",
  },
  {
    id: 4,
    brand: "Tata",
  },
  {
    id: 5,
    brand: "Honda",
  },
  {
    id: 6,
    brand: "Ford",
  },
  {
    id: 7,
    brand: "Toyota",
  },
  {
    id: 8,
    brand: "Chevrolet",
  },
  {
    id: 9,
    brand: "Renualt",
  },
  {
    id: 10,
    brand: "Skoda",
  },
];
const AllCarModel = [
  {
    id: 1,
    brand: "Maruti Suzuki",
  },
  {
    id: 2,
    brand: "Hyundai",
  },
  {
    id: 3,
    brand: "Mahindra",
  },
  {
    id: 4,
    brand: "Tata",
  },
  {
    id: 5,
    brand: "Honda",
  },
  {
    id: 6,
    brand: "Ford",
  },
  {
    id: 7,
    brand: "Toyota",
  },
  {
    id: 8,
    brand: "Chevrolet",
  },
  {
    id: 9,
    brand: "Renualt",
  },
  {
    id: 10,
    brand: "Skoda",
  },
];

export const Accordian = () => {
  const { setUpperValue,setLowerValue, setBrand,upp ,low} = useContext(ParamContext);
  const [sliderVal, setSliderVal] = useState([low,upp]);
  const [Check, setCheck] = useState([]);

  var lowVal = sliderVal[0];
  var upperVal = sliderVal[1];

  const handleSlider = () => {
    setUpperValue(upperVal);
    setLowerValue(lowVal);
  };

  const handleCarModel = (id, value, e) => {
    const currIndex = Check.indexOf(value);
    const newChecked = [...Check];
    
    if (currIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currIndex, 1);
    }

    setCheck(newChecked);
    setBrand(newChecked);

  };


  return (
    <Accordion defaultIndex={[0, 1, 2, 3, 4]} allowMultiple>
      <AccordionItem border="0">
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              CATEGORIES
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Indeterminate />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              LOCATION
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <LocationChekbox />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              BUDGET
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box  display={"flex"} justifyContent="space-between" >
            <h3>₹  {new Intl.NumberFormat('en-IN').format(lowVal)}</h3>
            <h3> ₹  { new Intl.NumberFormat('en-IN').format(upperVal)  }</h3>
          </Box>
          <RangeSlider
            onChange={(e) => setSliderVal(e)}
            defaultValue={[0, 1600000]}
            min={0}
            max={1600000}
            step={30}
          >
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="black" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
            {/* <Button>Apply</Button> */}
          </RangeSlider>
          <Button onClick={handleSlider}>Apply</Button>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              ALL BRAND
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <AccordionPanel
          // onChange={handleCarModel}
          mt={5}
          h={170}
          className={styles.track}
          overflow="auto"
          pb={4}
        >
          {AllBrands.map(({ id, brand }) => (
            <CheckboxC
              handleCarModel={handleCarModel}
              id={id}
              key={id}
              value={brand}
            />
          ))}
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              ALL MODELS
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <AccordionPanel
          mt={5}
          h={170}
          className={styles.track}
          overflow="auto"
          pb={4}
        >
          <CheckboxC />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
