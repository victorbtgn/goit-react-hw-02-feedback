import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <span className="feedback-text">Good: {good}</span>
    <span className="feedback-text">Neutral: {neutral}</span>
    <span className="feedback-text">Bad: {bad}</span>
    <span className="feedback-text">Total: {total}</span>
    {positivePercentage > 0 && (
      <span className="feedback-text">
        Positive feedback: {positivePercentage}%
      </span>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
