document.addEventListener("DOMContentLoaded", function () {
    const answerField = document.querySelector('input[name="answer"]');
    const clearButton = document.getElementById('clearButton');
    const calculateButton = document.getElementById('calculateButton');

    // Add event listener for clear button
    clearButton.addEventListener("click", function () {
        answerField.value = '';
    });

    // Add event listener for numeric buttons
    const numButtons = document.querySelectorAll('.num-button');
    numButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            answerField.value += button.value;
        });
    });

    // Add event listener for the equal button (=) to evaluate the expression
    calculateButton.addEventListener("click", function () {
        try {
            answerField.value = eval(answerField.value);
        } catch (error) {
            answerField.value = 'Error';
        }
    });

    // Add event listeners for basic arithmetic operations
    const mathButtons = document.querySelectorAll('.math');
    mathButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            answerField.value += button.value;
        });
    });
});
