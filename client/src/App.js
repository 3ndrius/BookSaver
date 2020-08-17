import React from 'react';

import GlobalStyle from './components/themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from './components/themes/mainTheme'

import { Button } from './components/Button'



function App() {
  let datas = {search: "Lord of the Rings"}
  const getBooks = async() =>{
    const books = await fetch(`http://localhost:8080/books/search`, {
    headers: {
    'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(datas)
  })
    let data = await books.json();
    console.log(data)
  }
  return (
    <>
     <GlobalStyle />
      <ThemeProvider theme={theme}>
    <div className="App">
        test
    </div>
     </ThemeProvider>
     </>
  );
}

export default App;
