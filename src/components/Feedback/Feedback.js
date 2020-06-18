import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
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
        <span className="feedback-text">
          Total: {this.countTotalFeedback()}
        </span>
        {this.countPositiveFeedbackPercentage() > 0 && (
          <span className="feedback-text">
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </span>
        )}
      </div>
    );
  }
}

export default Feedback;
