import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import StyledIcon from './Icon.styled';

type IconPropsType = {
	icon: IconDefinition;
};

const Icon: FC<IconPropsType> = ({ icon }) => {
	return (
		<StyledIcon>
			<FontAwesomeIcon icon={icon} />
		</StyledIcon>
	);
};

export default Icon;
