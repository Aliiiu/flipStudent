import { useState } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import ErrorModal from './UI/ErrorModal';
import PopUpModal from './UI/PopModal';

interface DArray {
	label: string;
	value: string;
}
const VerifyInfo = () => {
	const data: DArray[] = [
		{
			label: 'name',
			value: 'Olajide Olajide',
		},
		{
			label: 'Student ID',
			value: '1234566',
		},
		{
			label: 'Class',
			value: 'SS3',
		},
		{
			label: 'Department',
			value: 'Science',
		},
		{
			label: 'Subject',
			value: 'Mathematics',
		},
		{
			label: 'Assessment ID',
			value: 'Mth112',
		},
		{
			label: 'Assessment TIme',
			value: '30 mins',
		},
		{
			label: 'Total Number of Questions',
			value: '50',
		},
		{
			label: 'Assessment Status',
			value: 'Pending',
		},
	];

	const [showModal, setShowModal] = useState<boolean | null>(false);
	const [showPopModal, setShowPopModal] = useState<boolean | null>(false);

	const clickHandler = () => {
		setShowModal(true);
	};
	const popUpHandler = () => {
		setShowPopModal((prevState) => !prevState);
	};
	return (
		<div>
			{showModal && <ErrorModal onClick={() => setShowModal(false)} />}
			<div className='container'>
				<div className='pl-[255px] pt-[83px] pb-[213px] pr-[123px]'>
					<div>
						<img
							src={'/images/user1.png'}
							alt='studentID'
							width={203}
							height={203}
						/>
						<div className='mt-[50px] grid gap-y-[50px] gap-x-[120px] grid-cols-3'>
							{data.map((item, idx) => (
								<div key={idx}>
									<h3 className='text-[20px]'>{item.label}</h3>
									<p className='text-[32px]'>{item.value}</p>
								</div>
							))}
						</div>
						{showPopModal && <PopUpModal />}
						<div className='mt-[85px] flex justify-end'>
							<div className='w-[80%] flex justify-between'>
								<button
									onClick={clickHandler}
									className='text-white rounded-[8px] text-[20px] w-[50%] py-[14px] bg-[#0075FF]'
								>
									Start Exam
								</button>
								<button
									onClick={popUpHandler}
									className='text-white text-[20px] flex gap-x-[5px] items-center rounded-[40px] px-[40px] py-[14px] hint_shadow bg-[#FFAD4A]'
								>
									<HiOutlineLightBulb className='text-[30px]' />
									<span className='block'>Hints</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerifyInfo;
