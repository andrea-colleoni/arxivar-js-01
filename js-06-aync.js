var f1 = function () {
    console.log('inizio');
    document.getElementById('t1').style.display = '';
    setTimeout(() => document.getElementById('t1').innerHTML = 'Finito il 1 thread', 4000);
    document.getElementById('t2').style.display = '';
    setTimeout(() => document.getElementById('t2').innerHTML = 'Finito il 2 thread', 6000);
    document.getElementById('t3').style.display = '';
    setTimeout(() => document.getElementById('t3').innerHTML = 'Finito il 3 thread', 2000);
    document.getElementById('t4').style.display = '';
    setTimeout(() => document.getElementById('t4').innerHTML = 'Finito il 4 thread', 8000);
    document.getElementById('t5').style.display = '';
    setTimeout(() => document.getElementById('t5').innerHTML = 'Finito il 5 thread', 1000);
}

document.getElementById('btn').addEventListener('click', () => {
    f1();
    console.log('finito');
});

let myFirstPromise = new Promise((ok, ko) => {
    console.log('inizio promise');
    // Chiamiamo resolve(...) quando viene eseguito correttamente, e reject(...) quando fallisce.
    // In questo esempio viene utilizzato setTimeout(...) per simulare un'operazione asincrona.
    // Nella realtà probabilmente utilizzerai qualcosa del tipo XHR o HTML5 API.
    const millis = new Date().getTime();
    if ((millis % 2) === 0) {
        setTimeout(function () {
            ok(`Success! => ${millis}`); // È andato tutto perfettamente!
        }, 2500);
    } else {
        setTimeout(function () {
            ko(`Failure! => ${millis}`); // È andato tutto male!
        }, 2500);
    }
    console.log('fine promise');
});

console.log('passo di qui...');
myFirstPromise.then((successMessage) => {
    // successMessage viene passato alla funzione resolve(...) .
    // Non deve essere necessariamente una stringa, ma nel caso sia solo un messaggio probabilmemte lo sarà.
    console.log("Yay! " + successMessage);
});
console.log('passo di qui...');
myFirstPromise.catch((errorMessage) => {
    console.log("Noo! " + errorMessage);
});
console.log('passo di qui... (finito)');
