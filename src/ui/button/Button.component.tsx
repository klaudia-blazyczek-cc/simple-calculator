import React from 'react';

interface Props {
	className?: string;
}

function Button({ className }: Props) {
	return <div className={className}>3</div>;
}

export default Button;
