'use strict';

var a = 10;

function funzione1() {
    console.log('inizio');
    // var a = 15;
    // a = 15;
    var b = 20;

    console.log(a, b); //, window.a);
    // console.log(a, b, this.a); // con 'use strict' window non viene copiato come riferimento in this
    
    b = 0;
    // console.log(c);

    // console.log(a, b);

    console.log('fine');
}

function funzione2() {
    console.log('inizio');
    console.log(a, b);

    console.log('fine');
}

// console.log(a, b);
funzione1();
