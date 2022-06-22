import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import ExamSummary from '../ExamSummary';
import ExamTimer from '../ExamTimer';
import Header from '../Header';
import Questions from '../Questions';
import Button from '../UI/Button';

const Exam = () => {
	return (
		<div className=''>
			<div className='container'>
				<Header isAuthenticated={true} />
			</div>
			<div className='min-h-screen mt-[77px] px-[124px]'>
				<div className='flex justify-between '>
					<div className='w-[60%] flex flex-col justify-between'>
						<div>
							<div className='flex justify-between mb-[44px]'>
								<span className='bg-[#FFAD4A] flex justify-center items-center rounded-[8px] text-[20px] w-[45px] h-[43px] text-white'>
									16
								</span>
								<div className='flex items-center gap-x-[10px]'>
									<input
										className='rounded-[100%] h-[20px] w-[20px]'
										type='radio'
									/>
									<p className='text-[14px]'>Revise later</p>
								</div>
							</div>
							<div className='w-full bg-[#06042C] h-[8px] bg-opacity-20 rounded-[10px]'>
								<div className='bg-[#0075FF] h-[8px] rounded-l-[8px] w-[30%]'></div>
							</div>
							<Questions />
						</div>
						<div className='flex justify-between'>
							<Button classes='flex justify-center text-[#0075FF] items-center gap-x-[9px]'>
								<BsArrowLeft /> Previous
							</Button>
							{/* <button className='endExamBtn text-[20px] text-[#0075FF] justify-center flex py-[14px] w-[200px] gap-x-[9px] items-center'>
								{' '}
								<BsArrowLeft /> Previous
							</button> */}
							<Button classes='flex gap-x-[9px] bg-[#0075ff] text-white justify-center items-center'>
								Next
								<BsArrowRight />
							</Button>
							{/* <button className='endExamBtn text-[20px] bg-[#0075FF] justify-center text-white flex py-[14px] w-[200px] gap-x-[9px] items-center'>
								Next
								<BsArrowRight />{' '}
							</button> */}
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
						<ExamSummary />
					</div>
				</div>
				<div className='flex justify-end mb-[114px] mt-[155px] w-full'>
					<div className='bg-[#FFAD4A] flex justify-center items-center rounded-[100%] h-[100px] w-[100px]'>
						<img
							src='/images/calc.png'
							alt='calculator icon'
							width={'55px'}
							height='50px'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Exam;
