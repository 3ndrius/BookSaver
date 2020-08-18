

export const apiGetBooks = async (search) => {
  try {
    const request = await fetch(`http://localhost:8080/books/search`, {
      method: "POST",
      body: JSON.stringify({
        search: search
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await request.json();
    return response;
  } catch (e) {
    console.log("Error faild to get books", e);
  }
};

export const apiSaveBook = async (book) => {
    try {
    const request = await fetch(`http://localhost:8080/books/`, {
      method: "POST",
      body: JSON.stringify({
        book: book
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await request.json();
    return response;
  } catch (e) {
    console.log("Error faild to get books", e);
  }
}

export const apiShowBooks = async () => {
  try {
    const request = await fetch(`http://localhost:8080/books`);
    const response = await request.json();
    return response;
  } catch (e) {
    console.log("Server error" + e);
  }
}