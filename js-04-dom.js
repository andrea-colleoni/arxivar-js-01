var h1 = document.getElementsByTagName('h1')[0];
var p1 = document.getElementById('p1');
var importanti = document.getElementsByClassName('importante');
var pannello = document.getElementById('pannello');

var campoColore = document.getElementById('txtColore');

cambiaTesto = function(testo) {
    h1.innerText = testo;
}

impostaImportanti = function(colore) {
    for(i = 0; i < importanti.length; i++) {
        //importanti[i].style = 'color : ' + colore;
        // uso l'interpolazione
        importanti[i].style = `color : ${colore};`;
    }
}
/*
cambiaColore = function() {
    impostaImportanti(campoColore.value);
}
*/
//document.getElementById('btn').addEventListener('click', cambiaColore);

document.getElementById('btn').addEventListener('click', () => impostaImportanti(campoColore.value));