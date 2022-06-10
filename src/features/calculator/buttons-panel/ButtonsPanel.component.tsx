import React from 'react';

import { StyledButton } from '../../../ui';

interface Props {
	className?: string;
}

function ButtonsPanel({ className }: Props) {
	return (
		<table className={className}>
			<tbody>
				<tr>
					<td>
						<StyledButton primary={true} sign='AC' />
					</td>
					<td>
						<StyledButton primary={true} sign='+/-' />
					</td>
					<td>
						<StyledButton primary={true} sign='%' />
					</td>
					<td>
						<StyledButton primary={false} sign='÷' />
					</td>
				</tr>
				<tr>
					<td>
						<StyledButton primary={true} sign='7' />
					</td>
					<td>
						<StyledButton primary={true} sign='8' />
					</td>
					<td>
						<StyledButton primary={true} sign='9' />
					</td>
					<td>
						<StyledButton primary={false} sign='x' />
					</td>
				</tr>
				<tr>
					<td>
						<StyledButton primary={true} sign='4' />
					</td>
					<td>
						<StyledButton primary={true} sign='5' />
					</td>
					<td>
						<StyledButton primary={true} sign='6' />
					</td>
					<td>
						<StyledButton primary={false} sign='-' />
					</td>
				</tr>
				<tr>
					<td>
						<StyledButton primary={true} sign='1' />
					</td>
					<td>
						<StyledButton primary={true} sign='2' />
					</td>
					<td>
						<StyledButton primary={true} sign='3' />
					</td>
					<td>
						<StyledButton primary={false} sign='+' />
					</td>
				</tr>
				<tr>
					<td colSpan={2}>
						<StyledButton primary={false} sign='0' />
					</td>
					<td>
						<StyledButton primary={false} sign='.' />
					</td>
					<td>
						<StyledButton primary={false} sign='=' />
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default ButtonsPanel;
