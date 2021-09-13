const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var controller_weather = 
{
	getContinents: async(req, res) => {

		const urls = [
			"https://www.metaweather.com/api/location/24865670", 
			"https://www.metaweather.com/api/location/24865671",
			"https://www.metaweather.com/api/location/55949069",
			"https://www.metaweather.com/api/location/24865675",
			"https://www.metaweather.com/api/location/24865672",
			"https://www.metaweather.com/api/location/24865673"
		];
		
		await Promise.all(
			urls.map(url => 
				fetch(url).then(res => res.json())
			)
		).then(response => {
			data = response.flat();
			res.status(200).send(data);
		});
	},

	getData: async(req, res) => {

		let WOEID = req.params.id;
		var urlsIndivual = [
			'https://www.metaweather.com/api/location/'+WOEID
		];
		
		await Promise.all(
			urlsIndivual.map(url => 
				fetch(url).then(res => res.json())
			)
		).then(response => {
			data = response.flat();
			res.status(200).send(data);
		});
	}
}

module.exports = controller_weather;