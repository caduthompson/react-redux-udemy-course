import React from 'react';

export default (props) => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Random Value</h2>
      <p>
        <strong>Minimum Value: </strong>
        {min}
      </p>
      <p>
        <strong>Maximum Value: </strong>
        {max}
      </p>
      <p>
        <strong>Chosen Value: </strong>
        {random}
      </p>
    </div>
  );
};
