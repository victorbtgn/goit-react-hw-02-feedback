import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button
      key={option}
      name={option}
      className="btn"
      type="button"
      onClick={onLeaveFeedback}
    >
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
