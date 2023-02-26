import styled from 'styled-components';

const StyledTypography = styled.div`
	font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

	&.body {
		font-size: 1.1875rem;
		font-weight: 500;
	}

	&.header,
	&.logo {
		font-weight: 600;
	}

	&.header {
		font-size: 1.3125rem;
	}
`;

export default StyledTypography;
