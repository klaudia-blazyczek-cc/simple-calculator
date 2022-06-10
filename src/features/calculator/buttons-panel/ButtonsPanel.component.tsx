import React from 'react';

import { StyledButton } from '../../../ui';

interface Props {
	className?: string;
	onClick(content: string): void;
}

function ButtonsPanel({ className, onClick }: Props) {
	return (
		<table className={className}>
			<tbody>
				<tr>
					<td>
						<StyledButton primary={true} sign='AC' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={true} sign='+/-' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={true} sign='%' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={false} sign='÷' onClick={onClick} />
					</td>
				</tr>
				<tr>
					<td>
						<StyledButton primary={true} sign='7' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={true} sign='8' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={true} sign='9' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={false} sign='x' onClick={onClick} />
					</td>
				</tr>
				<tr>
					<td>
						<StyledButton primary={true} sign='4' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={true} sign='5' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={true} sign='6' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={false} sign='-' onClick={onClick} />
					</td>
				</tr>
				<tr>
					<td>
						<StyledButton primary={true} sign='1' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={true} sign='2' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={true} sign='3' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={false} sign='+' onClick={onClick} />
					</td>
				</tr>
				<tr>
					<td colSpan={2}>
						<StyledButton primary={false} sign='0' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={false} sign='.' onClick={onClick} />
					</td>
					<td>
						<StyledButton primary={false} sign='=' onClick={onClick} />
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default ButtonsPanel;
