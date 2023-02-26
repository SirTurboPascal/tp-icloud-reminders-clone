import clsx from 'clsx';

import { faApple } from '@fortawesome/free-brands-svg-icons';
import { isUndefined } from 'lodash';
import { FC, useMemo } from 'react';

import { Icon, Typography } from 'components/data-display';

import StyledLogo from './Logo.styled';

type LogoPropsType = {
	onClick?: () => void;
};

const Logo: FC<LogoPropsType> = ({ onClick }) => {
	const className: string = useMemo(() => {
		return clsx({
			'with-callback': !isUndefined(onClick),
		});
	}, [onClick]);

	return (
		<StyledLogo className={className} onClick={onClick}>
			<Icon icon={faApple} />

			<Typography variant='logo'>iCloud</Typography>
		</StyledLogo>
	);
};

export default Logo;
