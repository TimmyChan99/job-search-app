import {
  extractFormData, jobTemplate, errorTemplate, noJobsTemplate, BASE_URL,
} from './utils.js';

class JobSearchClass {
  constructor(searchFormSelector, jobsListContainerSelector, loadinglementSelector) {
    this.searchForm = document.querySelector(searchFormSelector);
    this.jobsListContainer = document.querySelector(jobsListContainerSelector);
    this.loading = document.querySelector(loadinglementSelector);
  }

  // Start loading animation
  showLoading() {
    this.loading.classList.add('lds-grid');
  }

  // Stop loading animation
  hideLoading() {
    this.loading.classList.remove('lds-grid');
  }

  // Method: get the job data from the backend API
  async getJobData() {
    this.searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      this.showLoading();
      this.jobsListContainer.innerHTML = '';

      const { location, search, country } = extractFormData(this.searchForm);
      try {
        const jobData = await fetch(`${BASE_URL}/?country=${country}&search=${search}&location=${location}`);
        const jobs = await jobData.json();
        this.jobs = jobs.results;
        this.hideLoading();

        if (this.jobs?.length === 0) {
          noJobsTemplate();
        } else {
          this.jobsListContainer.innerHTML = this.jobs.map((job) => jobTemplate(job)).join('');
        }
      } catch (error) {
        this.hideLoading();
        errorTemplate('Something went wrong');
      }
    });
  }
}
export default JobSearchClass;
