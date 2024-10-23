

const buttons = document.querySelectorAll('.buttons'); // Select all buttons with the class 'buttons'
const outputParagraph = document.getElementById('output'); // Select the output paragraph
const buttonClear = document.getElementById('Clear'); // Select the clear button


function showText(buttonText) {
    const dynamicText = document.getElementById('dynamicText'); // Display the clicked text from bottons in the dynamicText paragraph between the greeting and closing
    dynamicText.innerHTML += buttonText + '<br/>';
}

document.querySelectorAll('.buttons').forEach(button => {
    button.addEventListener('click', function () {
        const message = this.getAttribute('data-message'); // Get the message from the button's data-message attribute
        showText(message);
    });
});


document.getElementById('clear').addEventListener('click', function () {
    const dynamicText = document.getElementById('dynamicText'); // Display the clicked text from bottons in the dynamicText paragraph between the greeting and closing
    dynamicText.textContent = '';
});



