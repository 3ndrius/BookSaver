import {
  GET_BOOKS_ASYNC,
  GET_BOOKS_ERROR,
  GET_BOOKS_USER_REQUEST,
  SAVE_BOOK_ASYNC,
  SAVE_BOOK_ERROR,
  SHOW_BOOKS_ERROR,
  SHOW_BOOKS_ASYNC,
  SHOW_BOOKS_USER_REQUEST,
  DELETE_BOOK_USER_REQUEST,
  DELETE_BOOK_ERROR,
  DELETE_BOOK_ASYNC,
} from "../const/index";

const initialState = {
  books: [],
  savedBooks: [],
  isloading: false,
  errors: {
    msg: "",
    status: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_ASYNC:
      return {
        ...state,
        isloading: false,
        books: action.payload,
      };
    case GET_BOOKS_USER_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case GET_BOOKS_ERROR:
      return {
        ...state,
        errors: { msg: action.payload, status: true },
        isloading: false
      };

    case SAVE_BOOK_ASYNC:
      return {
        ...state,
      };
    case SAVE_BOOK_ERROR:
      return {
        ...state,
        errors: { msg: action.payload, status: true },
      };
    case SHOW_BOOKS_ASYNC:
      return {
        ...state,
        savedBooks: action.payload.books,
        isloading: false,
      };
    case SHOW_BOOKS_USER_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case SHOW_BOOKS_ERROR:
      return {
        ...state,
        errors: { msg: action.payload, status: true },
        isloading: false,
      };
    case DELETE_BOOK_USER_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case DELETE_BOOK_ASYNC:
      const sbooks = state.savedBooks.filter(
        (book) => book._id !== action.payload.book._id
      );
      return {
        ...state,
        savedBooks: sbooks,
        isloading:false
      };
    case DELETE_BOOK_ERROR:
      return {
        ...state,
        isloading: false,
        errors: { msg: action.payload, status: true },
      };
    default:
      return state;
  }
};

export default rootReducer;
