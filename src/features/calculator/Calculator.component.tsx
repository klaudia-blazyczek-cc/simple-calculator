import React from 'react';

import { CalculatorWrapper } from './Calculator.styled';
import { StyledButtonsPanel } from './buttons-panel';
import { StyledCalculationsPanel } from './calculations-panel';

function Calculator() {
	return (
		<CalculatorWrapper>
			<StyledCalculationsPanel value='Wynik' />
			<StyledButtonsPanel />
		</CalculatorWrapper>
	);
}

export default Calculator;
