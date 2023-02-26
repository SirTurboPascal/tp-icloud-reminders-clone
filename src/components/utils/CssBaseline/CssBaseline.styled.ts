import { createGlobalStyle } from 'styled-components';

const StyledCssBaseline = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
    }

    html {
        overflow: hidden;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }
`;

export default StyledCssBaseline;
