import JobSearchClass from './JobSearchClass';

const jobSearch = new JobSearchClass('.search-form', '.search-results', '.loading');
jobSearch.getCountryCode();
