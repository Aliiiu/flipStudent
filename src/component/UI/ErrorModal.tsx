import { FC, Fragment } from 'react';
import { createPortal } from 'react-dom';

const Backdrop: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <div className='backdrop' onClick={onClick} />;
};

const ModalOverlay: React.FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<div className='relative flex flex-col items-center modal gap-y-[24px] verify_modal_card'>
			<div className='fixed right-[36%] top-[31%]'>
				<img
					src={'/images/close.png'}
					alt='close'
					width='30px'
					height='30px'
					className='cursor-pointer'
					onClick={onClick}
				/>
			</div>
			<h2 className='font-semibold text-[24px]'>Verify your Information</h2>
			<p className='text-center text-[20px]'>
				Lorem ipsum dolor sit amet, sectetur adipiscing elit.
			</p>
			<div className='flex justify-between items-center w-full'>
				<button
					onClick={onClick}
					className='border py-[14px] px-[45px] rounded-[8px] text-[#E25C5C] border-[#E25C5C]'
				>
					Cancel
				</button>
				<a
					href={'/quizPage'}
					className='bg-[#0075FF] py-[14px] rounded-[8px] px-[45px] text-white'
				>
					Start Exam
				</a>
			</div>
		</div>
	);
};

const ErrorModal: FC<{ onClick: () => void }> = ({ onClick }) => {
	// const [mounted, setMounted] = useState<boolean>(false);
	// useEffect(() => {
	// 	setMounted(true);
	// 	return () => setMounted(false);
	// }, [selector, Bselector]);
	const backdropRoot = document.getElementById('backdrop-root') as HTMLElement;
	const overlayRoot = document.getElementById('backdrop-root') as HTMLElement;
	return (
		<Fragment>
			{createPortal(<Backdrop onClick={onClick} />, backdropRoot)}
			{createPortal(<ModalOverlay onClick={onClick} />, overlayRoot)}
		</Fragment>
	);
};

export default ErrorModal;
