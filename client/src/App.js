import React from 'react';
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
    <div className="App">
        MERN STACK WITH DOCKER
        <button onClick={getBooks}>Get data</button>
    </div>
  );
}

export default App;
