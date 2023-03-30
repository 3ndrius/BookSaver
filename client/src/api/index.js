import { toast } from "react-toastify";

export const apiGetBooks = async (search) => {
  try {
    const request = await fetch(`http://localhost:8080/books/search`, {
      method: "POST",
      body: JSON.stringify({
        search: search,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await request.json();
    return response;
  } catch (e) {
    toast.error("Server Error occurred! " + e, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    throw Error("Books not found or sth went wrong!")
  }
};

export const apiSaveBook = async (book) => {
  try {
    const request = await fetch(`http://localhost:8080/books`, {
      method: "POST",
      body: JSON.stringify({
        book: book,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await request.json();
    toast.success("Successfully saved book !!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return response;
  } catch (e) {

    toast.error("Server Error occurred!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    throw (e);
  }
};

export const apiShowBooks = async () => {
  try {
    const request = await fetch(`http://localhost:8080/books`);
    const response = await request.json();
    // console.log(response)
    return response;
  } catch (e) {
    toast.error("Server Error occurred!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    throw (e);
  }
};
export const apiDeleteBook = async (id) => {
  try {
    const request = await fetch(`http://localhost:8080/books/${id}`, {
      method: "DELETE",
    });
    const response = await request.json();
    toast.info("Successfully deleted book !!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return response;
  } catch (e) {
    toast.error("Deleting book failed!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    console.log("Server error: " + e);
    throw (e);
  }
};


