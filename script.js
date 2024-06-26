const fateOptions = ["命運1", "命運2", "命運3", "命運4", "命運5"];
const chanceOptions = ["機會1", "機會2", "機會3", "機會4", "機會5"];

function getRandomOption(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function spin(elementId, options) {
    const spinner = document.getElementById(elementId);
    const result = getRandomOption(options);
    const segmentAngle = 360 / options.length;
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomDegree = randomIndex * segmentAngle + 720; // Two full turns plus random segment

    spinner.style.transition = 'transform 2s ease-out';
    spinner.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        alert(`${elementId === 'spinner-fate' ? '命運' : '機會'}結果: ${result}`);
        spinner.style.transition = 'none';
        spinner.style.transform = 'rotate(0deg)'; // Reset rotation
    }, 2000);
}

function spinFate() {
    spin('spinner-fate', fateOptions);
}

function spinChance() {
    spin('spinner-chance', chanceOptions);
}
