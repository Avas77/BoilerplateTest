import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the imageGrid state domain
 */

const selectImageGridDomain = state => state.imageGrid || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ImageGrid
 */

const makeSelectImageGrid = () =>
  createSelector(
    selectImageGridDomain,
    substate => substate,
  );

const makeSelectImages = () =>
  createSelector(
    selectImageGridDomain,
    substate => substate.images,
  );

const makeSelectPages = () =>
  createSelector(
    selectImageGridDomain,
    substate => substate.page,
  );

const makeSelectError = () =>
  createSelector(
    selectImageGridDomain,
    substate => substate.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectImageGridDomain,
    substate => substate.isLoading,
  );

export default makeSelectImageGrid;
export {
  selectImageGridDomain,
  makeSelectImages,
  makeSelectPages,
  makeSelectError,
  makeSelectLoading,
};
