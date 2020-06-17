import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="feedback">
        <h2 className="feedback-title">Please leave feedback</h2>
        <button
          className="feedback-btn"
          type="button"
          onClick={this.goodIncrement}
        >
          Good
        </button>
        <button
          className="feedback-btn"
          type="button"
          onClick={this.neutralIncrement}
        >
          Neutral
        </button>
        <button
          className="feedback-btn"
          type="button"
          onClick={this.badIncrement}
        >
          Bad
        </button>
        <h3 className="feedback-title">Statistics</h3>
        <span className="feedback-text">Good: {good}</span>
        <span className="feedback-text">Neutral: {neutral}</span>
        <span className="feedback-text">Bad: {bad}</span>
      </div>
    );
  }
}

export default Feedback;
