var birthdateRef = document.getElementById("birthday-input");
var luckyNumRef = document.getElementById("lucky-number");
var output = document.getElementById("output");



function clickHandler() {
    var birthdate = birthdateRef.value;
    var checkLuckyNum = isNaN(luckyNumRef.value);
    if (checkLuckyNum == true || luckyNumRef.value.length == 0) {
        alert("Please enter a valid digit as lucky number.");
    }
    else {
        var luckyNum = luckyNumRef.value;
        var [year, month, day] = birthdate.toString().split('-');

        year = Number(year);
        month = Number(month);
        day = Number(day);

        var digitSum = sumOfDigit(day) + sumOfDigit(month) + sumOfDigit(year);
        var remainder = Math.floor(digitSum % luckyNum);

        if (remainder == 0) {
            output.innerHTML = "Congo!🥳, Your Birthdate is lucky for you.";
        }
        // else if (remainder == 1) {
        //     output.innerHTML = "Oops! You missed being lucky by 1 day.";
        // }
        else {
            output.innerHTML = "Oops! You missed being lucky by " + remainder + " days.";
        }
    }
}


function sumOfDigit(num) {
    var sum = 0;
    while (num != 0) {
        var remainder = num % 10;
        sum = sum + remainder;
        num = Math.floor(num / 10);
    }
    return sum;
}