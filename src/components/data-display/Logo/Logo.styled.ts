import styled from 'styled-components';

const StyledLogo = styled.div`
	display: flex;
	flex-direction: row;
	flex-shrink: 0;
	align-items: center;

	color: #4b4949;

	font-size: 1.3125rem;

	&.with-callback {
		cursor: pointer;
	}

	& > * {
		margin-right: 6px;

		&:last-child {
			margin-right: 0;
		}
	}

	@media (prefers-color-scheme: dark) {
		color: #ebebea;
	}
`;

export default StyledLogo;
