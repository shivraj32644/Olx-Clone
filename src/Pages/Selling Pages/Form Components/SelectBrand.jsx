import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Brands = [
  { id: "1", name: "Honda" },
  { id: "2", name: "Toyota" },
  { id: "3", name: "BMW" },
];
const Models = [
  { id: "5", modelId: "1", name: "Honda Model 1" },
  { id: "6", modelId: "1", name: "Honda Model 2" },
  { id: "7", modelId: "2", name: "Toyota Model 1" },
  { id: "8", modelId: "2", name: "Toyota Model 2" },
  { id: "9", modelId: "3", name: "BMW Model 1" },
  { id: "10", modelId: "3", name: "BMW Model 2" },
];
const Varients = [
  { id: "11", varientId: "5", name: "Honda M1 V1" },
  { id: "12", varientId: "5", name: "Honda M1 V2" },
  { id: "13", varientId: "6", name: "Honda M2 V1" },
  { id: "14", varientId: "6", name: "Honda M2 V2" },
  { id: "15", varientId: "7", name: "Toyota M1 V1" },
  { id: "16", varientId: "7", name: "Toyota M1 V2" },
  { id: "17", varientId: "8", name: "Toyota M2 V1" },
  { id: "18", varientId: "8", name: "Toyota M2 V2" },
  { id: "19", varientId: "9", name: "BMW M1 V1" },
  { id: "20", varientId: "9", name: "BMW M1 V2" },
  { id: "21", varientId: "10", name: "BMW M2 V1" },
  { id: "22", varientId: "10", name: "BMW M2 V2" },
];

const SelectBrand = ({ handleBrandObj }) => {
  const [input, setInput] = useState({
    car_name: "",
    car_model: "",
    car_varient: "",
  });
  const [brand, setBrand] = useState([]);
  const [model, setModel] = useState([]);
  const [varient, setVarient] = useState([]);

  useEffect(() => {
    setBrand(Brands);
  }, []);

  useEffect(() => {
    handleBrandObj(input);
  }, [brand, model, varient, input]);

  const handleChooseCountry = (id) => {
    if (id === 0) {
      setInput({ ...input, car_name: "", car_model: "", car_varient: "" });
      setModel([]);
    } else {
      const car_name = Brands.filter((x) => x.id === id);
      const giveModel = Models.filter((x) => x.modelId === id);
      setInput({
        ...input,
        car_name: car_name[0].name,
        car_model: "",
        car_varient: "",
      });
      setModel(giveModel);
    }
  };
  const handleChooseModel = (id) => {
    if (id === 0) {
      setInput({ ...input, car_model: "", car_varient: "" });
      setVarient([]);
    } else {
      const car_model = Models.filter((x) => x.id === id);
      const giveVarient = Varients.filter((x) => x.varientId === id);
      setInput({ ...input, car_model: car_model[0].name, car_varient: "" });
      setVarient(giveVarient);
    }
  };
  const handleChooseVarient = (id) => {
    const car_varient = Varients.filter((x) => x.id === id);
    id === 0
      ? setInput({ ...input, car_varient: "" })
      : setInput({ ...input, car_varient: car_varient[0].name });
  };
  // console.log(input)

  const isErrorBrand = input.car_name === "";
  const isErrorModel = input.car_model === "";
  const isErrorVarient = input.car_varient === "";

  return (
    <Box>
      <FormControl isInvalid={isErrorBrand} mb="15px">
        <FormLabel fontSize="12px" mb="1px">
          Brand *
        </FormLabel>
        <Select
          fontSize="12px"
          h="38px"
          borderRadius="2px"
          onChange={(e) => handleChooseCountry(e.target.value)}
        >
          <option value="0"></option>
          {brand && brand !== undefined
            ? brand.map((brand) => {
                return (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                );
              })
            : "NO Car data"}
        </Select>

        {input.car_name !== "" ? (
          <FormHelperText fontSize="12px"></FormHelperText>
        ) : (
          <FormErrorMessage mt="5px" fontSize="8px">
            Brand is mandatory. Please complete the required field.
          </FormErrorMessage>
        )}
      </FormControl>

      {model === [] || input.car_name === "" ? (
        ""
      ) : (
        <FormControl isInvalid={isErrorModel} mb="15px">
          <FormLabel fontSize="12px" mb="1px">
            Model *
          </FormLabel>
          <Select
            fontSize="12px"
            h="38px"
            borderRadius="2px"
            onChange={(e) => handleChooseModel(e.target.value)}
          >
            <option value="0"></option>
            {model && model !== undefined
              ? model.map((model) => {
                  return (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  );
                })
              : "NO Car data"}
          </Select>

          {input.car_model !== "" ? (
            <FormHelperText fontSize="12px"></FormHelperText>
          ) : (
            <FormErrorMessage mt="5px" fontSize="8px">
              Model is mandatory. Please complete the required field.
            </FormErrorMessage>
          )}
        </FormControl>
      )}

      {varient === [] || input.car_model === "" || input.car_name === "" ? (
        ""
      ) : (
        <FormControl isInvalid={isErrorVarient} mb="15px">
          <FormLabel fontSize="12px" mb="1px">
            Varient *
          </FormLabel>
          <Select
            fontSize="12px"
            h="38px"
            borderRadius="2px"
            onChange={(e) => handleChooseVarient(e.target.value)}
          >
            <option value="0"></option>
            {varient && varient !== undefined
              ? varient.map((varient) => {
                  return (
                    <option key={varient.id} value={varient.id}>
                      {varient.name}
                    </option>
                  );
                })
              : "NO Car data"}
          </Select>

          {input.car_varient !== "" ? (
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
export default SelectBrand;
