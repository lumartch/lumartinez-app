import type { TextPropsMap } from './type';

import { TextType } from './enum';
import { textLookup } from './text.lookup';

type Props<T extends TextType> = TextPropsMap[T] & {
	type?: T;
};

export const Text = <T extends TextType = TextType.PARAGRAPH>({ type, ...props }: Props<T>) => {
	const resolvedType = (type ?? TextType.PARAGRAPH) as T;

	return textLookup[resolvedType](props as TextPropsMap[T]);
};

Text.displayName = 'Text';
