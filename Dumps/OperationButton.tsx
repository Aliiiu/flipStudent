import React, { FC } from 'react';
import { ACTIONS } from './Calculator';

const OperationButton: FC<{
	dispatch: any;
	operation: any;
	classes?: string;
}> = ({ dispatch, operation, classes }) => {
	return (
		<button
			className={`text-white text-[35px] bg-[#0075FF] ${classes}`}
			onClick={() =>
				dispatch({ type: ACTIONS.ADD_DIGIT, payload: { operation } })
			}
		>
			{operation}
		</button>
	);
};

export default OperationButton;
