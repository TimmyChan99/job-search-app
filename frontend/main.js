import JobSearchClass from './JobSearchClass.js';

const jobSearch = new JobSearchClass('#search-form', '#jobs-list', '.loading');
jobSearch.getJobData();
