export interface ImageRef {
	src: string;
	alt?: string;
}

/* ---------- home ---------- */
export interface HomeProjectRef {
	uid: string;
	overview: string;
	externalLink?: string;
	externalButtonText?: string;
}

export type SecondaryMedia = 'video' | 'iframe' | 'image';

export interface SecondaryProject {
	title: string;
	genre: string;
	overview: string;
	media?: SecondaryMedia;
	video?: string;
	iframe?: string;
	image?: ImageRef;
	background?: ImageRef;
}

export interface Contact {
	callToAction: string;
	email: string;
	linkedin: string;
	background?: ImageRef;
}

export interface Home {
	hero: { image?: ImageRef; text: string };
	specializations: string[];
	specializationsHeading?: string;
	tools: string[];
	toolsHeading?: string;
	projects: HomeProjectRef[];
	secondaryProjects: SecondaryProject[];
	contact: Contact;
}

/* ---------- project pages ---------- */
export interface Facts {
	genre?: string;
	engine?: string;
	teamSize?: string;
	duration?: string;
	role?: string;
}

export interface ParagraphItem {
	image?: ImageRef;
	description?: string;
	videoEmbed?: string;
}

export interface ParagraphImageSection {
	type: 'paragraphImage';
	heading?: string;
	body?: string;
	items?: ParagraphItem[];
}

export interface GalleryImage {
	src?: string;
	alt?: string;
	caption?: string;
}

export interface GallerySection {
	type: 'gallery';
	images: GalleryImage[];
}

export interface VideoSectionItem {
	title?: string;
	url?: string;
	description?: string;
}

export interface VideoSection {
	type: 'videoSection';
	items: VideoSectionItem[];
}

export type Section = ParagraphImageSection | GallerySection | VideoSection;

export interface Project {
	uid: string;
	colors: { primary: string; text: string; highlight: string };
	header: { name?: string; nameGraphic?: ImageRef; subtitle?: string; headerImage?: ImageRef };
	heroVideo?: string;
	facts: Facts;
	elevatorPitch?: string;
	secondaryVideo?: { url?: string; descriptor?: string };
	responsibilities?: string;
	sections: Section[];
}

/* ---------- about / resume ---------- */
export interface About {
	heading: string;
	body: string;
	backgroundImage?: ImageRef;
}

export interface Resume {
	pdf?: string;
	link?: string;
}

/* ---------- CV (rendered + printable) ---------- */
export interface CvContact {
	phone?: string;
	email?: string;
	website?: string;
	websiteUrl?: string;
}

export interface CvReference {
	name: string;
	title?: string;
	link?: string;
}

export interface CvRole {
	title: string;
	date?: string;
	bullets?: string[];
}

export interface CvCompany {
	company: string;
	tenure?: string;
	roles: CvRole[];
}

export interface CvEducation {
	period?: string;
	degree: string;
	qualifier?: string;
	institution?: string;
}

export interface Cv {
	header: {
		name: string;
		title?: string;
		contact?: CvContact;
	};
	profile?: string[];
	references?: CvReference[];
	experience?: CvCompany[];
	education?: CvEducation[];
}
