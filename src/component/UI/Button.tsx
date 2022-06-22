import { ReactNode } from 'react';

type Props = {
	classes?: string;
	onClick?: () => void;
	children: ReactNode;
};
const Button = ({ classes, children, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className={`py-[14px] text-[20px] w-[200px] endExamBtn ${classes}`}
		>
			{children}
		</button>
	);
};

export default Button;
