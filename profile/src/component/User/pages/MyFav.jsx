import { Grid,SkeletonText,SkeletonCircle,Skeleton ,Stack } from "@chakra-ui/react";
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

  return (
    <>
      <Grid marginTop={6} templateColumns="repeat(4, 1fr)" gap={4} width="100%">
        {demoData}
      </Grid>
    </>
  );
}
export default MyFav;
