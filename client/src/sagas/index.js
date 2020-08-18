import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  getBooksAsync,
  getBooksError,
  getBooksLoading,
  saveBookRequest,
  saveBookLoading,
  saveBookAsync,
  saveBookError
} from "../redux/actions";

import { apiGetBooks, apiSaveBook } from "../api";

function* sagaGetBooks(action) {
  try {
    yield put(getBooksLoading(action.payload));
    const books = yield call(apiGetBooks, action.payload);
    yield put(getBooksAsync(books));
  } catch (e) {
    yield put(getBooksError(e.message));
  }
}
// watcher saga
function* watchGetBooks() {
  yield takeEvery("GET_BOOKS_USER_REQUEST", sagaGetBooks);
}

//################################

function* sagaSaveBooks(action) {

  try {
     yield put(saveBookLoading(action.payload))
     const savedBook = yield call(apiSaveBook, action.payload);
     yield put(saveBookAsync(savedBook));

  } catch (e) {
    yield put(saveBookError(e.message));
  }
}

function* watchSaveBook() {
  yield takeEvery("SAVE_BOOK_REQUEST", sagaSaveBooks)
}



export default function* rootSaga() {
  yield all(
    [
      watchGetBooks(),
      watchSaveBook()
    
  ]);
}
