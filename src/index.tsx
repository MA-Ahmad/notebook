import { Box, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Box maxW="1050px" mx="auto">
      <App />
    </Box>
  </React.StrictMode>,
  document.getElementById("root")
);
