import { FC, Fragment } from 'react';
import ReactDOM from 'react-dom';
interface Props {
	message: string;
	src: string;
	alt: string;
	onClick: any;
	classes: any;
}

const Backdrop: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <div className='backdrop' onClick={onClick} />;
};

const ModalOverlay: React.FC<Props> = ({
	message,
	src,
	alt,
	onClick,
	classes,
}) => {
	return (
		<div className='relative flex flex-col items-center modal gap-y-[30px] modal_card'>
			<div className='fixed right-[36%] top-[31%]'>
				<img
					src={'/images/close.png'}
					alt='close'
					width='30px'
					height='30px'
					onClick={onClick}
				/>
			</div>
			<div
				className={`border-8  w-[80px] h-[80px] flex justify-center items-center rounded-[28px] ${classes}`}
			>
				<img src={src} alt={alt} width='35px' height={'35px'} />
			</div>
			<p className='text-center'>{message}</p>
		</div>
	);
};

const LoginModal: FC<Props> = ({ message, src, alt, onClick, classes }) => {
	const backdropRoot = document.getElementById('backdrop-root') as HTMLElement;
	const overlayRoot = document.getElementById('backdrop-root') as HTMLElement;
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClick={onClick} />, backdropRoot)}
			{ReactDOM.createPortal(
				<ModalOverlay
					onClick={onClick}
					message={message}
					src={src}
					alt={alt}
					classes={classes}
				/>,
				overlayRoot
			)}
		</Fragment>
	);
};

export default LoginModal;
