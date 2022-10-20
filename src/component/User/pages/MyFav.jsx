import { Grid,SkeletonText,SkeletonCircle,Skeleton ,Stack, Image,Box,Text ,Button } from "@chakra-ui/react";
import { useEffect } from "react";
import MyCard from "../Iteams/myCard";
import LoadingPage from "../util/Loading";

function MyFav({ userData, getUser }) {
  let { loading, error, user } = userData;

  //for windows size paging hook

  useEffect(() => {
    getUser();
  }, []);

  if (error) {
    return <h1>error..</h1>;
  }

  if (loading) {
    return (
      <>
        <Grid
          marginTop={6}
          templateColumns="repeat(4, 1fr)"
          gap={4}
          width="100%"
        >

<Stack gap={4}>
 
  <Skeleton height='160px'boxShadow='lg' />
  <SkeletonText mt='4' noOfLines={2} spacing='2' />
</Stack>

<Stack gap={4}>
 
  <Skeleton height='160px'boxShadow='lg' />
  <SkeletonText mt='4' noOfLines={2} spacing='2' />
</Stack>

<Stack gap={4}>
 
  <Skeleton height='160px'boxShadow='lg' />
  <SkeletonText mt='4' noOfLines={2} spacing='2' />
</Stack>

<Stack gap={4}>
 
  <Skeleton height='160px'boxShadow='lg' />
  <SkeletonText mt='4' noOfLines={2} spacing='2' />
</Stack>


<Stack gap={4}>
 
  <Skeleton height='160px'boxShadow='lg' />
  <SkeletonText mt='4' noOfLines={2} spacing='2' />
</Stack>

<Stack gap={4}>
 
  <Skeleton height='160px'boxShadow='lg' />
  <SkeletonText mt='4' noOfLines={2} spacing='2' />
</Stack>



<Stack gap={4}>
 
  <Skeleton height='160px'boxShadow='lg' />
  <SkeletonText mt='4' noOfLines={2} spacing='2' />
</Stack>

<Stack gap={4}>
 
  <Skeleton height='160px'boxShadow='lg' />
  <SkeletonText mt='4' noOfLines={2} spacing='2' />
</Stack>



        </Grid>
      </>
    );
  }

  if (!error && !loading && Object.keys(user).length == 0) {
    return <></>;
  }

  //   let  a = user.favourite_ads.reverse()

  // let cardta = a.map((el,index)=>{
  //     return <MyCard  img={el.images.img1} fav={(el.fav==null || el.fav==false)?false:true} date={el.date_from} title={el.name} price={el.set_price}  getAllData={getUser}  cardClick={""} user={user} index={index} />
  //   })
  let demoData = [];
  for (var i = user.favourite_ads.length - 1; i >= 0; i--) {
    let el = user.favourite_ads[i];

    demoData.push(
      <MyCard
        img={el.images.img1}
        fav={el.fav == null || el.fav == false ? false : true}
        date={el.date_from}
        title={el.name}
        price={el.set_price}
        getAllData={getUser}
        cardClick={""}
        user={user}
        index={i}
      />
    );
  }

  if(user.favourite_ads.length==0){
    return <>
        
          <Stack width="100%"  height={"90vh"} justifyContent={"center"} alignItems={"center"} textAlign={"center"} margin="auto"  >


          <Image src='https://statics.olx.in/external/base/img/no-favorites.png' height={"200px"} alt='Dan Abramov' />
          <Text as={"b"} color="#5c7a81" >You haven't liked any ads yet</Text>
          <Text color={"#5c7a81"} fontSize="sm">  `Like ads and share <br /> them with the world`</Text>
          <Button
           
           size="md"
           borderRadius={"4px"}
           
           border="2px"
           color={"black"}
           borderColor="black"
           background={"white"}
           _hover={{ border: "5px solid black", backgroundColor: "white" }}
         >Discover
         </Button>

          </Stack>
    
    
    </>
  }

  return (
    <>
      <Grid py="40px" marginTop={6} templateColumns="repeat(4, 1fr)" gap={4} width="100%">
        {demoData}
      </Grid>
    </>
  );
}
export default MyFav;
