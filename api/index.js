import http from 'http';
import url from 'url';
import axios from 'axios';
import chalk from 'chalk';
import config from './config.js';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
};

const server = http.createServer(async (req, res) => {
  // return an object: { search: 'javascript', location: 'toronto' }
  const parasedURL = url.parse(req.url, true).query;

  // destructure the object and set default value for country
  const { search, location, country } = parasedURL;

  console.log(chalk.yellow(`Request: ${JSON.stringify(parasedURL)}`));

  const targetURL = new URL(`${config.BASE_URL}/${country?.toLowerCase()}/${config.BASE_PARAMS}`);
  targetURL.searchParams.set('app_id', config.APP_ID);
  targetURL.searchParams.set('app_key', config.API_KEY);
  targetURL.searchParams.set('what', search);
  targetURL.searchParams.set('where', location);

  if (req.method === 'GET') {
    console.log(chalk.bgCyan(`Request GET: ${JSON.stringify(targetURL)}`));

    try {
      const response = await axios.get(targetURL);
      res.writeHead(200, headers);
      res.end(JSON.stringify(response.data));
    } catch (error) {
      console.log(chalk.redBright(`Error: ${JSON.stringify(error.message)}`));
      res.writeHead(500, headers);
      res.end();
    }
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000 ...');
});

export default server;
