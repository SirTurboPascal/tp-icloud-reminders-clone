import { isUndefined } from 'lodash';
import { FC, ReactNode, useMemo } from 'react';

import TypographyVariantType from 'types/TypographyVariantType';

import StyledTypography from './Typography.styled';

type TypographyPropsType = {
	children?: ReactNode;
	variant?: TypographyVariantType;
};

const Typography: FC<TypographyPropsType> = ({ children, variant }) => {
	const className: string = useMemo(() => {
		const defaultIfEmpty: TypographyVariantType = isUndefined(variant) ? 'body' : variant;

		return defaultIfEmpty;
	}, [variant]);

	return <StyledTypography className={className}>{children}</StyledTypography>;
};

export default Typography;
