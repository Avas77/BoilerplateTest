/**
 *
 * ImageGrid
 *
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectError,
  makeSelectImages,
  makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import './ImageGrid.css';
import { loadImages } from './actions';
import ImageGrid from './ImageGrid';

ImageGrid.propTypes = {
  images: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
  error: makeSelectError(),
  isLoading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onButtonClicked: () => dispatch(loadImages()),
  };
}

const withReducer = injectReducer({ key: 'imageGrid', reducer });
const withSaga = injectSaga({ key: 'imageGrid', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(ImageGrid);
