import { setCurrency } from './utils';
const consoleButton = document.querySelector('#console');

class JobSearchClass {
	constructor(searchFormSelector, resultsContainerSelector, loadinglementSelector) {
		this.searchForm = document.querySelector(searchFormSelector);
		this.searchResults = document.querySelector(resultsContainerSelector);
		this.loading = document.querySelector(loadinglementSelector);
	}

	// Method: get the country code from the user's IP address
  async getCountryCode () {
		this.countryCode = 'ca';
		setCurrency(this.countryCode);
		const getCountryCode = await fetch('http://ip-api.com/json');
		const countryCode = await getCountryCode.json();
		this.countryCode = countryCode.countryCode.toLowerCase();
    // consoleButton.addEventListener('click', () => {
		// 	console.log(setCurrency(this.countryCode));
		// });
	}

	// Method: get the job data from the backend API
	async getJobData () {
		const jobData = await fetch(`http://localhost:3000/api/jobs?country=${this.countryCode}`);
		const jobs = await jobData.json();
		this.jobs = jobs;
	}
}

export default JobSearchClass;
