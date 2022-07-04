import { ReactNode } from 'react';

type Props = {
	classes?: string;
	onClick?: () => void;
	dataIndex?: number;
	children: ReactNode;
};
const Button = ({ classes, children, onClick, dataIndex }: Props) => {
	return (
		<button
			data-index={dataIndex}
			onClick={onClick}
			className={`py-[14px] text-[20px] w-[200px] endExamBtn ${classes}`}
		>
			{children}
		</button>
	);
};

export default Button;
