//Declear a function
// function fanStart() {
//     console.log('fan is moving');

// }
// var fanStatus = fanChalao();

//Declear a function with parameter
function singaraAno(taka) {
    console.log('Taka dise' + taka);
    console.log('ai nen ' + taka);
    var singaraPrice = 10;
    var singara = taka / singaraPrice;
    return singara;
}
var money = 300;
var singaraQuantity = singaraAno(money);
console.log(singaraQuantity + ' pieces singara');