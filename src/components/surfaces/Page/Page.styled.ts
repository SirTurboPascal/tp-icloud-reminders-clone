import styled from 'styled-components';

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;

	height: 100vh;

	background-color: #ffffff;
	color: #272727;
	overflow: hidden;

	@media (prefers-color-scheme: dark) {
		background-color: #2d221e;
		color: #dfdddd;
	}
`;

export default StyledPage;
