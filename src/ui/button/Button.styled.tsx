import styled from 'styled-components';

import Button from './Button.component';

interface ButtonProps {
	primary?: boolean;
}

const StyledButton = styled(Button)<ButtonProps>`
	background-color: ${props => (props.primary ? '#e0e0e0' : '#f5923e')};
	color: ${props => (props.primary ? '#000000' : '#ffffff')};
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #919191;
	height: 80px;
	font-weight: bold;
	font-size: 2.2rem;

	span {
		display: inline-block;
	}

	&:hover {
		cursor: pointer;
		background-color: ${props => (props.primary ? '#cccccc' : '#f07f1c')};
	}
`;

export default StyledButton;
