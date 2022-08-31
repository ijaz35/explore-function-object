//break


// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++
// }


///break in for loop

// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }


//continue in while loop

// var numbers = [23, 55, 77, 90, 103, 8, 44, 70];
// var i = 0;
// while (i < numbers.length) {
//     var number = numbers[i];
//     i++;

//     if (number > 90) {
//         continue;
//     }
//     console.log(number);


// }
//continue in for loop
var numbers = [23, 55, 77, 90, 103, 8, 44, 70];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    i++;
    if (number < 90) {
        continue;
    }
    console.log(number);
}