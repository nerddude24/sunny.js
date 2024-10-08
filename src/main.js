const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
	const searchVal = searchInput.value.trim();
	const regexHasNumbers = /\d/;

	if (searchVal == "" || regexHasNumbers.test(searchVal)) {
		alert("Enter a valid location first!");
		return;
	}

	searchInput.value = "";
	updateData(searchVal);
});

async function getDataFromWeatherApi(location) {
	try {
		const res = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=5CBXU7NTXLKWV97R9QQJSQ72T&contentType=json`,
			{ mode: "cors" }
		);
		const data = await res.json();
		return data;
	} catch (err) {
		alert(`An error occurred while fetching data:\n ${err}`);
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
		tempF: Math.round(weather.temp),
		tempC: Math.round(((weather.temp - 32) * 5) / 9), // fahrenheit to celsius
		humidity: Math.round(weather.humidity),
		time: weather.datetime,
		location: rawData.address,
	};
}

async function updateData(location) {
	const rawData = await getDataFromWeatherApi(location);
	const data = processRawWeatherData(rawData);

	domHandler.render(data);
}
