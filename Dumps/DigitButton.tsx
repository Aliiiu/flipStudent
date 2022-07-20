import React, { FC } from 'react';
import { ACTIONS } from './Calculator';

type ActionPayload = {
	digit: string;
	operation: string;
};

type BtnActionType = {
	type:
		| 'add-digit'
		| 'choose-operation'
		| 'clear'
		| 'delete-digit'
		| 'evaluate';
	payload?: ActionPayload;
};

const DigitButton: FC<{ dispatch: any; digit: any }> = ({
	dispatch,
	digit,
}) => {
	return (
		<button
			className='text-white text-[35px] bg-[#0075FF]'
			onClick={() =>
				dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { digit } })
			}
		>
			{digit}
		</button>
	);
};

export default DigitButton;
