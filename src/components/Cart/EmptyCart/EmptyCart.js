import React from 'react';
import { useHistory } from 'react-router';
import './emptycart.css';

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className='emptyCart'>
      <p></p>
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
