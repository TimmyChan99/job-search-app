import JobSearchClass from './JobSearchClass';

const jobSearch = new JobSearchClass('#search-form', '#jobs-list', '.loading');
jobSearch.getJobData();
