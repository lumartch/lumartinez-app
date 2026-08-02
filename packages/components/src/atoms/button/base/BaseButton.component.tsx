import type { ComponentProps, JSX } from 'react';

type Props = ComponentProps<'button'>;

export const BaseButton = ({ children, ...props }: Props): JSX.Element => {
	return <button {...props}>{children}</button>;
};

BaseButton.displayName = 'BaseButton';
