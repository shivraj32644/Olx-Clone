import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
export const Card = () => {
  const property = {
    imageUrl:
      "https://apollo-singapore.akamaized.net/v1/files/ph3towfxfi3j1-IN/image;s=300x600;q=60",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "₹ 1,900.00",
    reviewCount: "SEP 03",
    address: "Indore, Madhya Pradesh",
  };

  return (
    <Box maxW="350" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex justifyContent="center">
        <Box zIndex={580}>
          <Badge px="2" bg="#ffce32" color="black">
            Featured
          </Badge>
        </Box>
        <Image
          margin={"auto"}
          height={200}
          src={property.imageUrl}
          alt={property.imageAlt}
        />
      </Flex>

      <Box p="6">
        {/* Price box */}

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>

        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          ></Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          color="002f34"
          opacity="64%"
          //   color="green.200"
        >
          {property.title}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {property.address}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
