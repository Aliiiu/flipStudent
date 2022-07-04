import { ACTIONS } from './Calculator';

export default function DigitBtn({ dispatch, digit }) {
	return (
		<button
			className='text-white text-[35px] bg-[#0075FF]'
			onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
		>
			{digit}
		</button>
	);
}
