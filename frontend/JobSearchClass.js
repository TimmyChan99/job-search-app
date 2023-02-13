import { setCurrency, extractFormData } from './utils';
const consoleButton = document.querySelector('#console');

class JobSearchClass {
	constructor(searchFormSelector, resultsContainerSelector, loadinglementSelector, countryCodeSelector) {
		this.searchForm = document.querySelector(searchFormSelector);
		this.searchResults = document.querySelector(resultsContainerSelector);
		this.loading = document.querySelector(loadinglementSelector);
		this.countryCode = document.querySelector(countryCodeSelector);
	}

	// Method: get the country from select element
  async getCountryCode () {
		this.countryCode = 'ca';
	}
	
	// Start loading animation
	showLoading () {
		this.loading.classList.add('show');
	}

	// Stop loading animation
	hideLoading () {
		this.loading.classList.remove('show');
	}

	// Method: get the job data from the backend API
	async getJobData () {
		this.searchForm.addEventListener('submit', async (e) => {
			e.preventDefault();
			this.showLoading();
			const { location, search } = extractFormData(this.searchForm);
		  const jobData = await fetch(`http://localhost:3000/?country=${this.countryCode}&search=${search}&location=${location}`);
		  const jobs = await jobData.json();
		  this.jobs = jobs;
		  this.hideLoading();
		   console.log('jobs', this.jobs);
		// consoleButton.addEventListener('click', () => {
		// 	console.log('countryCode', this.countryCode);
		// 	console.log('jobs', this.jobs);
		// });
	});
}

}
export default JobSearchClass;
