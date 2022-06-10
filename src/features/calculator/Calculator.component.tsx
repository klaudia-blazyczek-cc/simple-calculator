import { useState } from 'react';

import { CalculatorWrapper } from './Calculator.styled';
import { StyledButtonsPanel } from './buttons-panel';
import { StyledCalculationsPanel } from './calculations-panel';

function Calculator() {
	const [valueToShow, setValueToShow] = useState<string>('');
	const [result, setResult] = useState<number | undefined>(undefined);
	const [operation, setOperation] = useState<string | undefined>(undefined);
	const [currentInput, setCurrentInput] = useState<number>(0);

	const onClickHandler = (content: string) => {
		console.log(content);
	};

	return (
		<CalculatorWrapper>
			<StyledCalculationsPanel value={valueToShow} />
			<StyledButtonsPanel onClick={onClickHandler} />
		</CalculatorWrapper>
	);
}

export default Calculator;
