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

export const Accordian = () => {
  const [sliderVal, setSliderVal]=useState([])

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
    <Accordion defaultIndex={[0, 1, 2, 3,4]} allowMultiple>
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
          
        <Indeterminate/>


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
          <UnorderedList
            onClick={handleFocus}
            listStyleType="none"
            spacing={2}
            cursor="pointer"
          >
            <ListItem ref={ref1} opacity="60%">
              Lorem ipsum dolor sit amet
            </ListItem>
            <ListItem opacity="60%">Consectetur adipiscing elit</ListItem>
            <ListItem opacity="60%">Integer molestie lorem at massa</ListItem>
            <ListItem opacity="60%">Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
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
          <RangeSlider onChangeEnd={(e) =>setSliderVal(e) } defaultValue={[0, 199300]} min={0} max={199300} step={30}>
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="black" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
            {/* <Button>Apply</Button> */}
          </RangeSlider>
          <Button onClick={() => console.log(sliderVal) } >Apply</Button>
        </AccordionPanel>
      </AccordionItem>



      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              CAR MODEL
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <AccordionPanel onChange={(e) => console.log(e.target) }
          mt={5}
          h={170}
          className={styles.track}
          overflow="auto"
          pb={4}
        >
          <Checkbox size="lg" iconColor="black" colorScheme='white'>
          Silverado
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Fortwo
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Corvette
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          A4
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Camry
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Model 3
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Volt
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Fortwo
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Accord
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Element
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          CX-9
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          V90
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Charger
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Prius
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          A8
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Land Cruiser
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Escalade
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Grand Caravan
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Civic
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Challenger
          </Checkbox>{" "}
          <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor="black">
          Corvette
          </Checkbox>{" "}
          <br />
        </AccordionPanel>
      </AccordionItem>




      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              BRAND
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
