import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const States = [
  { id: "1", name: "Madhya Pradesh" },
  { id: "2", name: "Uttar Pradesh" },
  { id: "3", name: "Maharastra" },
];
const Cities = [
  { id: "5", cityId: "1", name: "Bhopal" },
  { id: "6", cityId: "1", name: "Indore" },
  { id: "7", cityId: "2", name: "Lucknow" },
  { id: "8", cityId: "2", name: "Jhansi" },
  { id: "9", cityId: "3", name: "Mumbai" },
  { id: "10", cityId: "3", name: "Pune" },
];
const Neighbourhoods = [
  { id: "11", neighbourhoodId: "5", name: "Bhopal Neighbour 1" },
  { id: "12", neighbourhoodId: "5", name: "Bhopal Neighbour 2" },
  { id: "13", neighbourhoodId: "6", name: "Indore Neighbour 1" },
  { id: "14", neighbourhoodId: "6", name: "Indore Neighbour 2" },
  { id: "15", neighbourhoodId: "7", name: "Lucknow Neighbour 1" },
  { id: "16", neighbourhoodId: "7", name: "Lucknow Neighbour 2" },
  { id: "17", neighbourhoodId: "8", name: "Jhansi Neighbour 1" },
  { id: "18", neighbourhoodId: "8", name: "Jhansi Neighbour 2" },
  { id: "19", neighbourhoodId: "9", name: "Mumbai Neighbour 1" },
  { id: "20", neighbourhoodId: "9", name: "Mumbai Neighbour 2" },
  { id: "21", neighbourhoodId: "10", name: "Pune Neighbour 1" },
  { id: "22", neighbourhoodId: "10", name: "Pune Neighbour 2" },
];

const SelectLocation = ({ handleLocationObj }) => {
  const [input, setInput] = useState({
    location_state: "",
    location_city: "",
    location_neighbourhood: "",
  });
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [neighbourhood, setNeighbourhood] = useState([]);

  useEffect(() => {
    setState(States);
  }, []);

  useEffect(() => {
    handleLocationObj(input);
  }, [state, city, neighbourhood, input]);

  const handleChooseCountry = (id) => {
    if (id === 0) {
      setInput({
        ...input,
        location_state: "",
        location_city: "",
        location_neighbourhood: "",
      });
      setCity([]);
    } else {
      const location_state = States.filter((x) => x.id === id);
      const giveModel = Cities.filter((x) => x.cityId === id);
      setInput({
        ...input,
        location_state: location_state[0].name,
        location_city: "",
        location_neighbourhood: "",
      });
      setCity(giveModel);
    }
  };
  const handleChooseModel = (id) => {
    if (id === 0) {
      setInput({ ...input, location_city: "", location_neighbourhood: "" });
      setNeighbourhood([]);
    } else {
      const location_city = Cities.filter((x) => x.id === id);
      const giveVarient = Neighbourhoods.filter(
        (x) => x.neighbourhoodId === id
      );
      setInput({
        ...input,
        location_city: location_city[0].name,
        location_neighbourhood: "",
      });
      setNeighbourhood(giveVarient);
    }
  };
  const handleChooseVarient = (id) => {
    const location_neighbourhood = Neighbourhoods.filter((x) => x.id === id);
    id === 0
      ? setInput({ ...input, location_neighbourhood: "" })
      : setInput({
          ...input,
          location_neighbourhood: location_neighbourhood[0].name,
        });
  };
  // console.log(input)

  const isErrorBrand = input.location_state === "";
  const isErrorModel = input.location_city === "";
  const isErrorVarient = input.location_neighbourhood === "";

  return (
    <Box>
      <FormControl isInvalid={isErrorBrand} mb="15px">
        <FormLabel fontSize="12px" mb="1px">
          State *
        </FormLabel>
        <Select
          fontSize="12px"
          h="38px"
          borderRadius="2px"
          onChange={(e) => handleChooseCountry(e.target.value)}
        >
          <option value="0"></option>
          {state && state !== undefined
            ? state.map((state) => {
                return (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                );
              })
            : "NO Car data"}
        </Select>

        {input.location_state !== "" ? (
          <FormHelperText fontSize="12px"></FormHelperText>
        ) : (
          <FormErrorMessage mt="5px" fontSize="8px">
            Brand is mandatory. Please complete the required field.
          </FormErrorMessage>
        )}
      </FormControl>

      {city === [] || input.location_state === "" ? (
        ""
      ) : (
        <FormControl isInvalid={isErrorModel} mb="15px">
          <FormLabel fontSize="12px" mb="1px">
            City *
          </FormLabel>
          <Select
            fontSize="12px"
            h="38px"
            borderRadius="2px"
            onChange={(e) => handleChooseModel(e.target.value)}
          >
            <option value="0"></option>
            {city && city !== undefined
              ? city.map((city) => {
                  return (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  );
                })
              : "NO Car data"}
          </Select>

          {input.location_city !== "" ? (
            <FormHelperText fontSize="12px"></FormHelperText>
          ) : (
            <FormErrorMessage mt="5px" fontSize="8px">
              Model is mandatory. Please complete the required field.
            </FormErrorMessage>
          )}
        </FormControl>
      )}

      {neighbourhood === [] ||
      input.location_city === "" ||
      input.location_state === "" ? (
        ""
      ) : (
        <FormControl isInvalid={isErrorVarient} mb="15px">
          <FormLabel fontSize="12px" mb="1px">
            Neighbour *
          </FormLabel>
          <Select
            fontSize="12px"
            h="38px"
            borderRadius="2px"
            onChange={(e) => handleChooseVarient(e.target.value)}
          >
            <option value="0"></option>
            {neighbourhood && neighbourhood !== undefined
              ? neighbourhood.map((neighbourhood) => {
                  return (
                    <option key={neighbourhood.id} value={neighbourhood.id}>
                      {neighbourhood.name}
                    </option>
                  );
                })
              : "NO Car data"}
          </Select>

          {input.location_neighbourhood !== "" ? (
            <FormHelperText fontSize="12px"></FormHelperText>
          ) : (
            <FormErrorMessage mt="5px" fontSize="8px">
              Varient is mandatory. Please complete the required field.
            </FormErrorMessage>
          )}
        </FormControl>
      )}
    </Box>
  );
};
export default SelectLocation;
