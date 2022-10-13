import { Box } from "@chakra-ui/react";
import { Card } from "./Components/Card";
import { ProducPage } from "./Components/ProducPage";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <Box className="App">
      {/* <Card/> */}
      {/* <ProducPage /> */}
      <AllRoutes></AllRoutes>
    </Box>
  );
}

export default App;
