import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Icon,
  Img,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import { CategoryDataContext } from "../../Context/AuthContext/SellingDetail";
import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { TbCameraPlus } from "react-icons/tb";
import SelectBrand from "./Form Components/SelectBrand";
import AddTitle from "./Form Components/AddTitle";
import handleAddSellPosts from "./axios.jsx";
import KmInput from "./Form Components/KmInput";
import YearInput from "./Form Components/YearInput";
import DescriptionInput from "./Form Components/DescriptionInput";
import SelectLocation from "./Form Components/SelectLocation";
import PriceInput from "./Form Components/PriceInput";
import SellPagesFooter from "./Form Components/SellPagesFooter";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import { OnError, OnLoading, OnSuccess } from "../../Redux/UserProfile/Action";
// import { useDispatch, useSelector } from "react-redux";

const SellingForm = () => {
  const [user, setUser] = useState([]);
  const { categoryObj } = useContext(CategoryDataContext);
  const { category, subcategory } = categoryObj;
  const navigate = useNavigate();

  let curId = Number(localStorage.getItem("currentUserId"));

  const [sellingFormObj, setSellingFormObj] = useState({
    ad_active: "active",
    user_id: "",
    ad_id: "",
    date_from: "Oct 18, 22",
    date_to: "Nov 19, 22 ",
    category: "",
    category_type: "",
    car_name: "",
    name: "",
    car_model: "",
    car_varient: "",
    year_buy: null,
    fuel: "",
    transmission: "",
    km_driven: null,
    no_of_oweners: null,
    key_feature: "",
    description: "",
    set_price: null,
    images: {
      img1: "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-08.jpg",
      img2: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Scorpio-N-300620221053.jpg&w=872&h=578&q=75&c=1",
      img3: "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-07.jpg",
    },
    ads_location: {
      state: "",
      city: "",
      neighbour: "",
    },
    likes: 0,
    views: 1,
    inspected: true,
  });
  // const [selectedImage,setSelectedImages]=useState()
  const [brandObj, setBrandObj] = useState({});
  const [locationObj, setLocationObj] = useState({});

  const [inputKm, setInputKm] = useState("");
  const [inputKeyFeature, setInputKeyFeature] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const [textAreaCountKeyFeature, settextAreaCountKeyFeature] = useState(0);
  const [textAreaCountDescription, settextAreaCountDescription] = useState(0);

  const [errorKeyFeature, setErrorKeyFeature] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorKm, setErrorKm] = useState(false);
  const [errorYear, setErrorYear] = useState(false);
  const [errorPrice, setErrorPrice] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    //  let numValue=-1
    //  name=="year_buy"?numValue=Number(value):
    //  name=="km_driven"? numValue=Number(value):
    //  name=="set_price"? numValue=Number(value):

    name === "set_price"
      ? setInputPrice(value)
      : name === "year_buy"
      ? setInputYear(value)
      : name === "km_driven"
      ? setInputKm(value)
      : name === "key_feature"
      ? setInputKeyFeature(value)
      : name === "description"
      ? setInputDescription(value)
      : name === "key_feature"
      ? settextAreaCountKeyFeature(value.length)
      : name === "description"
      ? settextAreaCountDescription(value.length)
      : textAreaCountKeyFeature > 0 &&
        textAreaCountKeyFeature < 10 &&
        name === "key_feature"
      ? setErrorKeyFeature(true)
      : setErrorKeyFeature(false);
    textAreaCountDescription > 0 &&
    textAreaCountDescription < 10 &&
    name === "description"
      ? setErrorDescription(true)
      : setErrorDescription(false);
    name === "km_driven" && inputKm === ""
      ? setErrorKm(true)
      : setErrorKm(false);
    name === "year_buy" && inputYear === ""
      ? setErrorYear(true)
      : setErrorYear(false);
    name === "set_price" && inputPrice === ""
      ? setErrorPrice(true)
      : setErrorPrice(false);

    name === "year_buy" || name === "km_driven" || name === "set_price"
      ? setSellingFormObj({ ...sellingFormObj, [name]: value })
      : setSellingFormObj({ ...sellingFormObj, [name]: value });
  };
  // console.log(sellingFormObj);

  const fuelBoxStyle = {
    h: "32px",
    w: "max-content",
    fontSize: "12px",
    padding: "8px 16px 8px 16px",
    margin: "0 8px 8px 0",
    _hover: { bg: "#C8F8F6" },
    border: "1px solid #cecece",
    borderRadius: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    bg: "#ffffff",
    fontWeight: "200px",
  };
  // need local storage for user_id after login --------------install uuidv4()-------------------<
  const user_id = curId;

  useEffect(() => {
    axios
      .get(`https://olx-database-3xly.onrender.com/data/${user_id}`)
      .then((res) => setUser(res.data));

    setSellingFormObj({
      ...sellingFormObj,
      category: category,
      category_type: subcategory,
      user_id: user_id,
      ad_id: uuidv4(),
    });
  }, []);

  const handleFormData = (e) => {
    const { name, value, innerText } = e.target;
    console.log(name, value, innerText, e.target);
    let val = name === "no_of_oweners" ? value : innerText;

    setSellingFormObj({ ...sellingFormObj, [name]: val });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleAddSellPosts(sellingFormObj, user);
    navigate("/");
  };

  const handleBrandObj = (brandInput) => {
    setBrandObj(brandInput);
    setSellingFormObj({
      ...sellingFormObj,
      name: brandObj.name,
      car_model: brandObj.car_model,
      car_varient: brandObj.car_varient,
    });
  };

  const handleLocationObj = (locationInput) => {
    setLocationObj(locationInput);
    setSellingFormObj({
      ...sellingFormObj,
      ads_location: {
        city: "Bhopal",
        state: locationObj.state,
        neighbour: locationObj.neighbour,
      },
    });
  };

  // const selectImgFile=(e)=>{
  // const selectedFiles=e.target.files
  // const selectedFilesArray=Array.from(selectedFiles)
  // const imgArray=selectedFilesArray.map((file)=>{
  // return URL.createObjectURL(file)
  // })
  // setSelectedImages(imgArray)
  // console.log("---------------->"+ selectedImage)
  // }

  return (
    <Box>
      <Box position="fixed" zIndex={1} top={0} w="100%" h="48px" bg="#EDF2F7">
        <Box ml={15} mr={20} my="10px" h="28px" w="auto">
          <Link to="/sellcategories">
            {" "}
            <ArrowBackIcon w="32px" />
          </Link>
        </Box>
      </Box>
      <VStack
        fontFamily="Arial"
        color="#002F34"
        w="760px"
        display="block"
        margin="auto"
        mt={14}
        marginBottom="40px"
      >
        <Box
          color="#002F34"
          fontSize="24px"
          fontWeight="bold"
          textAlign="center"
        >
          POST YOUR ADS
        </Box>
        <VStack
          fontFamily="sans-serif"
          fontSize="16px"
          border="1px solid #cecece"
          borderRadius="5px"
          display="block"
        >
          <Box
            fontSize="16px"
            fontWeight="bold"
            lineHeight="24px"
            my="5px"
            px="16px"
            color="#002F34"
          >
            SELECTED CATEGORY
          </Box>
          <Box fontSize="9px" pb="16px" px="16px" color="#002F34">
            {category} / {subcategory}{" "}
            <ChakraLink textDecoration="underline" fontWeight={700} ml={3}>
              Change
            </ChakraLink>
          </Box>
          <hr />
          <FormControl>
            <Box w="430px" py="30px" px="32px">
              <Box
                fontSize="16px"
                fontWeight="bold"
                lineHeight="24px"
                my="5px"
                pb="16px"
              >
                INCLUDE SOME DETAILS
              </Box>
              <SelectBrand handleBrandObj={handleBrandObj} />
              <YearInput
                isError={errorYear}
                input={inputYear}
                handleInputChange={handleInputChange}
              />

              <Box mb="15px">
                <Box fontSize="12px" mb="1px">
                  Fuel *
                </Box>
                <Box
                  fontSize="12px"
                  display="flex"
                  flexWrap="wrap"
                  onClick={handleFormData}
                >
                  <Button {...fuelBoxStyle} name="fuel">
                    CNG & Hybrid
                  </Button>
                  <Button {...fuelBoxStyle} name="fuel">
                    Diesel
                  </Button>
                  <Button {...fuelBoxStyle} name="fuel">
                    LPG
                  </Button>
                  <Button {...fuelBoxStyle} name="fuel">
                    Petrol
                  </Button>
                  <Button {...fuelBoxStyle} name="fuel">
                    Electric
                  </Button>
                </Box>
              </Box>

              <Box mb="15px">
                <Box fontSize="12px" mb="1px">
                  Transmission *
                </Box>
                <Box
                  fontSize="12px"
                  display="flex"
                  flexWrap="wrap"
                  onClick={handleFormData}
                >
                  <Button {...fuelBoxStyle} name="transmission">
                    Automatic
                  </Button>
                  <Button {...fuelBoxStyle} name="transmission">
                    Manual
                  </Button>
                </Box>
              </Box>

              <KmInput
                handleInputChange={handleInputChange}
                input={inputKm}
                isError={errorKm}
              />

              <Box mb="15px">
                <Box fontSize="12px" mb="1px">
                  No. of owners *
                </Box>
                <Box
                  fontSize="12px"
                  display="flex"
                  flexWrap="wrap"
                  onClick={handleFormData}
                >
                  <Button {...fuelBoxStyle} name="no_of_oweners" value={1}>
                    1st
                  </Button>
                  <Button {...fuelBoxStyle} name="no_of_oweners" value={2}>
                    2nd
                  </Button>
                  <Button {...fuelBoxStyle} name="no_of_oweners" value={3}>
                    3rd
                  </Button>
                  <Button {...fuelBoxStyle} name="no_of_oweners" value={4}>
                    4th
                  </Button>
                  <Button {...fuelBoxStyle} name="no_of_oweners" value={5}>
                    4+
                  </Button>
                </Box>
              </Box>

              <Box>
                <AddTitle
                  handleInputChange={handleInputChange}
                  input={inputKeyFeature}
                  textAreaCount={textAreaCountKeyFeature}
                  isError={errorKeyFeature}
                />
                <DescriptionInput
                  handleInputChange={handleInputChange}
                  input={inputDescription}
                  textAreaCount={textAreaCountDescription}
                  isError={errorDescription}
                />
              </Box>
              <hr />
              <PriceInput
                input={inputPrice}
                isError={errorPrice}
                handleInputChange={handleInputChange}
              />
              <hr my="15px" />

              <FormControl mb="20px">
                <Box
                  fontSize="16px"
                  fontWeight="bold"
                  lineHeight="24px"
                  mt="15px"
                  pb="10px"
                >
                  UPLOAD UPTO 6 PHOTOS
                </Box>
                <Grid templateColumns="repeat(4, 1fr)" gap="8px">
                  <Box
                    h="100px"
                    w="100px"
                    border="2px solid black"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <label for="productImg">
                      <VStack h="90px" w="90px" pt="20%">
                        <Icon as={TbCameraPlus} h="28px" w="28px" />
                        <Text fontSize="12px">Add Photos</Text>
                      </VStack>
                    </label>
                    <Input
                      type="file"
                      id="productImg"
                      name="img"
                      style={{ display: "none", visibility: "none" }}
                      multiple
                      accept="image/png,img/jpg,img/jpeg,img/webp"
                    />
                  </Box>
                  <Box
                    h="100px"
                    w="100px"
                    border="2px solid #cecece"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <label for="productImg">
                      <VStack h="90px" w="90px" pt="20%">
                        <Icon as={TbCameraPlus} h="28px" w="28px" />
                        <Text fontSize="12px">Add Photos</Text>
                      </VStack>
                    </label>
                    <Input
                      type="file"
                      id="productImg"
                      name="img"
                      style={{ display: "none", visibility: "none" }}
                      multiple
                      accept="image/png,img/jpg,img/jpeg,img/webp"
                    />
                  </Box>
                  <Box
                    h="100px"
                    w="100px"
                    border="2px solid #cecece"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <label for="productImg">
                      <VStack h="90px" w="90px" pt="20%">
                        <Icon as={TbCameraPlus} h="28px" w="28px" />
                        <Text fontSize="12px">Add Photos</Text>
                      </VStack>
                    </label>
                    <Input
                      type="file"
                      id="productImg"
                      name="img"
                      style={{ display: "none", visibility: "none" }}
                      multiple
                      accept="image/png,img/jpg,img/jpeg,img/webp"
                    />
                  </Box>
                  <Box
                    h="100px"
                    w="100px"
                    border="2px solid #cecece"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <label for="productImg">
                      <VStack h="90px" w="90px" pt="20%">
                        <Icon as={TbCameraPlus} h="28px" w="28px" />
                        <Text fontSize="12px">Add Photos</Text>
                      </VStack>
                    </label>
                    <Input
                      type="file"
                      id="productImg"
                      name="img"
                      style={{ display: "none", visibility: "none" }}
                      multiple
                      accept="image/png,img/jpg,img/jpeg,img/webp"
                    />
                  </Box>
                  <Box
                    h="100px"
                    w="100px"
                    border="2px solid #cecece"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <label for="productImg">
                      <VStack h="90px" w="90px" pt="20%">
                        <Icon as={TbCameraPlus} h="28px" w="28px" />
                        <Text fontSize="12px">Add Photos</Text>
                      </VStack>
                    </label>
                    <Input
                      type="file"
                      id="productImg"
                      name="img"
                      style={{ display: "none", visibility: "none" }}
                      multiple
                      accept="image/png,img/jpg,img/jpeg,img/webp"
                    />
                  </Box>
                  <Box
                    h="100px"
                    w="100px"
                    border="2px solid #cecece"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <label for="productImg">
                      <VStack h="90px" w="90px" pt="20%">
                        <Icon as={TbCameraPlus} h="28px" w="28px" />
                        <Text fontSize="12px">Add Photos</Text>
                      </VStack>
                    </label>
                    <Input
                      type="file"
                      id="productImg"
                      name="img"
                      style={{ display: "none", visibility: "none" }}
                      multiple
                      accept="image/png,img/jpg,img/jpeg,img/webp"
                    />
                  </Box>
                  <Box
                    h="100px"
                    w="100px"
                    border="2px solid #cecece"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <label for="productImg">
                      <VStack h="90px" w="90px" pt="20%">
                        <Icon as={TbCameraPlus} h="28px" w="28px" />
                        <Text fontSize="12px">Add Photos</Text>
                      </VStack>
                    </label>
                    <Input
                      type="file"
                      id="productImg"
                      name="img"
                      style={{ display: "none", visibility: "none" }}
                      multiple
                      accept="image/png,img/jpg,img/jpeg,img/webp"
                    />
                  </Box>
                  <Box
                    h="100px"
                    w="100px"
                    border="2px solid #cecece"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <label for="productImg">
                      <VStack h="90px" w="90px" pt="20%">
                        <Icon as={TbCameraPlus} h="28px" w="28px" />
                        <Text fontSize="12px">Add Photos</Text>
                      </VStack>
                    </label>
                    <Input
                      type="file"
                      id="productImg"
                      name="img"
                      style={{ display: "none", visibility: "none" }}
                      multiple
                      accept="image/png,img/jpg,img/jpeg,img/webp"
                    />
                  </Box>
                </Grid>
              </FormControl>

              <hr />
              <FormControl my="15px">
                <Box
                  fontSize="16px"
                  fontWeight="bold"
                  lineHeight="24px"
                  mt="15px"
                  pb="10px"
                >
                  CONFIRM YOUR LOCATION
                </Box>
                <Tabs isLazy>
                  <TabList>
                    <Tab fontWeight={700} _selected={{ color: "black" }}>
                      LIST
                    </Tab>
                    <Tab fontWeight={400} _selected={{ color: "black" }}>
                      CURRENT LOCATION
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <SelectLocation handleLocationObj={handleLocationObj} />
                    </TabPanel>
                    <TabPanel>
                      <SelectLocation />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </FormControl>
              <hr />

              <FormControl my="15px">
                <Box
                  fontSize="16px"
                  fontWeight="bold"
                  lineHeight="24px"
                  mt="15px"
                  pb="10px"
                >
                  REVIEW YOUR DETAILS
                </Box>
                <HStack mb="15px" w="100%">
                  <Box
                    h="100px"
                    w="100px"
                    overflow="hidden"
                    p="3px"
                    borderRadius="50%"
                    border="1px solid #cecece"
                    mr="20px"
                  >
                    <Img src={user.img_url} />
                  </Box>
                  <Box>
                    <FormLabel fontSize="12px" mb="1px">
                      Name *
                    </FormLabel>
                    <Box
                      w="230px"
                      p="8px"
                      fontSize="14px"
                      borderRadius="3px"
                      border="1px solid #cecece"
                    >
                      {user.full_name}
                    </Box>
                  </Box>
                </HStack>
                <Box display="flex" justifyContent="space-between">
                  <Box fontSize="12px" display="flex">
                    Email: <Box ml="45px">{user.email_id}</Box>{" "}
                  </Box>
                </Box>
              </FormControl>
              <hr />

              <Box my="15px">
                <Button
                  fontSize="10px"
                  px="7px"
                  py="4px"
                  borderRadius="3px"
                  colorScheme="blue"
                  onClick={handleFormSubmit}
                >
                  POST NOW
                </Button>
              </Box>
            </Box>
            <hr />
          </FormControl>
        </VStack>
      </VStack>

      <SellPagesFooter />
    </Box>
  );
};
export default SellingForm;
