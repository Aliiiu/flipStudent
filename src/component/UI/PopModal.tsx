import { createPortal } from 'react-dom';

interface Array {
	options: string;
}

const Options: Array[] = [
	{ options: 'Press A On Your Keyboard For Option A' },
	{ options: 'Press B On Your Keyboard For Option B' },
	{ options: 'Press C On Your Keyboard For Option C' },
	{ options: 'Press D On Your Keyboard For Option D' },
	{ options: 'Press N On Your Keyboard For Next' },
	{ options: 'Press P On Your Keyboard For Previous' },
	{ options: 'Press S On Your Keyboard To Submit Exam' },
];

const ModalOverlay = () => {
	return (
		<div>
			<div className='popUpModal px-0 p-[20px] w-fit flex flex-col items-center'>
				{Options.map((item, idx) => (
					<div
						className={` ${
							(idx + 1) % 2 === 0 ? 'bg-white' : 'bg-[#0075FF]'
						} bg-opacity-10 w-full text-[20px] px-[20px] py-[10px]  text-[#4F4F4F]`}
						key={idx}
					>
						{item.options}
					</div>
				))}
			</div>
		</div>
	);
};

const PopUpModal = () => {
	return (
		<div>
			{createPortal(
				<ModalOverlay />,
				document.getElementById('overlay-root') as HTMLElement
			)}
		</div>
	);
};

export default PopUpModal;
