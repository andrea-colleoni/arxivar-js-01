var f1 = function() {
    console.log('sono f1');
    return 'risultato di f1';
}


var f2 = () => {
    console.log('sono f2');
    return 'risultato di f2';
}

var f3 = function(funz) {
    console.log(funz);
    if (typeof funz === 'function') {
        funz();
    } else {
        console.warn('funz non è una funzione');
    }
    return 'finito f3'
}

// closure => passare una funzione anonima ad una funzione che la accetta come argomento
f3(function() { 
    console.log('xyz!!!');
    console.warn('attenzione!!');
    console.error('eccezione!');
});

f3(() => {
    console.log('lambda - xyz!!!');
    console.warn('lambda - attenzione!!');
    console.error('lambda - eccezione!');
});