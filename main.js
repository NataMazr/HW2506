let array = [];
for (let i = 0; i <= 20; i++) {
    array.push(i);
}
console.log(array);

let arrNew = array.filter(function(el) {
    if (el > 1 && el % 3 !== 0 && el % 2 !== 0 || el == 3) {
        return el;
    };

});
console.log(arrNew);

let sumArr = arrNew.reduce(function(sum, el) {
    return sum + el;
});
console.log(sumArr);