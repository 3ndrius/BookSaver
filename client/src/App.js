import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./components/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/themes/mainTheme";

import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import { Container } from './components/Container';
import Header from './components/Header';
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route path="/saved" component={SavedBooks} />
          </Switch>
           <ToastContainer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
