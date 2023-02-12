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

