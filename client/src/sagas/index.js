import { call, put, takeEvery, all, delay } from "redux-saga/effects";
import { getBooksAsync, getBooksError, getBooksLoading } from "../redux/actions";


import { apiGetBooks } from "../api";

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

export default function* rootSaga() {
  yield all([watchGetBooks()]);
}
