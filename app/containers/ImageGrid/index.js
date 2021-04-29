/**
 *
 * ImageGrid
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Button from '../../components/Button';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectError,
  makeSelectImages,
  makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import './ImageGrid.css';
import { loadImages } from './actions';

export function ImageGrid(props) {
  useInjectReducer({ key: 'imageGrid', reducer });
  useInjectSaga({ key: 'imageGrid', saga });

  useEffect(() => {
    props.onButtonClicked();
  }, []);

  return (
    <div className="content">
      <Helmet>
        <title>ImageGrid</title>
        <meta name="description" content="Description of ImageGrid" />
      </Helmet>
      <section className="grid">
        {props.images.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      {props.error && (
        <div className="error">{JSON.stringify(props.error)}</div>
      )}
      <Button
        onClick={() => !props.isLoading && props.onButtonClicked()}
        loading={props.isLoading}
      >
        Load More
      </Button>
    </div>
  );
}

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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ImageGrid);
