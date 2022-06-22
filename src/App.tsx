import { useState } from 'react';
import Header from './component/Header';
import Login from './component/Login';
import LoginModal from './component/UI/LoginModal';
import VerifyInfo from './component/VerifyInfo';

interface Props {
	message: string;
	src: string;
	alt: string;
	classes: string;
}

function App() {
	const [error, setError] = useState<Boolean>();
	const [enteredStudentID, setenteredStudentID] = useState('');
	const [enteredExamID, setenteredExamID] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [modalMessage, setModalMessage] = useState<Props>({
		message: '',
		src: '',
		alt: '',
		classes: '',
	});
	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	const loginHandler = (studentId: string, examId: string) => {
		if (
			studentId.toUpperCase() === 'ABC/2022/108' &&
			examId.toUpperCase() === 'MTH201'
		) {
			if (studentId !== enteredStudentID && examId !== enteredExamID) {
				setenteredStudentID(studentId);
				setenteredExamID(examId);
				setIsLoggedIn(true);
			} else {
				setError(true);
				setenteredStudentID('');
				setenteredExamID('');
				setModalMessage({
					message:
						'Congratulations ABC/2022/108, You have completed your exam.',
					src: '/images/checkCircle.png',
					alt: 'success',
					classes: 'bg-[#D1FADF] border-[#ECFDF3]',
				});
			}
		} else {
			setError(true);
			setModalMessage({
				message: 'You are not scheduled for this examination',
				src: '/images/alertCircle.png',
				alt: 'something went wrong',
				classes: 'bg-[#FEE4E2] border-[#FEF3F2]',
			});
		}
	};

	const closeModalHandler = () => {
		setError(false);
	};
	return (
		<div>
			<div className='container'>
				<Header onLogout={logoutHandler} isAuthenticated={isLoggedIn} />
			</div>
			{error && (
				<LoginModal
					message={modalMessage.message}
					alt={modalMessage.alt}
					src={modalMessage.src}
					classes={modalMessage.classes}
					onClick={closeModalHandler}
				/>
			)}
			<main>
				<div className='mainBg'>
					<div className='container'>
						{!isLoggedIn && <Login onLogin={loginHandler} />}
					</div>
				</div>
				<div>{isLoggedIn && <VerifyInfo />}</div>
			</main>
		</div>
	);
}

export default App;
