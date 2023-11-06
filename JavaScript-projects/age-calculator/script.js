const inputDate = document.querySelector('input[type="date"]');
const calculateButton = document.getElementById('calculate');
const yearsOutput = document.getElementById('years');
const monthsOutput = document.getElementById('months');
const daysOutput = document.getElementById('days');
const toggleModeButton = document.getElementById('toggleMode');
const main = document.getElementById('main');
const navBar = document.getElementById('navbar');

// Add an event listener to calculate the age when the button is clicked
calculateButton.addEventListener('click', calculateAge);

// Add an event listener to toggle dark mode/light mode
toggleModeButton.addEventListener('click', toggleMode);

function calculateAge() {
    const selectedDate = new Date(inputDate.value);
    const currentDate = new Date();

    if (!isNaN(selectedDate.getTime())) {
        if (selectedDate <= currentDate) {
            const ageInMilliseconds = currentDate - selectedDate;
            const ageDate = new Date(ageInMilliseconds);

            const years = ageDate.getUTCFullYear() - 1970;
            const months = ageDate.getUTCMonth();
            const days = ageDate.getUTCDate() - 1;

            yearsOutput.textContent = years;
            monthsOutput.textContent = months;
            daysOutput.textContent = days;
        } else {
            alert('Please select a date in the past or today.');
        }
    } else {
        alert('Please select a valid date.');
    }
}

function toggleMode() {
    
    if (main.classList.contains('dark-mode')) {
        main.classList.remove('dark-mode');
        main.classList.add('light-mode');
        toggleModeButton.style.backgroundColor = "rgb(26, 128, 253)";
        toggleModeButton.style.color = "white";
        toggleModeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" stroke-width="0" fill="currentColor"></path>
        </svg`
    } else {
        main.classList.remove('light-mode');
        main.classList.add('dark-mode');
        toggleModeButton.style.backgroundColor = "#8e4e4e";
        toggleModeButton.style.color = "white";
        toggleModeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7.962 3.949a8.97 8.97 0 0 1 4.038 -.957v.008h.393a7.478 7.478 0 0 0 -2.07 3.308m-.141 3.84c.186 .823 .514 1.626 .989 2.373a7.49 7.49 0 0 0 4.586 3.268m3.893 -.11c.223 -.067 .444 -.144 .663 -.233a9.088 9.088 0 0 1 -.274 .597m-1.695 2.337a9 9 0 0 1 -12.71 -12.749"></path>
        <path d="M3 3l18 18"></path>
    </svg>`
        // navBar.style.backgroundColor = "black";
    }
}