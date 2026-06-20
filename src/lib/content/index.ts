import homeData from '$content/home.yaml';
import aboutData from '$content/about.yaml';
import resumeData from '$content/resume.yaml';
import type { Home, About, Resume, Project } from './types';

export const home = homeData as Home;
export const about = aboutData as About;
export const resume = resumeData as Resume;

// Eagerly load every project YAML and key it by uid.
const projectModules = import.meta.glob<Project>('../../content/projects/*.yaml', {
	eager: true,
	import: 'default'
});

export const projects: Record<string, Project> = {};
for (const mod of Object.values(projectModules)) {
	projects[mod.uid] = mod;
}

/** All project uids in the order they appear on the home page. */
export const projectOrder: string[] = home.projects.map((p) => p.uid);

export type { Home, About, Resume, Project } from './types';
