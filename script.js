
let moisture = 65;
let temperature = 28;
let humidity = 55;

let pump = false;
let automatic = true;

function displayData() {

    document.getElementById("moisture").innerText =
        moisture + "%";

    document.getElementById("temperature").innerText =
        temperature + "°C";

    document.getElementById("humidity").innerText =
        humidity + "%";

    document.getElementById("pump").innerText =
        pump ? "ON" : "OFF";

    document.getElementById("pump-status").innerText =
        pump ? "ON" : "OFF";

    document.getElementById("progress-bar").style.width =
        moisture + "%";

    if (moisture < 35) {
        document.getElementById("soil-status").innerText =
            "Soil Condition: Dry";
    }
    else if (moisture < 60) {
        document.getElementById("soil-status").innerText =
            "Soil Condition: Moderate";
    }
    else {
        document.getElementById("soil-status").innerText =
            "Soil Condition: Good";
    }
}

function updateData() {

    moisture = Math.floor(Math.random() * 101);
    temperature = Math.floor(Math.random() * 16) + 20;
    humidity = Math.floor(Math.random() * 51) + 30;

    if (automatic) {
        if (moisture < 35) {
            pump = true;
        }
        else if (moisture > 45) {
            pump = false;
        }
    }

    displayData();

    document.getElementById("message").innerText =
        "Sensor data refreshed successfully!";
}

function turnOn() {
    automatic = false;
    pump = true;

    displayData();

    document.getElementById("message").innerText =
        "Water Pump Turned ON";
}

function turnOff() {
    automatic = false;
    pump = false;

    displayData();

    document.getElementById("message").innerText =
        "Water Pump Turned OFF";
}

function autoMode() {
    automatic = true;

    if (moisture < 35) {
        pump = true;
    } else if (moisture > 45) {
        pump = false;
    }

    displayData();

    document.getElementById("message").innerText =
        "Automatic Mode Activated";
}

displayData();
