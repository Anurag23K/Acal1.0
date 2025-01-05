let display = document.getElementById('display');
let userIdElement = document.getElementById('user-id');

window.onload = function () {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('calculator').style.display = 'block';
        generateUserId();
    }, 2000);
};

function append(value) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculate() {
    try {
        let expression = display.innerText;

        // Handle constants
        expression = expression.replace(/π/g, Math.PI).replace(/e/g, Math.E);

        // Check for shortcuts
        if (expression === '❤️❤️') {
            openChatGPT();
            display.innerText = '0';
            return;
        } else if (expression === '7789') {
            openGoogle();
            display.innerText = '0';
            return;
        } else if (expression === '2323') {
            showDeveloperInfo();
            display.innerText = '0';
            return;
       } else if (expression === '2.0') {
           custom();
            display.innerText = '0';
            return;
        }
          
        // Calculate the expression
        display.innerText = eval(expression.replace('÷', '/').replace('×', '*'));
    } catch {
        display.innerText = 'Error';
    }
}

function openChatGPT() {
    window.open('https://chat.openai.com/', '_blank');
}

function openGoogle() {
    window.open('https://www.google.com', '_blank');
}

function showDeveloperInfo() {
    alert("Developer: Anurag Kumar Pal\nGithub; Anurag23K\nVersion: 1.0");
}
function custom() {
    alert("you can customize this Acal");
}
function generateUserId() {
    const userId = 'User-' + Math.floor(Math.random() * 1000000);
    userIdElement.innerText = `Your Unique ID: ${userId}`;
}
