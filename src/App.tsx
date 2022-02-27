import React, { useEffect } from 'react';
import './App.css';
import MainRoutes from './containers/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from './redux/reducers/usersReducer';
import { getUsersData, signup, login } from './redux/actions/usersActions';
import { getPlacesByUserId } from './redux/actions/placesActions';
import { placesSelector } from './redux/reducers/placesReducer';

const App = () => {
  const dispatch = useDispatch();
  const { placesData } = useSelector(placesSelector);
  useEffect(() => {
    dispatch(
      // signup({
      //   name: 'Giannis',
      //   email: 'giannis@giannis.com',
      //   password: 'Giannis123',
      // })
      getPlacesByUserId({ uid: '62194ddcbc640c5dad53639d' })
      // getUsersData()
    );
  }, []);

  console.log('hello', placesData);
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
