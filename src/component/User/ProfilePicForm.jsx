import { HStack, Box, Text, Image, Button, VStack } from "@chakra-ui/react";

function ProfilePicForm(props) {
  let { user } = props;
  //  console.log(user)

  return (
    <>
      <HStack gap={4} padding={5}>
        <Image
          //  border={"2px solid  red"}
          width={"33%"}
          borderRadius="full"
          padding={"20px"}
          src={user.img_url}
          alt="User Pic"
        />

        <Box height={"fit-content"} textAlign="left" width="full">
          <Text fontSize={"sm"} marginBottom="15px">
            Clear photos are an important way for buyers and sellers to learn
            about each other. Be sure doesn’t include any personal or sensitive
            info you’d rather not have others see.
          </Text>

          <Text as="b" fontSize={"sm"}>
            It’s not much fun to chat with a landscape!
          </Text>

          <VStack spacing={2} marginTop="80px">
            <Button
              marginTop={"20px"}
              size="md"
              borderRadius={"4px"}
              height="40px"
              width="100%"
              border="2px"
              color={"black"}
              borderColor="black"
              background={"white"}
              _hover={{ border: "5px solid black", backgroundColor: "white" }}
            >
              Upload
            </Button>

            <Text color={"green"} fontSize={"sm"}>
              or
            </Text>

            <Button
              marginTop={"20px"}
              size="md"
              borderRadius={"4px"}
              height="40px"
              width="100%"
              border="2px"
              color={"black"}
              borderColor="black"
              background={"white"}
              _hover={{ border: "5px solid black", backgroundColor: "white" }}
            >
              Import from Google
            </Button>
          </VStack>
        </Box>
      </HStack>
    </>
  );
}

export default ProfilePicForm;
