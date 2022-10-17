import { FormControl, FormLabel, Textarea } from "@chakra-ui/react"
import {useState} from "react"

export default function AddTitle(){
    const [textAreaCount,settextAreaCount]=useState(0)

    const reCalculate=(e)=>{
        console.log(e.target)
        settextAreaCount(e.target.value.length)
    }
    return(
        <FormControl>
          <FormLabel>{textAreaCount}</FormLabel>
          <Textarea type="text" onChange={(e)=>reCalculate(e)}/>

        </FormControl>
    )
}