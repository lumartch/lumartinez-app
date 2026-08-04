import type { ComponentProps } from 'react';

import type { TextType } from './enum';

export type TextProps = TextPropsMap[TextType];

export type TextPropsMap = {
	[TextType.ABBREVIATION]: ComponentProps<'abbr'>;
	[TextType.BOLD]: ComponentProps<'b'>;
	[TextType.CITATION]: ComponentProps<'cite'>;
	[TextType.DELETED]: ComponentProps<'del'>;
	[TextType.EMPHASIS]: ComponentProps<'em'>;
	[TextType.INSERTED]: ComponentProps<'ins'>;
	[TextType.ITALIC]: ComponentProps<'i'>;
	[TextType.KEYBOARD]: ComponentProps<'kbd'>;
	[TextType.LABEL]: ComponentProps<'label'>;
	[TextType.MARK]: ComponentProps<'mark'>;
	[TextType.PARAGRAPH]: ComponentProps<'p'>;
	[TextType.SAMPLE]: ComponentProps<'samp'>;
	[TextType.STRIKETHROUGH]: ComponentProps<'s'>;
	[TextType.SUBSCRIPT]: ComponentProps<'sub'>;
	[TextType.SUPERSCRIPT]: ComponentProps<'sup'>;
	[TextType.UNDERLINE]: ComponentProps<'u'>;
};
