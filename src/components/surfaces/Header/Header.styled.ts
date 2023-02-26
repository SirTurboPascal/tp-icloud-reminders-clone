import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	flex-shrink: 0;
	align-items: center;

	height: 44px;
	padding: 0 16px;

	background-color: #f9f4f2;
	color: #0b84ff;
	border-bottom: 1px solid #d9d9d9;

	& > * {
		margin-right: 6px;

		&:last-child {
			margin-right: 0;
		}
	}

	@media (prefers-color-scheme: dark) {
		background-color: #3f3735;
		border-bottom-color: #000000;
	}
`;

export default StyledHeader;
