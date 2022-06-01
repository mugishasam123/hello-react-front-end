/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Rails-React testing</h1>
        <Link to="/greetings" className="button3">
          Go to Greetings page
        </Link>
      </div>
    );
  }
}

export default Homepage;
