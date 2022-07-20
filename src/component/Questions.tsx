import React, { FC, useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import questions from '../mock-data/data.json';
import ExamSummary from './ExamSummary';
import ExamTimer from './ExamTimer';
import Button from './UI/Button';
import CalculatorApp from './UI/Calculator';
import ErrorModal from './UI/ErrorModal';

interface questionModel {
	id: number;
	questionText: string;
	answerOptions: {
		id?: number | string;
		label?: string;
		answerTex: string;
		isCorrect: boolean;
		checked?: boolean;
	}[];
	questionInstruction?: string;
	reviewLater?: boolean;
}

const Questions = () => {
	const [question, setQuestion] = useState<questionModel[]>(
		questions.map((item) => ({
			...item,
			reviewLater: false,
			answerOptions: item.answerOptions.map((value) => ({
				...value,
				checked: false,
			})),
		}))
	);
	const [currQuestion, setCurrQuestion] = useState(0);
	const [currOption, setCurrOption] = useState<any>();
	const [currQuestionId, setCurrQuestionId] = useState<any>();
	const [currAnswerId, setCurrAnswerId] = useState<any>();
	const [review, setReview] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean | null>(false);
	const [attempted, setAttempted] = useState<number>(0);

	const [showCalc, setShowCalc] = useState(false);

	const showCalculator = () => {
		setShowCalc((prevState) => !prevState);
	};

	const handleSelect = (i: number) => {
		if (currOption === i) {
			return i;
		}
	};

	const handleCheck = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
		setCurrQuestionId(e.currentTarget.dataset.questionId);
		setCurrAnswerId(e.currentTarget.dataset.answerId);
		setCurrOption(i);
	};

	const changeHandler = (e?: React.MouseEvent<HTMLButtonElement>) => {
		setReview(false);
		const activeIndex = parseFloat(e?.currentTarget.dataset.index!);
		setCurrQuestion(activeIndex);
		const cloned = question;
		for (let i in cloned) {
			const newQuestion = cloned[i];
			// console.log(newQuestion);
			if (newQuestion.id === Number(currQuestionId)) {
				for (let j in newQuestion.answerOptions) {
					const answers = newQuestion.answerOptions[j];
					answers.checked = false;
					if (answers.id === Number(currAnswerId)) {
						answers.checked = true;
						setAttempted((prevState) => prevState + 1);
					}
					// console.log(newQuestion.answerOptions[j]);
				}
			}
		}
		setQuestion(cloned);
	};

	const onReviewLater = (e: React.ChangeEvent<HTMLInputElement>) => {
		setReview(e.currentTarget.checked);
		const questionID = e.currentTarget.value;
		const cloned = question;
		for (let i in cloned) {
			const newQuestion = cloned[i];
			if (newQuestion.id === Number(questionID)) {
				// console.log(onReview);
				newQuestion.reviewLater = e.currentTarget.checked;
			}
		}
		setQuestion(cloned);
	};

	useEffect(() => {
		console.log(attempted);
	}, [attempted]);

	return (
		<div>
			<div className='min-h-screen mt-[77px] px-[124px]'>
				<div className='flex justify-between '>
					<div className='w-[60%] flex flex-col justify-between'>
						<div>
							<div>
								<div className='flex justify-between mb-[44px]'>
									<span className='bg-[#FFAD4A] flex justify-center items-center rounded-[8px] text-[20px] w-[45px] h-[43px] text-white'>
										{currQuestion + 1}
									</span>
									<div className='flex items-center gap-x-[10px]'>
										<input
											type='checkbox'
											checked={review}
											onChange={onReviewLater}
											value={question[currQuestion].id}
										/>
										<p className='text-[14px]'>Revise later</p>
									</div>
								</div>
								<div className='w-full bg-[#06042C] h-[8px] bg-opacity-20 rounded-[10px]'>
									<div
										className={`bg-[#0075FF] h-[8px] rounded-l-[8px] w-[25%]`}
									></div>
								</div>
								<div className='bg-white mt-[96px] flex flex-col h-[720px] justify-between'>
									<div>
										<p className='mb-[60px] text-[24px]'>
											{question[currQuestion].questionText}
										</p>
										<div className='flex flex-col gap-y-[20px]'>
											{question[currQuestion].answerOptions.map((item, idx) => {
												// console.log(checked);
												return (
													<button
														key={idx}
														data-question-id={question[currQuestion].id}
														data-answer-id={item.id}
														onClick={(e) => handleCheck(idx + 1, e)}
														className={`flex gap-x-[16px] py-[15px] px-[20px] cursor-pointer options border-2 items-center ${
															handleSelect(idx + 1) === idx + 1
																? 'border-[#0075ff]'
																: 'border-[#C0C0C0]'
														}`}
													>
														<span
															className={`${
																handleSelect(idx + 1) === idx + 1
																	? 'bg-[#0075ff] text-white'
																	: 'bg-white'
															} flex justify-center items-center border rounded-[100%] h-[32px] w-[32px]`}
														></span>
														<p>{item.answerTex}</p>
													</button>
												);
											})}
										</div>
									</div>
									<div className='flex justify-between'>
										{currQuestion > 0 && (
											<Button
												dataIndex={currQuestion - 1}
												onClick={changeHandler}
												classes='flex justify-center text-[#0075FF] items-center gap-x-[9px]'
											>
												<BsArrowLeft /> Previous
											</Button>
										)}
										{currQuestion < questions.length - 1 && (
											<Button
												dataIndex={currQuestion + 1}
												onClick={changeHandler}
												classes='flex gap-x-[9px] bg-[#0075ff] text-white justify-center items-center'
											>
												Next
												<BsArrowRight />
											</Button>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-[30%]'>
						<div className='flex items-center justify-between w-full'>
							<img
								src={'/images/user2.png'}
								alt='user avatar'
								width={98}
								height={98}
							/>
							<h3 className='text-[20px]'>Adekunle Fajuyi Emeka</h3>
						</div>
						<ExamTimer />
						<div className='mt-[42px]'>
							{showCalc ? (
								<CalculatorApp />
							) : (
								<div className='examSummaryCard'>
									<div className='mb-[16px] pr-[20px]'>
										<div className='pb-[16px]'>
											<h4 className='text-[18px] font-semibold'>
												First Term Exam 2022
											</h4>
											<h6 className='text-[14px]'>Mathematics</h6>
										</div>
										<hr />
										<div className='flex flex-col gap-y-[16px] mt-[16px]'>
											<h5>Test Summary</h5>
											<div className='flex justify-between'>
												<div className='flex gap-x-[10px] items-center'>
													<span className='bg-[#0075FF] h-[14px] rounded-[100%] w-[14px]'></span>{' '}
													<h6 className='text-[14px]'>Attempted</h6>
												</div>{' '}
												<span className='text-[14px]'>
													{
														question.filter((item) =>
															item.answerOptions.some(
																(value) => value.checked === true
															)
														).length
													}
												</span>
											</div>
											<div className='flex justify-between'>
												<div className='flex gap-x-[10px] items-center'>
													<span className='bg-[#FFAD4A] h-[14px] rounded-[100%] w-[14px]'></span>{' '}
													<h6 className='text-[14px]'>Revise Later</h6>
												</div>{' '}
												<span className='text-[14px]'>
													{
														question.filter((item) => item.reviewLater === true)
															.length
													}
												</span>
											</div>
											<div className='flex justify-between'>
												<div className='flex gap-x-[10px] items-center'>
													<span className='bg-[#C0C0C0] h-[14px] rounded-[100%] w-[14px]'></span>{' '}
													<h6 className='text-[14px]'>Not Attempted</h6>
												</div>{' '}
												<span className='text-[14px]'>
													{questions.length -
														question.filter((item) =>
															item.answerOptions.some(
																(value) => value.checked === true
															)
														).length}
												</span>
											</div>
										</div>
										<hr className='mt-[16px]' />
									</div>
									<div>
										<h5>Question List</h5>
										<div className='grid grid-cols-5 gap-y-[10px] mt-[24px] overflow-y-scroll h-[200px] gap-x-[10px]'>
											{question.map((item, idx) => (
												<div
													onClick={() => {
														setReview(false);
														setCurrQuestion(item.id - 1);
													}}
													className={`${
														item.reviewLater
															? 'bg-[#FFAD4A]'
															: `${
																	item.answerOptions.filter(
																		(answer) => answer.checked === true
																	).length === 1
																		? 'bg-[#0075FF]'
																		: 'bg-[#C0C0C0]'
															  }`
													} rounded-[8px] text-[14px] cursor-pointer text-white flex justify-center items-center h-[40px] w-[40px]`}
													key={idx}
												>
													{item.id}
												</div>
											))}
										</div>
										<div className='text-center mt-[16px]'>
											{showModal && (
												<ErrorModal
													content2='Are you sure you want to end your exam'
													link='/endExam'
													linkContent='End Exam'
													onClick={() => setShowModal(false)}
												/>
											)}
											<Button
												onClick={() => setShowModal(true)}
												classes='text-[#0075FF]'
											>
												End Exam
											</Button>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='flex justify-end mb-[114px] mt-[155px] w-full'>
					<button
						onClick={showCalculator}
						className='bg-[#FFAD4A] flex justify-center items-center rounded-[100%] h-[100px] w-[100px]'
					>
						<img
							src='/images/calc.png'
							alt='calculator icon'
							width={'55px'}
							height='50px'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Questions;
