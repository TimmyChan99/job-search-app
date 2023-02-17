export const extractFormData = (form) => Array
  .from(form.elements)
  .reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});

// job card template
export const jobTemplate = (job) => `
<li class="job-card">
  <div class="job-card__header">
    <div class="job-card__header__info">
      <h3>${job.title}</h3>
      <p>${job.company.display_name}</p>
      <p>${job.location.display_name}</p>
    </div>
  </div>
  <div class="job-card__body">
    <p>${job.description}</p>
  </div>
  <div class="job-card__footer">
    <a href="${job.redirect_url}" target="_blank" rel="noopener noreferrer">Apply</a>
  </div>
</li>
`;

// error template
export const errorTemplate = (message) => {
  const error = document.createElement('div');
  error.classList.add('error');
  error.innerHTML = `
<div class="error">
  <h2>${message}</h2>
  <p>Please try again later</p>
</div>
`;
  document.body.appendChild(error);
};

// no jobs template
export const noJobsTemplate = () => {
  const noJobs = document.createElement('div');
  noJobs.classList.add('no-jobs');
  noJobs.innerHTML = `
<div class="no-jobs">
  <h2>No jobs found</h2>
  <p>Please try again later</p>
</div>
`;
  document.body.appendChild(noJobs);
};
