//a este variabila locala
var a = 10;

function multiply2(a) {
    //a este variabila locala
    a *= 2
    console.log(a)
}

function multiply3(b) {
    //a este vriabila globala
    a *= 3
    console.log(a)
}

function multiply4(x) {
    //let si var creaza o variabila locala
    var a = 50
    a *= 4
    console.log(a)
}

function defineVars(x) {
    //defineste doua variabile locale
    var c = 123
    let d = 321
    console.log(c)
    console.log(d)
}
//o bucla care se executa o singura data
//pentru ca este definita in bucla
do {
    let e = 100

    //var este o variabila globala
    //cand este definita cu var in bucla
    var f = 33
 } while (false)

        console.log(f)

        //o sa ne dea eroare:
        // console.log(e)

        if(true) {
            //g este locala
            let g = 77
            //h este globala
            var h = 99
        }

        //o sa ne dea eroare:
        // console.log(g)
        console.log(h)


    multiply2(1)

    multiply3(1)

    multiply4(1)
    //apeleaza functia define vars
    defineVars()


    // cele doua variabile nu sunt vizibile aici
    // console.log(c)
    // console.log(d)



    console.log(a)