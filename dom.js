const domHandler = (function () {
	const elements = {
		temp: document.getElementById("temp"),
		condition: document.getElementById("condition"),
		humidity: document.getElementById("humidity"),
		location: document.getElementById("location"),
		time: document.getElementById("time"),
		body: document.querySelector("body"),
	};

	function render(data) {
		if (data == {}) return;

		elements.temp.textContent = `Temperature: ${data.tempC}°C`;
		elements.condition.textContent = data.condition;
		elements.humidity.textContent = `Humidity: ${data.humidity}%`;
		elements.location.textContent = data.location;
		elements.time.textContent = data.time.slice(0, -3); // returns the time without the last three chars (which are the seconds)
	}

	return { render };
})();
