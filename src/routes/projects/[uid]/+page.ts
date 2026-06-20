import { error } from '@sveltejs/kit';
import { projects, projectOrder } from '$lib/content';
import type { EntryGenerator, PageLoad } from './$types';

// Prerender one page per project uid.
export const entries: EntryGenerator = () => projectOrder.map((uid) => ({ uid }));

export const load: PageLoad = ({ params }) => {
	const project = projects[params.uid];
	if (!project) error(404, `Project "${params.uid}" not found`);
	return { project };
};
