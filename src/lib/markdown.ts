import { marked } from 'marked';

marked.setOptions({ async: false, gfm: true, breaks: false });

/** Render a Markdown string to block-level HTML. */
export function md(src?: string): string {
	if (!src) return '';
	return marked.parse(src) as string;
}

/** Render a Markdown string to inline HTML (no wrapping <p>). */
export function mdInline(src?: string): string {
	if (!src) return '';
	return marked.parseInline(src) as string;
}
