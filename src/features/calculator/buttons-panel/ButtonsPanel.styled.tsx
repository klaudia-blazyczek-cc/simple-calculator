import styled from 'styled-components';

import ButtonsPanel from './ButtonsPanel.component';

const StyledButtonsPanel = styled(ButtonsPanel)`
	width: 100%;

	tr {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	tr:nth-last-child(1) {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
	}
`;

export default StyledButtonsPanel;
