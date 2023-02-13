import JobSearchClass from './JobSearchClass';

const jobSearch = new JobSearchClass('#search-form', '#jobs-list', '.loading');
jobSearch.getCountryCode();
jobSearch.getJobData();
