document.addEventListener("DOMContentLoaded", function () {
    let timer;
    let isRunning = false;
    let startTime;
    let accumulatedTime = 0;
    let lapCount = 1;

    const stopwatchElement = document.getElementById("stopwatch");
    const startButton = document.getElementById("startBtn");
    const stopButton = document.getElementById("stopBtn");
    const resetButton = document.getElementById("resetBtn");
    const lapButton = document.getElementById("lapBtn");
    const lapList = document.getElementById("lapList");

    startButton.addEventListener("click", startStopwatch);
    stopButton.addEventListener("click", stopStopwatch);
    resetButton.addEventListener("click", resetStopwatch);
    lapButton.addEventListener("click", recordLap);

    function startStopwatch() {
        if (!isRunning) {
            isRunning = true;
            startTime = new Date() - accumulatedTime;
            timer = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
            toggleButtons(true);
        }
    }

    function stopStopwatch() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);
            accumulatedTime = new Date() - startTime;
            toggleButtons(false);
        }
    }

    function resetStopwatch() {
        stopStopwatch();
        accumulatedTime = 0;
        lapCount = 1;
        updateStopwatch();
        lapList.innerHTML = "";
    }

    function updateStopwatch() {
        const elapsedMilliseconds = isRunning ? new Date() - startTime : accumulatedTime;
        const formattedTime = formatTime(elapsedMilliseconds);
        stopwatchElement.textContent = formattedTime;
    }

    function formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const millisecondsPart = Math.floor((milliseconds % 1000) / 10); // Extract milliseconds, rounded to 2 digits
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / (60 * 60));

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(millisecondsPart)}`;
    }

    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    function recordLap() {
        if (isRunning) {
            const lapTime = stopwatchElement.textContent;
            const lapItem = document.createElement("li");
            lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
            lapList.appendChild(lapItem);
            lapCount++;
        }
    }

    function toggleButtons(isStart) {
        startButton.disabled = isStart;
        stopButton.disabled = !isStart;
    }
});