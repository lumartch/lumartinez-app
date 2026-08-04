import type { ComponentProps } from 'react';

import { HeadingType } from './enum';

type Props = ComponentProps<'h1'> & {
	type?: HeadingType;
};

export const Heading = ({ children, type = HeadingType.H2, ...props }: Props) => {
	switch (type) {
		case HeadingType.H1:
			return <h1 {...props}>{children}</h1>;
		case HeadingType.H2:
			return <h2 {...props}>{children}</h2>;
		case HeadingType.H3:
			return <h3 {...props}>{children}</h3>;
		case HeadingType.H4:
			return <h4 {...props}>{children}</h4>;
		case HeadingType.H5:
			return <h5 {...props}>{children}</h5>;
		case HeadingType.H6:
			return <h6 {...props}>{children}</h6>;
	}
};

Heading.displayName = 'Heading'