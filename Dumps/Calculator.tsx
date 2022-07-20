import React, { useEffect, useReducer, useState } from 'react';
import DigitButton from './UI/DigitButton';
import NumberFormat from 'react-number-format';

const Calculator = () => {
	const [preState, setPreState] = useState('');
	const [currState, setCurrState] = useState('');
	const [input, setInput] = useState('0');
	const [operator, setOperator] = useState<string | null>(null);
	const [total, setTotal] = useState(false);

	const inputnum = (event: React.MouseEvent<HTMLButtonElement>) => {
		const btnElement = event.target as HTMLElement;
		if (currState.includes('.') && btnElement.innerText === '.') return;
		if (total) {
			setPreState('');
		}
		currState
			? setCurrState((pre) => pre + btnElement.innerText)
			: setCurrState(btnElement.innerText);
		setTotal(false);
	};

	useEffect(() => {
		setInput(currState);
	}, [currState]);

	useEffect(() => {
		setInput('0');
	}, []);

	const reset = () => {
		setCurrState('');
		setPreState('');
		setInput('0');
	};

	const operatorType = (e: React.MouseEvent<HTMLButtonElement>) => {
		const optElement = e.target as HTMLElement;
		setTotal(false);
		setOperator(optElement.innerText);
		if (currState === '') return;
		if (preState !== '') {
			equals(e);
		} else {
			setPreState(currState);
			setCurrState('');
		}
	};

	const percent = () => {};

	const equals = (e: React.MouseEvent<HTMLButtonElement>) => {
		const eqElement = e?.target as HTMLElement;
		if (eqElement.innerText === '=') {
			setTotal(true);
		}

		let cal;
		switch (operator) {
			case '/':
				cal = String(parseFloat(preState) / parseFloat(currState));
				break;
			case '+':
				cal = String(parseFloat(preState) + parseFloat(currState));
				break;
			case '-':
				cal = String(parseFloat(preState) - parseFloat(currState));
				break;
			case 'x':
				cal = String(parseFloat(preState) * parseFloat(currState));
				break;
			default:
				return;
		}
		setInput('');
		setPreState(cal);
		setCurrState('');
	};

	return (
		<div className='calculator-grid'>
			<div className='output'>
				<div className='prev-operand text-[30px] text-[#0075FF]'></div>
				<div className='curr-operand text-[60px] text-[#0075FF]'>
					{input !== '' ? (
						<NumberFormat
							value={input}
							displayType={'text'}
							thousandSeparator={true}
						/>
					) : (
						<NumberFormat
							value={preState}
							displayType={'text'}
							thousandSeparator={true}
						/>
					)}
				</div>
			</div>
			<button onClick={reset} className='text-white text-[35px] bg-[#0075FF]'>
				C
			</button>
			<button onClick={percent} className='text-white text-[35px] bg-[#0075FF]'>
				%
			</button>
			<button
				onClick={operatorType}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				/
			</button>
			<button
				onClick={operatorType}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				x
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				7
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				8
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				9
			</button>
			<button
				onClick={operatorType}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				-
			</button>
			{/* <DigitButton dispatch={dispatch} digit='4' /> */}
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				4
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				5
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				6
			</button>
			<button
				onClick={operatorType}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				+
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				1
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				2
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				3
			</button>
			<button
				onClick={equals}
				className='text-white text-[35px] bg-[#0075FF] span-two'
			>
				=
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				0
			</button>
			<button
				onClick={inputnum}
				className='text-white text-[35px] bg-[#0075FF]'
			>
				.
			</button>
			<button
				onClick={equals}
				className='text-white text-[35px] flex justify-center items-center bg-[#0075FF]'
			>
				<img src='/images/cancel.png' alt='' width={'30px'} />
			</button>
		</div>
	);
};

export default Calculator;
