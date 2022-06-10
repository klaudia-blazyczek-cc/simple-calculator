import React from 'react';

interface Props {
	className?: string;
	sign: string;
	onClick(content: string): void;
}

function Button({ className, sign, onClick }: Props) {
	const onClickHandler = (event: React.MouseEvent<HTMLDivElement>): void => {
		event.preventDefault();
		onClick(sign);
	};

	return (
		<div className={className} onClick={onClickHandler} defaultValue={sign}>
			{sign}
		</div>
	);
}

export default Button;
