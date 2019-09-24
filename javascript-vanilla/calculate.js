function calculate(number1, operation, number2) {
    let result = 0;
    switch(operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            if (number2 !== 0) {
                result = number1 / number2;
            }
            break;
        case '*':
            result = number1 * number2;
            break;
        default:
            break;
    }

    return result;
}

console.log(calculate(2, '/', 0));