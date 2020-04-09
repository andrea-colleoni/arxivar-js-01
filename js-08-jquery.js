'use strict'

var numPar = 0;

$(document).ready(() => {
    // quando il DOM è pronto, facciamo il setup della nostra pagina dinamica
    console.log('pronto!');

    // in jQ si usano i selettori CSS per individuare gli elementi (0 o più) nel DOM

    $('#btn').click(() => {
        $('.importante').css('color', $('#txtColore').val());
    });

    $('#go1').click(() => {
        numPar++;
        $('#pannello').append(`<p id="newPar-${numPar}">Nuovo paragrafo</p>`);
    });


    $('#go2').click(() => {
        $("#dialog-message").dialog({
            modal: true,
            //pippo: 'ciao',
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        });
    });
});