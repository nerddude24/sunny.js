async function getDataFromWeatherApi(location) {
	try {
		const res = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=5CBXU7NTXLKWV97R9QQJSQ72T&contentType=json`,
			{ mode: "cors" }
		);
		const dataJson = await res.json();
		return dataJson;
	} catch (err) {
		console.error(err);
		return {};
	}
}
