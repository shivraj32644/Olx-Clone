import { Box, HStack, VStack, Icon } from "@chakra-ui/react";
import { AiFillCar, AiOutlineMobile } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { TiShoppingBag } from "react-icons/ti";
import { RiMotorbikeFill, RiComputerLine, RiTShirtLine } from "react-icons/ri";
import { FaGuitar } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryDataContext } from "../../Context/AuthContext/SellingDetail";
import { ArrowBackIcon } from "@chakra-ui/icons";
import SellPagesFooter from "./Form Components/SellPagesFooter";

const categoryArray = [
  {
    cat_id: 1,
    cat_icon: AiFillCar,
    cat_title: "OLX Autos (Cars)",
    sub_category: ["Cars"],
  },
  {
    cat_id: 2,
    cat_icon: BiBuildingHouse,
    cat_title: "Properties",
    sub_category: [
      "For Sale: Houses & Apartments",
      "For Rent: Houses & Apartments",
      "Lands & Plots",
      "For Rent: Shops & Offices",
      "PG & Guest Houses",
    ],
  },
  {
    cat_id: 3,
    cat_icon: AiOutlineMobile,
    cat_title: "Mobiles",
    sub_category: ["Mobile Phones", "Accessories", "Tablets"],
  },
  {
    cat_id: 4,
    cat_icon: TiShoppingBag,
    cat_title: "Jobs",
    sub_category: [
      "Sales & Marketing",
      "BPO & Telecaller",
      "Driver",
      "Office Assistant",
    ],
  },
  {
    cat_id: 5,
    cat_icon: RiMotorbikeFill,
    cat_title: "Bikes",
    sub_category: ["Sales & Marketing", "Driver", "Office Assistant"],
  },
  {
    cat_id: 6,
    cat_icon: RiComputerLine,
    cat_title: "Electronics and Appliances",
    sub_category: [
      "Sales & Marketing",
      "BPO & Telecaller",
      "Sell Computer",
      "Driver",
      "Office Assistant",
    ],
  },
  {
    cat_id: 7,
    cat_icon: RiTShirtLine,
    cat_title: "Fashion",
    sub_category: [
      "Clothing Fashion",
      "Sales & Marketing",
      "BPO & Telecaller",
      "Driver",
      "Office Assistant",
    ],
  },
  {
    cat_id: 8,
    cat_icon: FaGuitar,
    cat_title: "Books Sports and Hobbies",
    sub_category: ["Books", "Gym Fitness", "Other Hoobies"],
  },
  {
    cat_id: 9,
    cat_icon: MdOutlineMedicalServices,
    cat_title: "Services",
    sub_category: ["Education Classes", "Medical Services", "Other Services"],
  },
];

let arr = [];
const SellCategories = () => {
  const { sendCategory } = useContext(CategoryDataContext);

  const [subcategoryArr, setSubcategoryArr] = useState([]);
  const [category, setCategory] = useState("");

  //  console.log(typeof category+ " --"+category)
  //  console.log("this is aray"+"---"+subcategoryArr)

  const DisplaySubcategories = (clicked_id) => {
    // console.log(clicked_id)
    categoryArray.map((ele) => {
      if (ele.cat_id === clicked_id) {
        setCategory(ele.cat_title);
        ele.sub_category.map((subcat) => {
          arr.push(subcat);
        });
        setSubcategoryArr(arr);
      }

      arr = [];
    });
  };

  return (
    <Box>
      <Box position="fixed" top={0} w="100%" h="48px" bg="#EDF2F7">
        <Box ml={15} mr={20} my="10px" h="28px" w="auto">
          <Link to="/">
            {" "}
            <ArrowBackIcon w="32px" />
          </Link>
        </Box>
      </Box>
      <VStack
        w="760px"
        display="block"
        margin="auto"
        mt={14}
        marginBottom="40px"
      >
        <Box fontSize="24px" fontWeight="bold" textAlign="center">
          POST YOUR ADS
        </Box>
        <VStack
          fontFamily="sans-serif"
          fontSize="16px"
          border="1px solid #cecece"
          borderRadius="5px"
        >
          <Box
            fontWeight="bold"
            h="38px"
            w="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            marginLeft="25px"
            marginBottom={1}
            mt={2}
          >
            CHOOSE A CATEGORY
          </Box>
          <HStack w="100%" spacing={0}>
            <VStack w="50% " spacing={0}>
              {categoryArray.map((elem) => {
                return (
                  <Box
                    border="1px solid #cecece"
                    borderLeft={0}
                    height="32px"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    py={5}
                    pl={3}
                    cursor="pointer"
                    _hover={{ bg: "#CECECE" }}
                    position="relative"
                    onClick={() => {
                      DisplaySubcategories(elem.cat_id);
                    }}
                  >
                    <Icon
                      as={elem.cat_icon}
                      w="25px"
                      h="25px"
                      color="#2D3748"
                      ml="5px"
                      mr="14px"
                    />
                    <Box w="85%">{elem.cat_title}</Box>
                    <Icon as={BsChevronRight} fontSize="20px" />
                  </Box>
                );
              })}
            </VStack>
            <VStack w="50%" h="max-height" spacing={0}>
              {subcategoryArr.map((ele) => {
                return (
                  <Box
                    w="100%"
                    pl={4}
                    border="1px solid #cecece"
                    borderLeft={0}
                    height="32px"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    py={5}
                    cursor="pointer"
                    _hover={{ bg: "#CECECE" }}
                    onClick={() => sendCategory(category, ele)}
                  >
                    <Link to="/post/attribute">
                      <Box
                        height="32px"
                        width={360}
                        py={5}
                        textAlign="start"
                        display="flex"
                        alignItems="center"
                      >
                        {ele}
                      </Box>
                    </Link>
                  </Box>
                );
              })}
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <Box mt="20vh">
        <SellPagesFooter />
      </Box>
    </Box>
  );
};
export default SellCategories;
