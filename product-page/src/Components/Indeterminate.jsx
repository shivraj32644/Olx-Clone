import React from 'react'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
export function Indeterminate() {
    const [checkedItems, setCheckedItems] = React.useState([false, false])
  
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  
    return (
      <>
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        >
          All Categories
        </Checkbox>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          >
            Cars
          </Checkbox>
        </Stack>
 
        
      </>

  )
  
  }
