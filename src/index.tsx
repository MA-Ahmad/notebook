import { Box, ColorModeScript } from "@chakra-ui/react";
import { HashRouter as Router } from "react-router-dom";
import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Router>
      <Box maxW="1050px" mx="auto">
        <App />
      </Box>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
