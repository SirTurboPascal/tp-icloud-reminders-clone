import { FC, ReactNode } from 'react';

import StyledHeader from './Header.styled';

type HeaderPropsType = {
	children?: ReactNode;
};

const Header: FC<HeaderPropsType> = ({ children }) => {
	return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
