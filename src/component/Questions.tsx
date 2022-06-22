import { useState } from 'react';

interface Array {
	label: string;
	option: string;
}
const options: Array[] = [
	{ label: 'A', option: 'Lorem ipsum dolor' },
	{ label: 'B', option: 'Lorem ipsum dolor' },
	{ label: 'C', option: 'Lorem ipsum dolor' },
	{ label: 'D', option: 'Lorem ipsum dolor' },
];

const Questions = () => {
	const [select, setSelect] = useState(false);
	const [currOption, setCurrOption] = useState<number>(0);

	const clickHandler = (index: number) => {
		setSelect((prevState) => !prevState);
		setCurrOption(index);
	};
	return (
		<div className='bg-white mt-[96px]'>
			<p className='mb-[60px] text-[24px]'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis venenatis,
				sodales pretium felis, egestas tempus, elementum quisque tellus?
			</p>
			<div className='flex flex-col gap-y-[20px]'>
				{options.map((item, idx) => (
					<div
						key={idx}
						onClick={() => clickHandler(idx)}
						className={`flex gap-x-[16px] py-[15px] px-[20px] cursor-pointer options border-2 items-center ${
							select && currOption === idx
								? 'border-[#0075ff]'
								: 'border-[#C0C0C0]'
						}`}
					>
						<span
							className={`${
								select && currOption === idx
									? 'bg-[#0075ff] text-white'
									: 'bg-[#C0C0C0]'
							} flex justify-center items-center rounded-[100%] h-[32px] w-[32px]`}
						>
							{item.label}
						</span>
						<p>{item.option}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Questions;
