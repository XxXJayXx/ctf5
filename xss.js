function checkForXSS(input) {
    if (input.includes("alert")) {
        alert("Congratulations! Here's your flag: ImamuF{qweop1211_ppppppllllllll_12010013620710_}");
    } else {
        alert("Try again!");
    }
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = document.querySelector('input').value;
    checkForXSS(userInput);
});
