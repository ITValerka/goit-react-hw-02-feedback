import React from "react";

import propTypes from 'prop-types';
import s from './FeedbackBtns.module.css';

const FeedbackBtns = ({ options, onCountFeedback }) => (
    <ul className={s.wrap}>
        {options.map(option => (
            <li key={option}>
                <button
                    className={s.button}
                    type='button'
                    name={option}
                    onClick={() => onCountFeedback(option)}
                >
                    {option}
                </button>
            </li>
        ))}
    </ul>
);

FeedbackBtns.propTypes = {
    options: propTypes.array,
    option: propTypes.string,
    onCountFeedback: propTypes.func,
};

export default FeedbackBtns