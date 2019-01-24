function solve(stepsCount, footprintsInMeters, speedInKmh) {

    let distanceInM = stepsCount * footprintsInMeters;
    let numberOfBrakes = Math.floor(distanceInM / 500);
    let speedInMs = (speedInKmh / 60 / 60) * 1000;
    let timeInSeconds = Math.round(distanceInM / speedInMs);

    timeInSeconds += numberOfBrakes * 60;

    let seconds = timeInSeconds % 60;
    let minutes = (timeInSeconds - seconds) / 60 % 60;
    let hours = Math.floor((timeInSeconds - seconds) / 3600);

    formatTheOutput(seconds, minutes, hours);

    function formatTheOutput(seconds, minutes, hours) {
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        console.log(`${hours}:${minutes}:${seconds}`);
    }
}

solve(4000, 0.60, 5);