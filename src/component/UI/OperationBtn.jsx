import { ACTIONS } from './Calculator';

export default function OperationBtn({ dispatch, operation, classes }) {
	return (
		<button
			className={`text-white text-[35px] bg-[#0075FF] ${classes}`}
			onClick={() =>
				dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
			}
		>
			{operation}
		</button>
	);
}
