export const setCurrency = (country) => {
	const currencies = {
		ca: '$',
		us: '$',
		au: '$',
		uk: '£',
		ma: 'MAD',
	};
	return currencies[country] || '$';
};

export const  extractFormData = form => Array
	.from(form.elements)
	.reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});
