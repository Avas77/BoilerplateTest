import { takeEvery, call, put, select } from 'redux-saga/effects';
import * as types from './constants';
import fetchImages from './api';
import { setError, setImages } from './actions';
import { makeSelectPages } from './selectors';

function* handleImagesLoad() {
  console.log('Hello From Saga');
  try {
    const page = yield select(makeSelectPages());
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

// Individual exports for testing
export default function* imageGridSaga() {
  yield takeEvery(types.LOAD_IMAGES, handleImagesLoad);
}
