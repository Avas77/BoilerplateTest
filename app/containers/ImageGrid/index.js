/**
 *
 * ImageGrid
 *
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
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

const withReducer = useInjectReducer({ key: 'imageGrid', reducer });
const withSaga = useInjectSaga({ key: 'imageGrid', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
  withSaga,
  withReducer,
);

export default compose(withConnect)(ImageGrid);
