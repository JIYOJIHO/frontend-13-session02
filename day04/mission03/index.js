window.onload = function() {
    const buttons = document.querySelectorAll('button');
    let clickedValue;
    for (const button of buttons) {
        button.addEventListener('click', onclickButton)
    }
}

const onclickButton = (e) => {
    const clickedValue = e.target.innerText;
    changeDisplayText(clickedValue);
}

const changeDisplayText = (input) => {
    const display = document.querySelector('.calculator');

    if (display.innerText === '0') {
        // 기존 입력값이 없을때
        display.innerText = input;
    } else if (display.innerText.length < 10) {
        // 기존 입력값이 있을때. 최대 10글자까지        
        display.innerText += input;
    }
}

const onclickButton = (e) => {
    const clickedButton = e.target;
    changeDisplayText(clickedButton);
}

const changeDisplayText = (input) => {
    const display = document.querySelector('.calculator');

    if (input.classList.contains('num')) {
        if (display.innerText === '0') {
            // 기존 입력값이 없을때
            display.innerText = input.innerText;
        } else if (display.innerText.length < 10) {
            // 기존 입력값이 있을때. 최대 10글자까지  
            display.innerText += input.innerText;
        }
    }
    
    if (input.classList.contains('clear')) {
        display.innerText = '0';
    }
}

// input이 del 일때
if (input.classList.contains('delete')) {
    display.innerText = display.innerText.length > 1 ? 
    display.innerText.slice(0, -1) : '0';
}

let firstValue = 0;
let displayReturn = false;
let operator;
window.onload = function() {
    // changeDisplayText();

    const buttons = document.querySelectorAll('button');
    let clickedValue;
    for (const button of buttons) {
        button.addEventListener('click', onclickButton)
    }
}

const onclickButton = (e) => {
    const clickedButton = e.target;
    const display = document.querySelector('.calculator');

    // clickedValue가 숫자일때
    if (clickedButton.classList.contains('num')) {
        changeDisplayText(clickedButton, display);
        displayReturn = false;
    }

    // clickedValue가 delete일때
    if (clickedButton.classList.contains('delete')) {
        display.innerText = display.innerText.length > 1 ? 
            display.innerText.slice(0, -1) : '0';
    }

    // clickedValue가 clear일때
    if (clickedButton.classList.contains('clear-btn')) {
        display.innerText = '0';
        firstValue = 0;
        displayReturn = false;
        operator = null;
    }

    // clickedValue가 operator일때
    if (clickedButton.classList.contains('operator')) {
        firstValue = Number(firstValue) + Number(display.innerText);
        displayReturn = true;
        operator = clickedButton.innerText;
    }

    // clickedValue가 total 일때
    if (clickedButton.classList.contains('total')) {        
        switch (operator) {
            case '+':
                display.innerText = Number(firstValue) + Number(display.innerText);
                break;
            case '-':
                display.innerText = Number(firstValue) - Number(display.innerText);
                break;
            case '*':
                display.innerText = Number(firstValue) * Number(display.innerText);
                break;
            case '/':
                display.innerText = Number(firstValue) / Number(display.innerText);
                break;
        }
        firstValue = 0;
        laststValue = 0;
        displayReturn = true;
        operator = null;
    }
}

const changeDisplayText = (input, display) => {
    if (displayReturn || !displayReturn && display.innerText === '0') {
        // 기존 입력값이 없을때
        display.innerText = input.innerText;
    } else if (!displayReturn && display.innerText.length < 10) {
        // 기존 입력값이 있을때. 최대 10글자까지  
        display.innerText += input.innerText;
    }
}