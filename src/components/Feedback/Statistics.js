import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ options, total, positivePercentage }) => (
  <>
    {options.map(option => {
      return (
        <span key={option[0]} className="text">
          {option[0]}: {option[1]}
        </span>
      );
    })}
    <span className="text">Total: {total}</span>
    {positivePercentage > 0 && (
      <span className="text">Positive feedback: {positivePercentage}%</span>
    )}
  </>
);

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
