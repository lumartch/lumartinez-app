import type { LucideProps } from 'lucide-react';

import type { IconType } from './enum';

import { iconLookup } from './icon.lookup';

export type Props = LucideProps & {
	type: IconType;
};

export const Icon = ({ type, ...props }: Props) => {
	return iconLookup[type](props);
};

Icon.displayText = 'Icon';
