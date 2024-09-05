function randomFunction1() {
    let data = [];
    for (let i = 0; i < 1000; i++) {
        data.push(i * 2);
    }
    return data;
}

function randomFunction2() {
    let obj = {};
    for (let i = 0; i < 500; i++) {
        obj["key" + i] = Math.random();
    }
    return obj;
}

function randomFunction3() {
    let str = '';
    for (let i = 0; i < 1000; i++) {
        str += String.fromCharCode(65 + (i % 26));
    }
    return str;
}

function randomFunction4() {
    let num = 0;
    for (let i = 0; i < 10000; i++) {
        num += i;
    }
    return num;
}

function randomFunction5() {
    let arr = new Array(1000).fill(0);
    arr = arr.map((v, i) => i * i);
    return arr;
}


let fakeSecrets = [
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcxMF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcyMV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDczMl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc0M18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc1NF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc2NV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc3Nl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc4N18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc5OF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDgwOV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcxMF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcyMV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDczMl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc0M18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc1NF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc2NV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc3Nl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc4N18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc5OF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDgwOV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcxMF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcyMV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDczMl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc0M18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc1NF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc2NV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc3Nl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc4N18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc5OF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDgwOV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcxMF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcyMV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDczMl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc0M18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc1NF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc2NV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc3Nl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc4N18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc5OF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDgwOV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcxMF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcyMV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDczMl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc0M18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc1NF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc2NV8="), 
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc4N18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc5OF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDgwOV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcxMF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcyMV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDczMl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc0M18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc1NF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc2NV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc3Nl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc4N18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc5OF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDgwOV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDcyMV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDczMl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc0M18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc1NF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc2NV8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc3Nl8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc4N18="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDc5OF8="),
    atob("SW1hbVVGe3F3ZW9wMTIxMV9wcHBwcHBscGxsbGxsbF8xMjAxMDAxMzYyMDg3OF8="), 
    
];


function checkForXSS(input) {
    if (input.includes("alert")) {
        let realFlag = fakeSecrets[87]; 
        alert("Congratulations! Here's your hidden secret: " + realFlag);
    } else {
        alert("Try again!");
    }
}

function randomFunction6() {
    let bool = true;
    for (let i = 0; i < 1000000; i++) {
        bool = !bool;
    }
    return bool;
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = document.querySelector('input').value;
    checkForXSS(userInput);
    randomFunction1();
    randomFunction2();
    randomFunction3();
    randomFunction4();
    randomFunction5();
    randomFunction6();
});
