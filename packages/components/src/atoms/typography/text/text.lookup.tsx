import type { JSX } from 'react/jsx-runtime';

import type { TextPropsMap } from './type';

import { TextType } from './enum';

export const textLookup: { [K in TextType]: (props: TextPropsMap[K]) => JSX.Element } = {
	[TextType.ABBREVIATION]: ({ children, ...props }: TextPropsMap[TextType.ABBREVIATION]): JSX.Element => (
		<abbr {...props}>{children}</abbr>
	),
	[TextType.BOLD]: ({ children, ...props }: TextPropsMap[TextType.BOLD]): JSX.Element => <b {...props}>{children}</b>,
	[TextType.CITATION]: ({ children, ...props }: TextPropsMap[TextType.CITATION]): JSX.Element => (
		<cite {...props}>{children}</cite>
	),
	[TextType.DELETED]: ({ children, ...props }: TextPropsMap[TextType.DELETED]): JSX.Element => (
		<del {...props}>{children}</del>
	),
	[TextType.EMPHASIS]: ({ children, ...props }: TextPropsMap[TextType.EMPHASIS]): JSX.Element => (
		<em {...props}>{children}</em>
	),
	[TextType.INSERTED]: ({ children, ...props }: TextPropsMap[TextType.INSERTED]): JSX.Element => (
		<ins {...props}>{children}</ins>
	),
	[TextType.ITALIC]: ({ children, ...props }: TextPropsMap[TextType.ITALIC]): JSX.Element => (
		<i {...props}>{children}</i>
	),
	[TextType.KEYBOARD]: ({ children, ...props }: TextPropsMap[TextType.KEYBOARD]): JSX.Element => (
		<kbd {...props}>{children}</kbd>
	),
	[TextType.LABEL]: ({ children, ...props }: TextPropsMap[TextType.LABEL]): JSX.Element => (
		<label {...props}>{children}</label>
	),
	[TextType.MARK]: ({ children, ...props }: TextPropsMap[TextType.MARK]): JSX.Element => (
		<mark {...props}>{children}</mark>
	),
	[TextType.PARAGRAPH]: ({ children, ...props }: TextPropsMap[TextType.PARAGRAPH]): JSX.Element => (
		<p {...props}>{children}</p>
	),
	[TextType.SAMPLE]: ({ children, ...props }: TextPropsMap[TextType.SAMPLE]): JSX.Element => (
		<samp {...props}>{children}</samp>
	),
	[TextType.STRIKETHROUGH]: ({ children, ...props }: TextPropsMap[TextType.STRIKETHROUGH]): JSX.Element => (
		<s {...props}>{children}</s>
	),
	[TextType.SUBSCRIPT]: ({ children, ...props }: TextPropsMap[TextType.SUBSCRIPT]): JSX.Element => (
		<sub {...props}>{children}</sub>
	),
	[TextType.SUPERSCRIPT]: ({ children, ...props }: TextPropsMap[TextType.SUPERSCRIPT]): JSX.Element => (
		<sup {...props}>{children}</sup>
	),
	[TextType.UNDERLINE]: ({ children, ...props }: TextPropsMap[TextType.UNDERLINE]): JSX.Element => (
		<u {...props}>{children}</u>
	),
};
