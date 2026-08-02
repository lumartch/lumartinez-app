import type { ComponentProps } from 'react';

type Props = ComponentProps<'p'>;

export const Text = ({ children, ...props }: Props) => {
	return <p {...props}>{children}</p>;
};

Text.displayName = 'Text';
