import { FC, useEffect, useState } from 'react';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';
import questions from '../mock-data/data.json';

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

const ExamSummary: FC<{
	attempted: number;
	reviseLater: number;
	summarised: questionModel[];
}> = ({ attempted, reviseLater, summarised }) => {
	const [showModal, setShowModal] = useState<boolean | null>(false);

	return (
		<div className='examSummaryCard'>
			<div className='mb-[16px] pr-[20px]'>
				<div className='pb-[16px]'>
					<h4 className='text-[18px] font-semibold'>First Term Exam 2022</h4>
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
						<span className='text-[14px]'>{attempted}</span>
					</div>
					<div className='flex justify-between'>
						<div className='flex gap-x-[10px] items-center'>
							<span className='bg-[#FFAD4A] h-[14px] rounded-[100%] w-[14px]'></span>{' '}
							<h6 className='text-[14px]'>Revise Later</h6>
						</div>{' '}
						<span className='text-[14px]'>{reviseLater}</span>
					</div>
					<div className='flex justify-between'>
						<div className='flex gap-x-[10px] items-center'>
							<span className='bg-[#C0C0C0] h-[14px] rounded-[100%] w-[14px]'></span>{' '}
							<h6 className='text-[14px]'>Not Attempted</h6>
						</div>{' '}
						<span className='text-[14px]'>{questions.length - attempted}</span>
					</div>
				</div>
				<hr className='mt-[16px]' />
			</div>
			<div>
				<h5>Question List</h5>
				<div className='grid grid-cols-5 gap-y-[10px] mt-[24px] overflow-y-scroll h-[200px] gap-x-[10px]'>
					{summarised.map((item, idx) => (
						<div
							className='bg-[#0075FF] rounded-[8px] text-[14px] text-white flex justify-center items-center h-[40px] w-[40px]'
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
					<Button onClick={() => setShowModal(true)} classes='text-[#0075FF]'>
						End Exam
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ExamSummary;
