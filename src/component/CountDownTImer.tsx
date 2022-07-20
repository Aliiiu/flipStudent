import React, { FC, useState } from 'react';
import { useCountDown } from '../hook/useCounterDown';
import DateTimeDisplay from './DateTimeDisplay';
import TimerModal from './UI/TimerModal';

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
	const [showModal, setShowModal] = useState(true);
	return (
		<div>
			{minutes < 3 && showModal && (
				<TimerModal onClick={() => setShowModal(false)} />
			)}
			<div className='flex items-center justify-center'>
				<DateTimeDisplay
					value={hours < 10 ? '0' + hours : hours}
					isDanger={minutes < 3}
				/>
				<span
					className={`text-[32px] ${
						minutes < 3 ? 'text-red-500' : 'text-[#0075FF]'
					}`}
				>
					:
				</span>
				<DateTimeDisplay
					value={minutes < 10 ? '0' + minutes : minutes}
					isDanger={minutes < 3}
				/>
				<span
					className={`text-[32px] ${
						minutes < 3 ? 'text-red-500' : 'text-[#0075FF]'
					}`}
				>
					:
				</span>
				<DateTimeDisplay
					value={seconds < 10 ? '0' + seconds : seconds}
					isDanger={minutes < 3}
				/>
			</div>
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
