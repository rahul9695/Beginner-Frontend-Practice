document.addEventListener("DOMContentLoaded", function () {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const amPmElement = document.getElementById("am-pm");
    const additionalInfoElement = document.getElementById("additional-info");
    const greetingElement = document.getElementById("greeting");

    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const amPm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // Convert to 12-hour format

        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
        amPmElement.textContent = amPm;

        // Additional features
        updateGreeting(now);
        updateBackground(now);
        updateWeatherInfo();
    }

    function updateGreeting(now) {
        const hour = now.getHours();
        let greeting;

        if (hour >= 5 && hour < 12) {
            greeting = "Good morning!";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        greetingElement.textContent = greeting;
    }

    function updateBackground(now) {
        const hour = now.getHours();
        let background;

        if (hour >= 5 && hour < 12) {
            background = "morning.jpg";
        } else if (hour >= 12 && hour < 17) {
            background = "afternoon.jpg";
        } else if(hour >= 17 && hour < 19){
            background = "evening.jpg"
        } else {
            background = "night.jpg";
        }

        // Set the background image
        document.body.style.backgroundImage = `url(${background})`;
    }

    function updateRandomTimeFact() {
        const timeFacts = [
            "A day on Venus is longer than a year on Earth.",
            "A nanosecond is one billionth of a second.",
            "The concept of time travel is a popular theme in science fiction.",
            "The first mechanical clocks were invented in the 14th century.",
            "Time seems to pass more quickly in a gravitational field, so astronauts age more slowly in space."
        ];

        const randomFact = timeFacts[Math.floor(Math.random() * timeFacts.length)];
        additionalInfoElement.textContent = randomFact;
    }

    setInterval(updateTime, 1000); // Update time every second
    setInterval(updateRandomTimeFact, 5000); // Update random time fact every 5 seconds
    updateTime(); // Initial call to display time immediately
    updateRandomTimeFact(); // Initial call to display random fact immediately
});