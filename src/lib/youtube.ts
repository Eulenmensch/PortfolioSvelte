/**
 * Normalise any YouTube URL (watch, youtu.be, or embed) to an embeddable URL.
 * Uses the privacy-enhanced youtube-nocookie.com domain.
 */
export function youtubeEmbed(url?: string): string | null {
	if (!url) return null;
	const m = url.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|v\/))([\w-]{11})/);
	if (m) return `https://www.youtube-nocookie.com/embed/${m[1]}`;
	return url;
}
