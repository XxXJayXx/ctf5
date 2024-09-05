function complexCalculation(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += Math.pow(i, 2);
    }
    return result;
}

function generateRandomText() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let text = "";
    for (let i = 0; i < 10; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
}

function getSecret() {
    const part1 = atob("SW1hbVVG");
    const part2 = atob("e3F3ZW9wMTIxMV9w");
    const part3 = atob("cHBwcHBwbGxsbGxsbGxsbF8x");
    const part4 = atob("MjAxMDAxMzYyMDcxMH0=");
    return part1 + part2 + part3 + part4;
}

function checkForXSS(input) {
    if (input.includes("alert")) {
        alert("Congratulations! Here is your secret: " + getSecret());
    }
}

function printRandomLogs() {
    for (let i = 0; i < 100; i++) {
        console.log(generateRandomText());
    }
}

printRandomLogs();
complexCalculation(100);
