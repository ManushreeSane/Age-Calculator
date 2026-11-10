
// Set today's date automatically
window.onload = function () {
    let today = new Date();

    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');

    document.getElementById("currentDate").value =
        `${year}-${month}-${day}`;

    document.getElementById("currentDate").max =
        `${year}-${month}-${day}`;

    document.getElementById("dob").max =
        `${year}-${month}-${day}`;
};

function calculateAge() {

    let dob = document.getElementById("dob").value;
    let currentDate = document.getElementById("currentDate").value;

    let result = document.getElementById("result");

    if (dob === "" || currentDate === "") {
        result.innerHTML = "Please select both dates!";
        return;
    }

    let birthDate = new Date(dob + "T00:00:00");
    let selectedDate = new Date(currentDate + "T00:00:00");

    if (birthDate > selectedDate) {
        result.innerHTML =
            "Date of birth cannot be after the selected current date!";
        return;
    }

    let years = selectedDate.getFullYear() - birthDate.getFullYear();
    let months = selectedDate.getMonth() - birthDate.getMonth();
    let days = selectedDate.getDate() - birthDate.getDate();

    if (days < 0) {
        let previousMonthDays = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            0
        ).getDate();

        days += previousMonthDays;
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    result.innerHTML =
        "Your Age is:<br>" +
        years + " Years, " +
        months + " Months, " +
        days + " Days";
}
