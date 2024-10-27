const birthDate = new Date("October 21, 2005");

// Updates the age text on the screen
function updateAge()
{
    const now = new Date();
    const ageInMs = now - birthDate;
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);

    document.getElementById("ageText").textContent = `I'm Zach, a ${ageInYears.toFixed(9)} year old developer.`;
}

// Update the age text every 25 milliseconds
setInterval(updateAge, 25);