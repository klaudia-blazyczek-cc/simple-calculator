import React from 'react';

interface Props {
	className?: string;
	value: string;
}

function CalculationsPanel({ className, value }: Props) {
	return <div className={className}>{value}</div>;
}

export default CalculationsPanel;
