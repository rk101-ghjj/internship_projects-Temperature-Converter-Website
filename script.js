function convertTemperature() {
    const temperature = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;

    // Validate that input is a number
    if (isNaN(temperature) || temperature === "") {
        alert("Please enter a valid number.");
        return;
    }

    const temp = parseFloat(temperature);
    let result = "";

    switch (unit) {
        case "celsius":
            result = `${(temp * 9/5) + 32} °F (Fahrenheit), ${(temp + 273.15)} K (Kelvin)`;
            break;
        case "fahrenheit":
            result = `${(temp - 32) * 5/9} °C (Celsius), ${((temp - 32) * 5/9) + 273.15} K (Kelvin)`;
            break;
        case "kelvin":
            result = `${temp - 273.15} °C (Celsius), ${(temp - 273.15) * 9/5 + 32} °F (Fahrenheit)`;
            break;
        default:
            result = "Invalid unit.";
            break;
    }

    document.getElementById("result").innerText = `Converted Temperature: ${result}`;
}
