/*
 *
 * ImageGrid actions
 *
 */

import * as types from './constants';

export function loadImages() {
  return {
    type: types.LOAD_IMAGES,
  };
}

export function setImages(images) {
  return {
    type: types.LOAD_IMAGES_SUCCESS,
    images,
  };
}

export function setError(error) {
  return {
    type: types.LOAD_IMAGES_FAIL,
    error,
  };
}
