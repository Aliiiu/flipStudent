import { FC, Fragment } from 'react';
import ReactDOM from 'react-dom';
interface Props {
	onClick: any;
}

const Backdrop: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <div className='backdrop cursor-pointer' onClick={onClick} />;
};

const ModalOverlay: React.FC<Props> = ({ onClick }) => {
	return (
		<div className='relative flex flex-col items-center modal gap-y-[30px] modal_card'>
			<div className='fixed right-[36%] top-[31%] cursor-pointer'>
				<img
					src={'/images/close.png'}
					alt='close'
					width='30px'
					height='30px'
					onClick={onClick}
				/>
			</div>
			<p className='text-[#E25C5C] text-center'>
				You have less than 3 minutes to the end of exam
			</p>
			{/* <div
				className={`border-8  w-[80px] h-[80px] flex justify-center items-center rounded-[28px] ${classes}`}
			>
				<img src={src} alt={alt} width='35px' height={'35px'} />
			</div>
			<p className='text-center'>{message}</p> */}
		</div>
	);
};

const TimerModal: FC<Props> = ({ onClick }) => {
	const backdropRoot = document.getElementById('backdrop-root') as HTMLElement;
	const overlayRoot = document.getElementById('backdrop-root') as HTMLElement;
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClick={onClick} />, backdropRoot)}
			{ReactDOM.createPortal(<ModalOverlay onClick={onClick} />, overlayRoot)}
		</Fragment>
	);
};

export default TimerModal;
