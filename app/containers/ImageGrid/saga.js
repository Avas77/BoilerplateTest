import { takeEvery, call, put, select } from 'redux-saga/effects';
import * as types from './constants';
import fetchImages from './api';
import { setError, setImages } from './actions';
import { makeSelectPages } from './selectors';

function* handleImagesLoad() {
  try {
    const page = yield select(makeSelectPages());
    console.log(page);
    const images = yield call(fetchImages, page);
    console.log(typeof images);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

// Individual exports for testing
export default function* imageGridSaga() {
  yield takeEvery(types.LOAD_IMAGES, handleImagesLoad);
}
