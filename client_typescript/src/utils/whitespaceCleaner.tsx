export default function strWhitespaceCleaner(str: string) {
	return str
		.replace(/[^\S]+/y, '')
		.replace(/[^\S]{3,}/g, '\n\n')
		.replace(/[^\S]+$/, '');
}
