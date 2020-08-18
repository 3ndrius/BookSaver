
import * as types from '../const';

export const getBooksRequest = search => ({type: types.GET_BOOKS_USER_REQUEST, payload: search});
export const getBooksAsync = books => ({type: types.GET_BOOKS_ASYNC, payload: books});
export const getBooksError = msg => ({type: types.GET_BOOKS_ERROR, payload: msg});
export const getBooksLoading = () => ({ type: types.GET_BOOKS_LOADING, payload: true})


export const saveBookRequest = book => ({type: types.SAVE_BOOK_REQUEST, payload: book});
export const saveBookAsync = book => ({type: types.SAVE_BOOK_ASYNC, payload: book});
export const saveBookError = msg => ({type: types.SAVE_BOOK_ERROR , payload: msg});
export const saveBookLoading = () => ({type: types.SAVE_BOOK_LOADING , payload: true});

