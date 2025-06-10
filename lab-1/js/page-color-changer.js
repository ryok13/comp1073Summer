// Get each slider element
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Update the background color
function updateBackgroundColor() {
    // Get the current values from the sliders
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // Set the background color in RGB format
    document.documentElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Add event listeners to each slider
redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

// updateBackgroundColor();
