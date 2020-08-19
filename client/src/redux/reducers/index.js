import {
  GET_BOOKS_ASYNC,
  GET_BOOKS_ERROR,
  GET_BOOKS_USER_REQUEST,
  SAVE_BOOK_ASYNC,
  SAVE_BOOK_ERROR,
  SHOW_BOOKS_ERROR,
  SHOW_BOOKS_ASYNC,
  SHOW_BOOKS_USER_REQUEST
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
      };

      case SAVE_BOOK_ASYNC: 
        return {
            ...state,
            savedBooks: [...state.savedBooks, action.payload],
        }
      case SAVE_BOOK_ERROR:
        return {
          ...state,
          errors: {msg: action.payload, status: true}
        }
      case SHOW_BOOKS_ASYNC:
        return {
          ...state,
          savedBooks: action.payload,
          isloading: false
        }
      case SHOW_BOOKS_USER_REQUEST:
        return {
          ...state,
          isloading: true
        }
      case SHOW_BOOKS_ERROR: 
        return {
          ...state,
          errors: {msg: action.payload, status:true},
          isloading: false
        }
    default:
      return state;
  }
};

export default rootReducer;
