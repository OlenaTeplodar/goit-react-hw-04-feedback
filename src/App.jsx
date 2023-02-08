import React, { useState } from 'react';
import Feedback from 'components/Feedback';
import SectionTitle from './components/SectionTitle';
import Message from './components/Message';
import Statistics from 'components/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(feedback);
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;

  const leaveFeedback = name => {
    setFeedback(prevFeedback => {
      const value = prevFeedback[name];
      return { ...prevFeedback, [name]: value + 1 };
    });
  };

  const positiveFeedbackCount = () => {
    if (!total) {
      return 0;
    }
    return Number(((good / total) * 100).toFixed(2));
  };

  return (
    <>
      <SectionTitle text="Please leave feedback!">
        <Feedback options={options} onLeaveFeedback={leaveFeedback} />
      </SectionTitle>

      {total !== 0 ? (
        <SectionTitle text="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedbackCount={positiveFeedbackCount()}
          />
        </SectionTitle>
      ) : (
        <Message text="There is no feedback yet" />
      )}
    </>
  );
};

export default App;
