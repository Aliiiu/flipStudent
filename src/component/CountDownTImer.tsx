import React, { FC, useState } from 'react';
import { useCountDown } from '../hook/useCounterDown';
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
	return (
		<div className='expired-notice'>
			<span>Time is up</span>
		</div>
	);
};

const ShowCounter: FC<{ hours: number; minutes: number; seconds: number }> = ({
	hours,
	minutes,
	seconds,
}) => {
	return (
		<div className='flex items-center justify-center'>
			<DateTimeDisplay value={hours} isDanger={minutes < 3} />
			<span
				className={`text-[32px] ${
					minutes < 3 ? 'text-red-500' : 'text-[#0075FF]'
				}`}
			>
				:
			</span>
			<DateTimeDisplay value={minutes} isDanger={minutes < 3} />
			<span
				className={`text-[32px] ${
					minutes < 3 ? 'text-red-500' : 'text-[#0075FF]'
				}`}
			>
				:
			</span>
			<DateTimeDisplay value={seconds} isDanger={minutes < 3} />
		</div>
	);
};

const CountDownTimer: FC<{ targetTime: number }> = ({ targetTime }) => {
	const [hours, minutes, seconds] = useCountDown(targetTime);

	if (hours + minutes + seconds <= 0) {
		return <ExpiredNotice />;
	} else {
		return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />;
	}
};

export default CountDownTimer;
