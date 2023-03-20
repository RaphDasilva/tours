import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { tourActions } from '../redux/ToursSlice';

const TourDisplay = ({
  id, name, image, info, price,
}) => {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    const { id } = event.target.dataset;
    dispatch(tourActions.remove(id));
  };
  return (
    <article className="single-tour" key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">
            $
            {price}
          </h4>
        </div>
        <p>
          {
            readMore ? info : `${info.substring(0, 200)}...`
          }
          <button type="button" onClick={() => setReadMore(!readMore)}>
            {
              readMore ? 'show less' : 'read more'
            }
          </button>
        </p>
        <button type="button" className="delete-btn" data-id={id} onClick={handleRemove}>
          not interested
        </button>
      </footer>
    </article>
  );
};

TourDisplay.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TourDisplay;
