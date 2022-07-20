import { useEffect, useState } from 'react';
import ExamSummary from '../ExamSummary';
import ExamTimer from '../ExamTimer';
import Header from '../Header';
import Questions from '../Questions';
import CalculatorApp from '../UI/Calculator';

const Exam = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className=''>
			<div className='container'>
				<Header isAuthenticated={true} />
			</div>
			<div className='container'>
				<Questions />{' '}
			</div>
		</div>
	);
};

export default Exam;
