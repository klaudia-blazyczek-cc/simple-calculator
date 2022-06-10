import React from 'react';

interface Props {
	className?: string;
	sign: string;
}

function Button({ className, sign }: Props) {
	return (
		<div className={className}>
			<span>{sign}</span>
		</div>
	);
}

export default Button;
