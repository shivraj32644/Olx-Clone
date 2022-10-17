import  {Flex, Spinner} from "@chakra-ui/react"

function LoadingPage(){

    return(

        <Flex
        filter="auto"
        brightness="40%"
        
      
        width="100%"
        height={"100vh"}
        justifyContent="center"
        alignItems={"center"}
        backgroundColor="black"
        opacity={"0.8"}
      >
        <Spinner
          size="xl"
          textAlign={"left"}
          color="white"
          colorScheme={"white"}
          thickness="3px"
        />
      </Flex> 
    
       )



}

export default LoadingPage;