import React from "react";

import GlobalStyle from "./components/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/themes/mainTheme";

import { Button } from "./components/Button";

const App = () => {
 
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">test</div>
      </ThemeProvider>
    </>
  );
}

export default App;
