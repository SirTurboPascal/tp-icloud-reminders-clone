import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { CssBaseline } from 'components/utils';

import StyledPage from './Page.styled';

type PagePropsType = {
	title: string;

	children?: ReactNode;
};

const Page: FC<PagePropsType> = ({ children, title }) => {
	return (
		<>
			<CssBaseline />

			<Helmet>
				<title>{title} | iCloud Reminders Clone</title>
			</Helmet>

			<StyledPage>{children}</StyledPage>
		</>
	);
};

export default Page;
