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
import styles from './styles/Accordian.module.css'

export const Accordian = () => {
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
    <Accordion defaultIndex={[0,1,2,3]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              CATEGORIES
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
          <RangeSlider defaultValue={[0, 240]} min={0} max={300} step={30}>
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="black" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
          </RangeSlider>
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

       
        <AccordionPanel w="95%" pb={4}>
        <h2>TOP BRAND</h2>
          <Checkbox mt={4} size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor='white' >
            Checkbox
          </Checkbox> <br />
          <Checkbox size="lg" colorScheme="black.200" iconColor='white' >
            Checkbox
          </Checkbox> <br />
          <Checkbox mb={5} size="lg" colorScheme="black.200" iconColor='white' >
            Checkbox
          </Checkbox> <br />
          
        <h2 >ALL BRAND</h2>
         
          

        <AccordionPanel mt={5}  h={170} className={styles.track} overflow="auto" pb={4}>
        <Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br /><Checkbox size="lg"colorScheme="black.200" iconColor='black' >
            Checkbox
          </Checkbox> <br />
        </AccordionPanel>




          
        </AccordionPanel>
      </AccordionItem>
      
    </Accordion>
  );
};
