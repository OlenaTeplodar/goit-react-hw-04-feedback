import PropTypes from 'prop-types';
import { Statistic } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positiveFeedbackCount }) => {
  return (
    <>
      <Statistic>Good: {good}</Statistic>
      <Statistic>Neutral: {neutral}</Statistic>
      <Statistic>Bad: {bad}</Statistic>
      <Statistic>Total: {total}</Statistic>
      <Statistic>
        Positive feedback: {positiveFeedbackCount}
        <span>%</span>
      </Statistic>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackCount: PropTypes.number.isRequired,
};
