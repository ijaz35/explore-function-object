//Table of 13 
var tableOfX = [];
function table(x) {
    for (var i = 0; i <= 10; i++) {
        tableOfX[i] = x * i;
    }
    tableOfX.shift();
    return tableOfX;
}
var tableOf13 = table(13);
console.log(tableOf13);
