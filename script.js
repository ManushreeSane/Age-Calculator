
function calculateAge() {

    // Get the date entered by the user
    let dob = document.getElementById("dob").value;

    let result = document.getElementById("result");

    // Check if date is selected
    if (dob === "") {
        result.innerHTML = "Please select your date of birth!";
        return;
    }

    // Convert the entered date into a Date object
    let birthDate = new Date(dob + "T00:00:00");

    // Get today's date
    let today = new Date();

    // Check for a future date
    if (birthDate > today) {
        result.innerHTML = "Please enter a valid date!";
        return;
    }

    // Calculate years, months and days
    let years = today.getFullYear() - birthDate.getFullYear();

    let months = today.getMonth() - birthDate.getMonth();

    let days = today.getDate() - birthDate.getDate();

    // Adjust days if they are negative
    if (days < 0) {
        let previousMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days = days + previousMonthDays;
        months--;
    }

    // Adjust months if they are negative
    if (months < 0) {
        months = months + 12;
        years--;
    }

    // Display the final result
    result.innerHTML =
        "Your Age is: " + years + " Years, " +
        months + " Months, " +
        days + " Days.";
}
