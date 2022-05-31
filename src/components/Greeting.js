/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGreetingsFromApi } from '../redux/greetings';
import '../App.css';

const Greeting = () => {
  const greeting = useSelector((state) => state.reducerGreetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetingsFromApi());
  }, [dispatch]);

  return (
    <div className="greeting-wrapper">
      <h1>Rails-React exercise</h1>
      <h2 className="text">{greeting.message}</h2>
      <button
        onClick={() => dispatch(getGreetingsFromApi())}
        className="button1"
      >
        Next message
      </button>
      <Link to="/" className="button2">
        Home
      </Link>
    </div>
  );
};

export default Greeting;
