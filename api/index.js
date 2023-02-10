import http from 'node:http';
import url  from 'url';
import axios from 'axios';
import chalk from "chalk"
import config from './config.js';

const headers = {
	'Content-Type': 'application/json',
	'Accept': 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET',
};

const server = http.createServer(async (req, res) => {
	const parasedURL = url.parse(req.url, true).query;
	const { search, location, country = 'ca' } = parasedURL;
	const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${config.BASE_PARAMS}/&app_id=${config.APP_ID}&app_key=${config.API_KEY}&what=${search}&where=${location}`;

	if (req.method === 'GET') {
		console.log(chalk.blueBright(`Request GET: ${JSON.stringify(targetURL)}`));

		try {
			const response = await axios.get(targetURL)
			res.writeHead(200, headers);
			res.end(JSON.stringify(response.data));
		} catch (error) {
			console.log(chalk.redBright(`Error: ${JSON.stringify(error)}`));
			res.writeHead(500, headers);
			res.end(JSON.stringify(error));
		}

	}
		
});

server.listen(3000, () => {	
	console.log(`Server is running on port 3000 ...`);
});
