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

		elements.temp.textContent = `Temperature: ${data.temp}°C`;
		elements.condition.textContent = data.condition;
		elements.humidity.textContent = `Humidity: ${data.humidity}%`;
		elements.location.textContent = data.location;
		elements.time.textContent = data.time;
	}

	return { render };
})();
