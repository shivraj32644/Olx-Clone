import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const States=[
    {id:"1",name:"Honda"},
    {id:"2",name:"Toyota"},
    {id:"3",name:"BMW"},
]
const Cities=[
    {id:"5",cityId:"1",name:"Honda Model 1"},
    {id:"6",cityId:"1",name:"Honda Model 2"},
    {id:"7",cityId:"2",name:"Toyota Model 1"},
    {id:"8",cityId:"2",name:"Toyota Model 2"},
    {id:"9",cityId:"3",name:"BMW Model 1"},
    {id:"10",cityId:"3",name:"BMW Model 2"},
]
const Neighbourhoods=[
    {id:"11", neighbourhoodId:"5",name:"Honda M1 V1"},
    {id:"12", neighbourhoodId:"5",name:"Honda M1 V2"},
    {id:"13", neighbourhoodId:"6",name:"Honda M2 V1"},
    {id:"14", neighbourhoodId:"6",name:"Honda M2 V2"},
    {id:"15", neighbourhoodId:"7",name:"Toyota M1 V1"},
    {id:"16", neighbourhoodId:"7",name:"Toyota M1 V2"},
    {id:"17", neighbourhoodId:"8",name:"Toyota M2 V1"},
    {id:"18", neighbourhoodId:"8",name:"Toyota M2 V2"},
    {id:"19", neighbourhoodId:"9",name:"BMW M1 V1"},
    {id:"20", neighbourhoodId:"9",name:"BMW M1 V2"},
    {id:"21", neighbourhoodId:"10",name:"BMW M2 V1"},
    {id:"22", neighbourhoodId:"10",name:"BMW M2 V2"},
]

const SelectLocation=({collectAllFormData})=>{
    const [input, setInput] = useState({
        car_name:"",
        car_city:"",
        car_neighbourhood:"",
    })
    const [state,setBrand]=useState([])
    const [city,setModel]=useState([])
    const [neighbourhood,setVarient]=useState([])


    useEffect(()=>{
        setBrand(States)
    },[])

    const handleChooseCountry = (id) =>{ 
        if(id==0){ 
            setInput({...input,car_name:"",car_city:"",car_neighbourhood:""})
            setModel([])
        }
        else{
            const car_name=States.filter(x=>x.id===id )
            const giveModel=Cities.filter(x=>x.cityId===id)
            setInput({...input,car_name:car_name[0].name})
            setModel(giveModel)
        }

    }
    const handleChooseModel = (id) =>{ 
        if(id==0){
            setInput({...input,car_city:"",car_neighbourhood:""})
            setVarient( [] )
        }
        else{
            const car_city=Cities.filter(x=>x.id===id )
            const giveVarient=Neighbourhoods.filter(x=>x.neighbourhoodId===id)
            setInput({...input,car_city:car_city[0].name})
            setVarient( giveVarient )
        }

    }
    const handleChooseVarient=(id)=>{
        
        const car_neighbourhood=Neighbourhoods.filter(x=> x.id===id )
        id==0 ? setInput({...input,car_neighbourhood:""}):
        setInput({...input,car_neighbourhood:car_neighbourhood[0].name})


    }
    console.log(input)

    const isErrorBrand = input.car_name==="" 
    const isErrorModel = input.car_city===""
    const isErrorVarient = input.car_neighbourhood===""

    return (
      <Box>


        <FormControl isInvalid={isErrorBrand} mb="15px">
          <FormLabel fontSize="12px" mb="1px" >Brand *</FormLabel>
          <Select fontSize="12px" h="38px" borderRadius="2px" onChange={(e)=>handleChooseCountry(e.target.value)}>
            <option value="0"></option>
           {
               state && state!==undefined ? state.map((state)=>{
                   return(
                       <option key={state.id} value={state.id}>{state.name}</option>
                   )
               }) : "NO Car data"
           } 
          </Select>
          
          {input.car_name!=="" ? (
            <FormHelperText fontSize="12px">
              
            </FormHelperText>
          ) : (
            <FormErrorMessage mt="5px" fontSize="8px">Brand is mandatory. Please complete the required field.</FormErrorMessage>
          )}
       </FormControl>






   {city==[]||input.car_name=="" ?"":<FormControl isInvalid={isErrorModel} mb="15px">
      <FormLabel fontSize="12px" mb="1px" >Model *</FormLabel>
      <Select fontSize="12px" h="38px" borderRadius="2px" onChange={(e)=>handleChooseModel(e.target.value)}>
        <option value="0"></option>
       {
           city && city!==undefined ? city.map((city)=>{
               return(
                   <option key={city.id} value={city.id}>{city.name}</option>
               )
           }) : "NO Car data"
       } 
      </Select>
      
      {  input.car_city!=="" ? (
        <FormHelperText fontSize="12px">
          
        </FormHelperText>
      ) : (
        <FormErrorMessage mt="5px" fontSize="8px">Model is mandatory. Please complete the required field.</FormErrorMessage>
      )}
    </FormControl>
      } 
      





   { neighbourhood==[] || input.car_city=="" ||input.car_name==""?"": <FormControl isInvalid={isErrorVarient} mb="15px">
      <FormLabel fontSize="12px" mb="1px" >Varient *</FormLabel>
      <Select fontSize="12px" h="38px" borderRadius="2px" onChange={(e)=>handleChooseVarient(e.target.value)} >
        <option value="0"></option>
       {
           neighbourhood && neighbourhood!==undefined ? neighbourhood.map((neighbourhood)=>{
               return(
                   <option key={neighbourhood.id} value={neighbourhood.id}>{neighbourhood.name}</option>
               )
           }) : "NO Car data"
       } 
      </Select>
      
      {input.car_neighbourhood!="" ? (
        <FormHelperText fontSize="12px">
          
        </FormHelperText>
      ) : (
        <FormErrorMessage mt="5px" fontSize="8px">Varient is mandatory. Please complete the required field.</FormErrorMessage>
      )}
    </FormControl>
      }





</Box>

       
    )
}
export default SelectLocation