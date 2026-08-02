import { type ComponentProps } from 'react';

type Props = ComponentProps<'input'>;

export const BaseInput = (props: Props) => {
	return <input {...props}></input>;
};

BaseInput.displayName = 'Baseinput';
