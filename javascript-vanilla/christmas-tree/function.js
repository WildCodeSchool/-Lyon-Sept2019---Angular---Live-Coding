
const colors = ['red', 'purple', 'yellow', 'green', 'blue', 'lightblue', 'pink'];

/**
 * Return a number between 0 and the max number parameter.
 * @param {number} number max number
 */
function randomNumber(number) {  
    return Math.floor(Math.random() * number);
}

/**
 * Return a random color from the colors array.
 */
function getRandomColor() {
    return colors[randomNumber(colors.length)];
}