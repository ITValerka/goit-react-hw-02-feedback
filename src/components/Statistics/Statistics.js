import propTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
    options,
    onCountTotalFeedback,
    onCountPercentagePositiveFeedback,
}) => (
    <ul className={s.list}>
        <li className={s.item}>
            <p className={s.stat}>Good: {options.Good}</p>
        </li>
        <li className={s.item}>
            <p className={s.stat}>Neutral: {options.Neutral}</p>
        </li>
        <li className={s.item}>
            <p className={s.stat}>Bad: {options.Bad}</p>
        </li>
        <li className={s.item}>
            <p className={s.total}>Total: {onCountTotalFeedback}</p>
        </li>
        <li className={s.item}>
            <p className={s.positivePer}>Positive feedback: {onCountPercentagePositiveFeedback}%</p>
        </li>
    </ul>
);

Statistics.propTypes = {
    options: propTypes.number,
    onCountTotalFeedback: propTypes.number,
    onCountPercentagePositiveFeedback: propTypes.number,
};

export default Statistics;