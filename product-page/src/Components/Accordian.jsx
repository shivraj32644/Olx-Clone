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
import { fetchData } from "../redux/action";
import { CheckboxC } from "./Checkbox";

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

export const Accordian = () => {
  const dispatch = useDispatch();
  const [sliderVal, setSliderVal] = useState([]);
  const [Check, setCheck]=useState([])

  const handleSlider = () => {
    const lowVal = sliderVal[0];
    const upperVal = sliderVal[1];

    const params = {
      "published_ads.cars.0.set_price_lte": upperVal,
      "published_ads.cars.0.set_price_gte": lowVal,
    };
    // console.log(params);

    dispatch(fetchData(params));
  };

  const handleCarModel = (id, value ,e) => {
    const currIndex = Check.indexOf(value);
    const newChecked = [...Check];
    if (currIndex === -1) {
      newChecked.push(value)
    }
    else {
      newChecked.splice(currIndex, 1)
    }

    setCheck(newChecked)
    const params = {
      "published_ads.cars.0.car_brand": newChecked,
    };
    dispatch(fetchData(params))
  };

  

  const ref1 = useRef(null);
  function handleFocus(e) {
    ref1.current.className = "active";
    console.log(ref1.current);

    console.log(e.target.style.color);
    if (e.target.style.backgroundColor === "none") {
      e.target.style.backgroundColor = "#c8f8f6";
      e.target.style.color = "black";
      e.target.style.opacity = "100%";
    } else {
      e.target.style.backgroundColor = "none";
      e.target.style.color = "grey";
      // e.target.style.opacity="60%"
    }
  }
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
          <RangeSlider
            onChangeEnd={(e) => setSliderVal(e)}
            defaultValue={[0, 199300]}
            min={0}
            max={199300}
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
            <CheckboxC handleCarModel={handleCarModel} id={id} key={id} value={brand} />
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
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Fiat Beetle
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Ford 1
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Dodge Escalade
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Mazda Prius
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            BMW Countach
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Fiat Silverado
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            BMW A4
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Honda 911
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Maserati ATS
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Lamborghini Roadster
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Fiat Volt
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Ford 911
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Rolls Royce Durango
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Tesla Challenger
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Volkswagen LeBaron
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Bugatti Mustang
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Bugatti Model T
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Smart Wrangler
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Nissan ATS
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Honda Land Cruiser
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
            Volkswagen Taurus
          </Checkbox>{" "}
          <br />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
