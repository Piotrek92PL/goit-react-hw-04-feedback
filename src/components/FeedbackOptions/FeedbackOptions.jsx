import React from 'react';
import css from './FeedbackOptions.module.css'; // Zaimportuj moduł CSS

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Rating:</h2>
      {options.map(option => (
        <button
          key={option}
          className={css.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
