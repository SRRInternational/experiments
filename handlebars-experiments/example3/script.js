// Import Handlebars
function renderWeather() {
  // Data for the template
  const data = {
    temperature: 25,
    condition: "sunny",
  };

  // Register Handlebars helper
  Handlebars.registerHelper("formatTemperature", function (temperature) {
    // Convert temperature to Celsius
    return Math.round(((temperature - 32) * 5) / 9);
  });

  Handlebars.registerHelper("weatherCondition", function (condition) {
    // Capitalize the first letter of the condition
    return condition.charAt(0).toUpperCase() + condition.slice(1);
  });

  // Compile the template
  const source = document.getElementById("weather-template").innerHTML;
  const template = Handlebars.compile(source);

  // Render the template with data
  const html = template(data);

  // Display the rendered HTML
  document.getElementById("output").innerHTML = html;
}
