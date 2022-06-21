import React, { ChangeEventHandler, FC, useState } from 'react';
import { BiLock } from 'react-icons/bi';
import { TbUser } from 'react-icons/tb';

const Login: FC<{ onLogin: any }> = (props) => {
	const [studentIsTouched, setStudentIsTouched] = useState<boolean>(false);
	const [examIsTouched, setExamIsTouched] = useState<boolean>(false);
	const [enteredStudentID, setEnteredStudentID] = useState('');
	const [enteredExamID, setEnteredExamID] = useState('');

	const studentIDIsValid =
		enteredStudentID.trim() !== '' && enteredStudentID.trim().length === 12;
	const examIDIsValid =
		enteredExamID.trim() !== '' && enteredExamID.trim().length === 6;

	const studentInputIsInValid = !studentIDIsValid && studentIsTouched;
	const examInputIsInValid = !examIDIsValid && examIsTouched;

	// ABC/2022/108

	const studentInputChangeHandler: ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		setEnteredStudentID(event.target.value);
	};
	const studentInputBlurHandler = () => {
		setStudentIsTouched(true);
	};
	const examInputChangeHandler: ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		setEnteredExamID(event.target.value);
	};
	const examInputBlurHandler = () => {
		setExamIsTouched(true);
	};

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		setStudentIsTouched(true);
		setExamIsTouched(true);
		if (
			!(
				enteredStudentID.trim().length === 12 &&
				enteredExamID.trim().length === 6
			)
		) {
			return;
		}
		props.onLogin(enteredStudentID, enteredExamID);

		setEnteredExamID('');
		setEnteredStudentID('');
		setExamIsTouched(false);
		setStudentIsTouched(false);
	};

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='card w-[35%] max-w-[540px] '>
				<h2 className='text-center font-semibold mb-[25px] text-[32px]'>
					STUDENT LOGIN
				</h2>
				<form onSubmit={submitHandler}>
					<div className='flex flex-col'>
						<label
							htmlFor='studentId'
							className={`block ${
								studentInputIsInValid ? 'text-red-400' : ''
							} mb-[5px] text-[20px]`}
						>
							Student ID
						</label>
						<div
							className={`flex items-center border  ${
								studentInputIsInValid ? 'border-red-400' : 'border-black'
							} rounded-[8px] bg-white`}
						>
							<TbUser className='text-[25px] ml-[24px]' />
							<input
								type='text'
								placeholder='1258464'
								onChange={studentInputChangeHandler}
								onBlur={studentInputBlurHandler}
								value={enteredStudentID}
								name='studentId'
								className='placeholder-black rounded-tr-[8px] rounded-br-[8px] flex-1 py-[12px] px-[12px] outline-none'
							/>
						</div>
						{studentInputIsInValid && (
							<p className='text-red-400 text-[14px]'>
								Your student ID is incorrect!
							</p>
						)}
					</div>
					<div className='flex flex-col mt-[30px]'>
						<label
							htmlFor='studentId'
							className={`block ${
								studentInputIsInValid ? 'text-red-400' : ''
							} mb-[5px] text-[20px]`}
						>
							Exam ID
						</label>
						<div
							className={`flex items-center border   ${
								examInputIsInValid ? 'border-red-400' : 'border-black'
							} rounded-[8px] bg-white`}
						>
							<BiLock className='text-[25px] ml-[24px]' />
							<input
								type='text'
								placeholder='*********'
								onChange={examInputChangeHandler}
								onBlur={examInputBlurHandler}
								value={enteredExamID}
								name='examId'
								className='placeholder-black rounded-tr-[8px] rounded-br-[8px] flex-1 py-[12px] px-[12px] outline-none'
							/>
						</div>
						{examInputIsInValid && (
							<p className='text-red-400 text-[14px]'>
								Your exam ID is incorrect!
							</p>
						)}
					</div>
					<button
						type='submit'
						className='bg-[#0075FF] text-white text-[20px] rounded-[8px] py-[14px] mt-[49px] w-full'
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
