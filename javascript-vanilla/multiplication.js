/**
 * Return the multiplciation between the 2 parameters.
 * @param number number to multiply 
 * @param multiplicator multiplicator number 
 */
function multiplication(number, multiplicator) {
    let result = 0;

    let i = 0;
    while (i < multiplicator) {
        result = result + number;

        i++;
    }

    return result;
}

console.log(multiplication(5, 3));