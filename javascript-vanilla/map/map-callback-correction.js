const t1 = [12, 5, 7, 4, 42];

Array.prototype.mapFunction = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }

    return newArray;
}

let results = t1.mapFunction(function(value, index=0, array=[]) {
    return value * 2;
});
console.log(results);