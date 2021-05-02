import React, { useEffect } from 'react';
import Button from '../../components/Button';
import { Helmet } from 'react-helmet';

const ImageGrid = props => {
  console.log(props);
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
};

export default ImageGrid;
