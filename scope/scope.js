//a este variabila locala
var a = 10;

function multiply2(a) {
    //a este variabila locala
    a *= 2
    console.log(a)
}

function multiply3(b){
    //a este vriabila globala
    a *= 3
    console.log(a)
}




multiply2(10)

multiply3(5)

console.log(a)