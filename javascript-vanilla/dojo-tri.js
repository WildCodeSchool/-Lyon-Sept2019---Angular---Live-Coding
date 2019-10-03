const unorderedArray = [12, 3, 76, 89, 34];
let orderedArray = [];

// Browse the unordered array
for (let i = 0; i < unorderedArray.length; i++) {
    const unorderedValue = unorderedArray[i];

    // If the array is not empty, we can browse the orderedArray to search where to insert our unordered number
    if (orderedArray.length != 0) {
        let added = false;

        for (let j = 0; j < orderedArray.length; j++) {
            const orderedValue = orderedArray[j];
            
            if (unorderedValue < orderedValue) {
                /*orderedArray = [
                    ...orderedArray.slice(0, j),
                    unorderedValue,
                    ...orderedArray.slice(j, orderedArray.length)
                ];*/
                
                orderedArray.splice(j, 0, unorderedValue);
                added = true;
                break;
            }
        }
        
        if (!added) {
            orderedArray.push(unorderedValue);
        }
    }
    else { // The ordered array was empty so it's the first loop.
        // Just push unordered value because we can't compare this value with the array values, it's empty
        orderedArray.push(unorderedValue);
    }
}

//console.log(orderedArray);
console.log(unorderedArray.sort((number1, number2) => number1 > number2));