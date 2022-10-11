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
      "https://apollo-singapore.akamaized.net/v1/files/rv168m2busso-IN/image;s=300x600;q=60",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "₹ 1,900",
    date: "SEP 03",
    address: "Indore, Madhya Pradesh",
  };

  return (
    <Box
      width="93%"
      h="270px"
      borderWidth="2px"
      borderRadius="md"
      border="1px solid rgba(0, 0, 0, 0.30)"
      overflow="hidden"
    >
      <Flex
        position="relative"
        height="160px"
        margin="8px"
        justifyContent="center"
        align="start"
      >
        <Badge
          zIndex={580}
          position="absolute"
          left={1}
          px="2"
          bg="#ffce32"
          color="black"
        >
          Featured
        </Badge>
        <Image height="160px" src={property.imageUrl} alt={property.imageAlt} />
      </Flex>

      <Box h="72px" p="2" pl="4">
        <Box
          fontSize="20px"
          color="002f34"
          fontWeight="700"
          lineHeight="23pxpx"
        >
          {property.formattedPrice}
        </Box>

        <Box
          mt="1"
          as="h4"
          lineHeight="16px"
          fontSize="16px"
          noOfLines={1}
          color="002f34"
          opacity="64%"
        >
          {property.title}
        </Box>

        <Box
          display="flex"
          mt="2"
          fontSize="11px"
          alignItems="center"
          justifyContent="space-between"
          color="002f34"
          opacity="64%"
        >
          {property.address}
          <Box as="span" ml="2" fontSize="11px" color="002f34" opacity="64%">
            {property.date}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
