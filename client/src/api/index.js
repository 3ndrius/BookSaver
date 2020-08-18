

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
