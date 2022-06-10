import { useState } from 'react';

import { CalculatorWrapper } from './Calculator.styled';
import { StyledButtonsPanel } from './buttons-panel';
import { StyledCalculationsPanel } from './calculations-panel';

const isNumber = (value: string): boolean => {
	return /[0-9]+/.test(value);
};

enum Operations {
	Add = '+',
	Subtract = '-',
	Multiply = '*',
	Divide = '/',
}

function Calculator() {
	const [valueToShow, setValueToShow] = useState<string>(''); // shows current value or actions
	const [result, setResult] = useState<number>(0.0); // current result
	const [operation, setOperation] = useState<Operations | undefined>(undefined); // chosen operation
	const [userInput, setUserInput] = useState<number | undefined>(undefined); // current input
	const [ifDottNeeded, setIfDottNeeded] = useState<boolean>(false); // flag to determine if '.' must be added to any number

	const onClickHandler = (input: string): void => {
		if (input === 'AC') {
			setValueToShow('');
			setResult(0.0);
			setOperation(undefined);
			setUserInput(undefined);
			setIfDottNeeded(false);
		} else if (isNumber(input)) {
			if (operation === undefined) {
				if (ifDottNeeded) {
					setIfDottNeeded(false);
					const newResult: number = Number(result.toString() + '.' + input);
					setValueToShow(newResult.toString());
					setResult(newResult);
				} else {
					const newResult: number = Number(result.toString() + input);
					setValueToShow(newResult.toString());
					setResult(newResult);
				}
			} else {
				if (userInput !== undefined) {
					if (ifDottNeeded) {
						setIfDottNeeded(false);
						const newResult: number = Number(
							userInput.toString() + '.' + input,
						);
						setValueToShow(newResult.toString());
						setUserInput(newResult);
					} else {
						const newResult: number = Number(userInput.toString() + input);
						setValueToShow(newResult.toString());
						setUserInput(newResult);
					}
				} else {
					const newResult: number = Number(input);
					setValueToShow(newResult.toString());
					setUserInput(newResult);
				}
			}
		} else if (input === '.') {
			if (userInput === undefined) {
				if (!result.toString().includes('.')) {
					setIfDottNeeded(true);
					setValueToShow(result.toString() + '.');
				}
			} else {
				if (!userInput.toString().includes('.')) {
					setIfDottNeeded(true);
					setValueToShow(userInput.toString() + '.');
				}
			}
		} else if (input === '+') {
			setOperation(Operations.Add);
		} else if (input === '-') {
			setOperation(Operations.Subtract);
		} else if (input === 'x') {
			setOperation(Operations.Multiply);
		} else if (input === '÷') {
			setOperation(Operations.Divide);
		} else if (input === '+/-') {
			if (operation === undefined) {
				if (result !== 0.0) {
					if (Array.from(result.toString())[0] === '-') {
						const newResult: number = Number(result.toString().substring(1));
						setValueToShow(newResult.toString());
						setResult(newResult);
					} else {
						const newResult: number = Number('-' + result.toString());
						setValueToShow(newResult.toString());
						setResult(newResult);
					}
				}
			} else {
				if (userInput !== undefined) {
					if (userInput !== 0.0) {
						if (Array.from(userInput.toString())[0] === '-') {
							const newResult: number = Number(
								userInput.toString().substring(1),
							);
							setValueToShow(newResult.toString());
							setUserInput(newResult);
						} else {
							const newResult: number = Number('-' + userInput.toString());
							setValueToShow(newResult.toString());
							setUserInput(newResult);
						}
					}
				}
			}
		} else if (input === '=') {
			if (operation !== undefined && userInput !== undefined) {
				if (operation === Operations.Add) {
					setValueToShow((result + userInput).toString());
					setResult(result + userInput);
					setOperation(undefined);
					setUserInput(undefined);
					setIfDottNeeded(false);
				} else if (operation === Operations.Subtract) {
					setValueToShow((result - userInput).toString());
					setResult(result - userInput);
					setOperation(undefined);
					setUserInput(undefined);
					setIfDottNeeded(false);
				} else if (operation === Operations.Multiply) {
					setValueToShow((result * userInput).toString());
					setResult(result * userInput);
					setOperation(undefined);
					setUserInput(undefined);
					setIfDottNeeded(false);
				} else if (operation === Operations.Divide) {
					if (userInput !== 0.0) {
						setValueToShow((result / userInput).toString());
						setResult(result / userInput);
						setOperation(undefined);
						setUserInput(undefined);
						setIfDottNeeded(false);
					} else {
						// in real app here i would have put some modal with feedback
						alert("Can't divide by 0");
					}
				}
			}
		} else if (input === '%') {
			if (result !== 0.0) {
				setValueToShow((result / 100).toString());
				setResult(result / 100);
			}
		}
	};

	return (
		<CalculatorWrapper>
			<StyledCalculationsPanel value={valueToShow} />
			<StyledButtonsPanel onClick={onClickHandler} />
		</CalculatorWrapper>
	);
}

export default Calculator;
