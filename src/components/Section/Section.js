import propTypes from 'prop-types';
import s from './Section.module.css';


const Section = ({ title, children }) => (
	<>
		<h2 className={s.feedbackSection}>{title}</h2>
		{children}
	</>
);

Section.propTypes = {
    title: propTypes.string,
};

export default Section;