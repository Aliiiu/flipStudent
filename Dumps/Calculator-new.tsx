import React, { useEffect, useReducer, useState } from 'react';
import DigitButton from './UI/DigitButton';
// import NumberFormat from 'react-number-format';
import OperationButton from './UI/OperationButton';

export const ACTIONS = {
	ADD_DIGIT: 'add-digit',
	CHOOSE_OPERATION: 'choose-operation',
	CLEAR: 'clear',
	DELETE_DIGIT: 'delete-digit',
	EVALUATE: 'evaluate',
};

type BtnState = {
	currentOperand?: string | null;
	previousOperand?: string | null;
	operation?: string | null;
	overwrite?: any;
};

type ActionPayload = {
	digit: string;
	operation: string;
};

const initialState = {
	currentOperand: '',
	previousOperand: '',
	operation: '',
	overwrite: null,
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

function reducer(state: BtnState, action: BtnActionType): BtnState {
	switch (action.type) {
		case 'add-digit':
			if (state.overwrite) {
				return {
					...state,
					currentOperand: action.payload!.digit,
					overwrite: false,
				};
			}
			if (action.payload!.digit === '0' && state.currentOperand === '0') {
				return state;
			}
			if (
				action.payload!.digit === '.' &&
				state.currentOperand?.includes('.')
			) {
				return state;
			}

			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${action.payload?.digit}`,
			};
		case 'choose-operation':
			if (state.currentOperand == null && state.previousOperand == null) {
				return state;
			}

			if (state.currentOperand == null) {
				return {
					...state,
					operation: action.payload!.operation,
				};
			}

			if (state.previousOperand == null) {
				return {
					...state,
					operation: action.payload!.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
				};
			}

			return {
				...state,
				previousOperand: evaluate(state),
				operation: action.payload!.operation,
				currentOperand: null,
			};
		case 'clear':
			return {};
		case 'delete-digit':
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				};
			}
			if (state.currentOperand == null) return state;
			if (state.currentOperand.length === 1) {
				return { ...state, currentOperand: null };
			}

			return {
				...state,
				currentOperand: state.currentOperand.slice(0, -1),
			};
		case 'evaluate':
			if (
				state.operation == null ||
				state.currentOperand == null ||
				state.previousOperand == null
			) {
				return state;
			}

			return {
				...state,
				overwrite: true,
				previousOperand: null,
				operation: null,
				currentOperand: evaluate(state),
			};
		default:
			return state;
	}
}

function evaluate({ currentOperand, previousOperand, operation }: BtnState) {
	const prev = parseFloat(previousOperand!);
	const current = parseFloat(currentOperand!);
	if (isNaN(prev) || isNaN(current)) return '';
	let computation = '';
	switch (operation) {
		case '+':
			computation = String(prev + current);
			break;
		case '-':
			computation = String(prev - current);
			break;
		case '*':
			computation = String(prev * current);
			break;
		case '÷':
			computation = String(prev / current);
			break;
	}

	return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
	maximumFractionDigits: 0,
});
function formatOperand(operand: any) {
	if (operand == null) return;
	const [integer, decimal] = operand.split('.');
	if (decimal == null) return INTEGER_FORMATTER.format(integer);
	return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

const CalculatorNew = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='calculator-grid'>
			<div className='output'>
				<div className='prev-operand text-[30px] text-[#0075FF]'>
					{formatOperand(state.previousOperand)} {state.operation}
				</div>
				<div className='curr-operand text-[60px] text-[#0075FF]'>
					{formatOperand(state.currentOperand)}
				</div>
			</div>
			<button
				onClick={() => dispatch({ type: 'clear' })}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				C
			</button>
			<OperationButton operation='%' dispatch={dispatch} />
			<OperationButton operation='/' dispatch={dispatch} />
			<OperationButton operation='*' dispatch={dispatch} />
			<DigitButton digit='7' dispatch={dispatch} />
			<DigitButton digit='8' dispatch={dispatch} />
			<DigitButton digit='9' dispatch={dispatch} />
			<OperationButton operation='-' dispatch={dispatch} />
			<DigitButton digit='4' dispatch={dispatch} />
			<DigitButton digit='5' dispatch={dispatch} />
			<DigitButton digit='6' dispatch={dispatch} />
			<OperationButton operation='+' dispatch={dispatch} />
			<DigitButton digit='1' dispatch={dispatch} />
			<DigitButton digit='2' dispatch={dispatch} />
			<DigitButton digit='3' dispatch={dispatch} />
			<OperationButton operation='=' classes='span-two' dispatch={dispatch} />
			<DigitButton digit='0' dispatch={dispatch} />
			<DigitButton digit='.' dispatch={dispatch} />
			<button
				onClick={() => dispatch({ type: 'delete-digit' })}
				className='text-white text-[35px] flex justify-center items-center bg-[#0075FF]'
			>
				<img src='/images/cancel.png' alt='' width={'30px'} />
			</button>
		</div>
	);
};

export default CalculatorNew;
