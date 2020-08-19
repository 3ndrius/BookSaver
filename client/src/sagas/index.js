import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  getBooksAsync,
  getBooksError,
  saveBookAsync,
  saveBookError,
  showBookError,
  showBookAsync,
} from "../redux/actions";

import { apiGetBooks, apiSaveBook, apiShowBooks } from "../api";

function* sagaGetBooks(action) {
  const books = yield call(apiGetBooks, action.payload);
  if (books) {
    yield put(getBooksAsync(books));
  } else {
    yield put(getBooksError("Server error sga"));
  }
}
// watcher saga
function* watchGetBooks() {
  yield takeEvery("GET_BOOKS_USER_REQUEST", sagaGetBooks);
}

//################################

function* sagaSaveBooks(action) {
  const savedBook = yield call(apiSaveBook, action.payload);
  if (savedBook) {
    yield put(saveBookAsync(savedBook));
  } else {
    yield put(saveBookError("Error else eroor!!!"));
  }
}

function* watchSaveBook() {
  yield takeEvery("SAVE_BOOK_USER_REQUEST", sagaSaveBooks);
}

//###########

function* sagaShowBooks(action) {
  const showedBook = yield call(apiShowBooks);
  console.log("saga", showedBook)
  if (showedBook) {
    yield put(showBookAsync(showedBook));
  } else {
    yield put(showBookError("Server error sga!!"));
  }
}
// watcher saga

function* watchShowBooks() {
  yield takeEvery("SHOW_BOOKS_USER_REQUEST", sagaShowBooks);
}

export default function* rootSaga() {
  yield all([watchGetBooks(), watchShowBooks(), watchSaveBook()]);
}
