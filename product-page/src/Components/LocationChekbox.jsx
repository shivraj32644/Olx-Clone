import React from "react";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
export function LocationChekbox() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        India
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[0]])}
        >
          Madhya Pradesh
        </Checkbox>

                <Stack pl={6} mt={1} spacing={1}>
                        <Checkbox
                            isChecked={checkedItems[0]}
                            onChange={(e) =>
                            setCheckedItems([e.target.checked, checkedItems[0]])
                            }
                        >
                            Bhopal
                        </Checkbox>
                </Stack>
                <Stack pl={6} mt={1} spacing={1}>
                        <Checkbox
                            isChecked={checkedItems[1]}
                            onChange={(e) =>
                            setCheckedItems([e.target.checked, checkedItems[1]])
                            }
                        >
                            Indore
                        </Checkbox>
                </Stack>
                <Stack pl={6} mt={1} spacing={1}>
                        <Checkbox
                            isChecked={checkedItems[2]}
                            onChange={(e) =>
                            setCheckedItems([e.target.checked, checkedItems[2]])
                            }
                        >
                            Jabalpur
                        </Checkbox>
                </Stack>
                <Stack pl={6} mt={1} spacing={1}>
                        <Checkbox
                            isChecked={checkedItems[3]}
                            onChange={(e) =>
                            setCheckedItems([e.target.checked, checkedItems[3]])
                            }
                        >
                            Gwalior
                        </Checkbox>
                </Stack>
                    


      </Stack>
    </>
  );
}
