

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return 'You can not divide by 0'
    } else {
        return a / b;
    }
}

function operate(operator = '+', a = 0, b = 0) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    }
}

function jokes() {
    backgroundDiv.style.position = 'fixed';
    backgroundDiv.style.zIndex = '9999';
    backgroundDiv.style.backgroundImage = 'url("./zero.jpg")';
    
    backgroundDiv.style.top = '0';
    backgroundDiv.style.bottom = '0';
    backgroundDiv.style.left = '0';
    backgroundDiv.style.right = '0';
    
    backgroundDiv.style.backgroundSize = 'contain';
    
    document.body.appendChild(backgroundDiv);
}

const populate = document.querySelectorAll('#digits button');
const display = document.querySelector('#display');
const operators = document.querySelectorAll('#operators');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const dlt = document.querySelector('#delete');
const backgroundDiv = document.createElement('div');

let first;
let second;
let clean;
let reset;
let switchi = 'off'


populate.forEach((number) => {
    number.addEventListener('click', function(e) {
        if (display.textContent == '0' || clean == 'on' ) {
            display.textContent = '';
        }
        display.textContent += e.target.innerText;
        if (switchi == 'off') {
            first = parseInt(display.textContent);
            second = null;
        } else {
            second = parseInt(display.textContent);
            switchi = 'on'
        }
        clean = 'off';
    });
});


operators.forEach((op) => {
    op.addEventListener('click', function(e) {
        if (switchi == 'on') {
            if (oprtrValue == '/' && second == '0') {
                jokes();
                first = undefined;
                second = undefined;
                display.textContent = '0';
                switchi = 'off';

            } else {
                result = Math.round(operate(oprtrValue, first, second)*10000)/10000;
                display.textContent = result;
                first = result;
                second = null;
            }
        }
        oprtrValue = e.target.innerText;
        switchi = 'on';
        clean = 'on';
    })
})


equal.addEventListener('click', () => {
    if (oprtrValue == '/' && second == '0') {
        jokes();
        first = undefined;
        second = undefined;
        display.textContent = '0';
        switchi = 'off';
    } else {
        result = Math.round(operate(oprtrValue, first, second)*10000)/10000;
        display.textContent = result;
        first = result;
        second = null;
    }
    switchi = 'off';
    clean = 'on';
})


clear.addEventListener('click', () => {
    first = undefined;
    second = undefined;
    display.textContent = '0';
    switchi = 'off';
})

dlt.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    first = parseInt(display.textContent);
})