import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3.4.4/build/es6/luxon.min.js";
const button = document.getElementById("calculate");
const resultElement = document.getElementById("result");
const inputElement = document.getElementById("userBirth");

button.addEventListener("click", () => {
    const birthDateString = inputElement.value;
    console.log(birthDateString);

    if (!birthDateString) {
        resultElement.innerText = "Please select a date first!";
        return;
    };

    const birthDate = DateTime.fromISO(birthDateString);
    console.log(birthDate);
    console.log(birthDate.toLocaleString(DateTime.DATE_FULL));

    const now = DateTime.now();

    const age = now.diff(birthDate, ['years', 'months', 'days']).toObject();
    console.log(age);

    resultElement.innerText = `You are ${Math.floor(age.years)} years, ${Math.floor(age.months)} months, and ${Math.floor(age.days)} days old.`;
    console.log(resultElement.innerText);

});
