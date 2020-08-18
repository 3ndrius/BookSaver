import { GET_BOOKS_ASYNC, GET_BOOKS_ERROR, GET_BOOKS_LOADING } from '../const/index';


const initialState = {
    books: [],
    savedBooks: [],
    isloading: false,
    errors: {
        msg: '',
        status: false
    }
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_BOOKS_ASYNC:
            console.log(action, "action");
            return {
                ...state,
                isloading: false,
                books: action.payload
            }
        case GET_BOOKS_LOADING: 
            return {
                ...state,
                isloading: action.payload
            } 
           
        case GET_BOOKS_ERROR:
            return {
                ...state,
                errors: {msg: action.payload, status: true}
            }

        default:
            return state;
    }
}

export default rootReducer;