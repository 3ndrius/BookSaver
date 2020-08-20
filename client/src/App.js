import React, {lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./components/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/themes/mainTheme";
import { Container } from './components/Container';
import Header from './components/Header';
import {ToastContainer} from 'react-toastify'
import { AnimatePresence } from "framer-motion";
const SavedBooks = (lazy(() => (import('./pages/SavedBooks'))));
const SearchBooks = (lazy(() => (import('./pages/SearchBooks'))));

const LoadingMessage = () => (
  "I'm loading..."
)
const App = () => {
  const [darkMode, setDarkMode] = React.useState(false)
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <>
    <Suspense fallback={<LoadingMessage />}>
      <ThemeProvider theme={theme}>
      <GlobalStyle dark={darkMode}/>
        <Header handleDarkMode={handleDarkMode} darkMode={darkMode}/>
        <AnimatePresence>
        <Container>
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route path="/saved" component={SavedBooks} />
          </Switch>
           <ToastContainer />
        </Container>
        </AnimatePresence>
      </ThemeProvider>
      </Suspense>
    </>
  );
};

export default App;
