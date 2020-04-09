$(() => {

    var persona = {
        nome: 'Andrea',
        cognome: 'Colleoni',
        altezzaInCm: 173,
        sesso: 'M',
    }
    $('#btn').click(() => {
        $.ajax({
            url: $('#txtUrl').val(),
            method: 'get'
        })
        .done((risposta) => {
            console.log('tutto ok!');
            console.log(risposta);
            console.log(risposta[0].nome);
            console.log(risposta[0]['altezza In Cm']);
            //console.log(JSON.parse(risposta));
            //$('#contenuto').append(risposta);
        })
        .fail(() => {
            console.warn('oopss!');
        })
        .always(() => {
            console.log('finito!');
        });
    });

});