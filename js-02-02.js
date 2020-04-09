a = 10;
b = { 
    nome : 'Andrea' 
};

messaggio = function(msg) {
    console.log(msg);
    console.log(a, b, c, d);
}

function funzione() {
    c = 20;
    d = 30;
    if (true) {
        e = 40;
    }
    console.log(a, b, c, d, e);
}

// verrà eseguito subbito (al caricamento del file corrente)
console.log(a, b, c, d);