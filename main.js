async function getDataFromWeatherApi(location) {
	try {
		const res = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=5CBXU7NTXLKWV97R9QQJSQ72T&contentType=json`,
			{ mode: "cors" }
		);
		const data = await res.json();
		return data;
	} catch (err) {
		console.error(err);
		return {};
	}
}

function processRawWeatherData(rawData) {
	try {
		var weather = rawData.currentConditions;
	} catch {
		console.error("Tried to process invalid data! :");
		console.error(rawData);
		return {};
	}

	return {
		condition: weather.conditions,
		tempF: weather.temp,
		tempC: ((weather.temp - 32) * 5) / 9, // fahrenheit to celsius
		humidity: weather.humidity,
		time: weather.datetime,
		precipitation: weather.precip,
		icon: weather.icon,
		location: rawData.address,
	};
}
