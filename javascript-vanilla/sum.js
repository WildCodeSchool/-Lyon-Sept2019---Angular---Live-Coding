
function sum(number, increment) {
    let result = 0;
    for (let i = 0; i <= number; i += increment) {
        result += i;
    }

    return result;
}

console.log(sum(100, 2));