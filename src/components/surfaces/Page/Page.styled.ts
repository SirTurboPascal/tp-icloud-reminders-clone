import styled from 'styled-components';

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;

	height: 100vh;

	background-color: #ffffff;
	color: #000000;
	overflow: hidden;

	@media (prefers-color-scheme: dark) {
		background-color: #000000;
		color: #ffffff;
	}
`;

export default StyledPage;
