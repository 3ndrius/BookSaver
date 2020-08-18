
import * as types from '../const';

export const getBooksRequest = search => ({type: types.GET_BOOKS_USER_REQUEST, payload: search});
export const getBooksAsync = books => ({type: types.GET_BOOKS_ASYNC, payload: books});
export const getBooksError = msg => ({type: types.GET_BOOKS_ERROR, payload: msg});
export const getBooksLoading = () => ({ type: types.GET_BOOKS_LOADING, payload: true})
