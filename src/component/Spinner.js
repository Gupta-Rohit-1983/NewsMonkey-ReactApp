import React from 'react';
import loading from './loading.gif';

const Spinner = () => {
  return (
    <div className='text-center my-5'>
      <img style={{ width: '200px', height: '150px' }} src={loading} alt="load" />
    </div>
  );
};

export default Spinner;
