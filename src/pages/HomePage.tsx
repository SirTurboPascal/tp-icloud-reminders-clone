import { FC } from 'react';

import {} from 'components/data-display';
import { Page } from 'components/surfaces';
import Typography from 'components/data-display/Typography/Typography';

const HomePage: FC = () => {
	return (
		<Page title='Home'>
			<Typography>Hello World!</Typography>
		</Page>
	);
};

export default HomePage;
