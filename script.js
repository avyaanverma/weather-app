const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b79241ea8msh7c2ff7ce091ab2ep11f93djsn27a8810f7c5a',
		'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    console.log("Here");
	console.log(result);
} catch (error) {
	console.error(error);
}