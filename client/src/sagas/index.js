import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  getBooksAsync,
  getBooksError,
  getBooksLoading,
  saveBookAsync,
  saveBookError,
  showBookLoading,
  showBookError,
  showBookAsync,
} from "../redux/actions";

import { apiGetBooks, apiSaveBook, apiShowBooks } from "../api";

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
    const savedBook = yield call(apiSaveBook, action.payload);
    yield put(saveBookAsync(savedBook));
  } catch (e) {
    yield put(saveBookError(e.message));
  }
}

function* watchSaveBook() {
  yield takeEvery("SAVE_BOOK_USER_REQUEST", sagaSaveBooks);
}

//###########

function* sagaShowBooks(action) {
  try {
    yield put(showBookLoading());
    const showedBook = yield call(apiShowBooks);
    yield put(showBookAsync(showedBook));
  } catch (e) {
    yield put(showBookError(e.message));
  }
}
// watcher saga

function* watchShowBooks() {
  yield takeEvery("SHOW_BOOKS_USER_REQUEST", sagaShowBooks);
}

export default function* rootSaga() {
  yield all([watchGetBooks(), watchShowBooks(), watchSaveBook()]);
}
