import {
  GET_BOOKS_ASYNC,
  GET_BOOKS_ERROR,
  GET_BOOKS_LOADING,
  SAVE_BOOK_ASYNC,
  SAVE_BOOK_ERROR,
  SAVE_BOOK_LOADING,
  SAVE_BOOK_REQUEST
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
      console.log(action, "action");
      return {
        ...state,
        isloading: false,
        books: action.payload,
      };
    case GET_BOOKS_LOADING:
      return {
        ...state,
        isloading: action.payload,
      };

    case GET_BOOKS_ERROR:
      return {
        ...state,
        errors: { msg: action.payload, status: true },
      };

      case SAVE_BOOK_ASYNC: 
        return {
            ...state,
            savedBooks: [...state.savedBooks, action.payload]
        }

    default:
      return state;
  }
};

export default rootReducer;
