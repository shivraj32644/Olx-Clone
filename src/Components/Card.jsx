import { Badge, Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

export const Card = ({ img, des, price, city, state, date, premium }) => {
  const property = {
    imageUrl: img,
    imageAlt: "Rear view of modern home with pool",
    title: des,
    formattedPrice: `₹ ${new Intl.NumberFormat("en-IN").format(price)}`,
    date: date,
    address: `${city} ${state}`,
  };

  return (
    <Box
      width="100%"
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
        {premium ? (
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
        ) : null}

        {/* <AiOutlineHeart  className={styles.heart}  /> */}

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
          fontWeight={500}
          noOfLines={1}
          color="black"
          opacity="100%"
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
