import React from 'react';
import PropTypes from 'prop-types';

const TourDisplay = ({
  id, name, image, info, price,
}) => (
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
        {info}
      </p>
      <button type="button" className="delete-btn">
        not interested
      </button>
    </footer>
  </article>
);

TourDisplay.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TourDisplay;
