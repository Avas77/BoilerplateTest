/*
 *
 * ImageGrid reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  isLoading: false,
  images: [],
  error: null,
  page: 1,
};

/* eslint-disable default-case, no-param-reassign */
const imageGridReducer = (state = initialState, action) =>
  produce(state, draftState => {
    switch (action.type) {
      case types.LOAD_IMAGES:
        draftState.isLoading = true;
        break;
      case types.LOAD_IMAGES_SUCCESS:
        draftState.isLoading = false;
        draftState.error = null;
        draftState.images.push(...action.images);
        draftState.page += 1;
        break;
      case types.LOAD_IMAGES_FAIL:
        draftState.isLoading = false;
        draftState.error = action.error;
        break;
    }
  });

export default imageGridReducer;
