import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTours } from '../redux/ToursSlice';
import Loading from './Loading';
import Tour from './Tour';

const Tours = () => {
  const { tours, status } = useSelector((store) => store.tours);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <Loading />
    );
  }

  return (
    <main>
      <Tour tours={tours} />
    </main>
  );
};
export default Tours;
