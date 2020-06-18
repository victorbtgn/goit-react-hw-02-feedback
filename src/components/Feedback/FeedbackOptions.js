import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button
      name="good"
      className="feedback-btn"
      type="button"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      name="neutral"
      className="feedback-btn"
      type="button"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      name="bad"
      className="feedback-btn"
      type="button"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </>
);

export default FeedbackOptions;
