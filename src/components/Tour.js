import React from 'react';
import PropTypes from 'prop-types';
import TourDisplay from './TourDisplay';

const Tour = ({ tours }) => (
  <section>
    <div className="title">
      <h2>Your Tours</h2>
      <div className="underline" />
    </div>
    {
        tours.map((tour) => (
          <TourDisplay
            key={tour.id}
            id={tour.id}
            name={tour.name}
            image={tour.image}
            info={tour.info}
            price={tour.price}
          />
        ))
    }
  </section>
);

Tour.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // other tour properties
    }),
  ).isRequired,
};

export default Tour;
