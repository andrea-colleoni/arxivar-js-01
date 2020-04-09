var users;
$(() => {
    $('#btn').click(() => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'get'
        })
        .done((resp) => {
            $('#contenuto').empty();
            $('#contenuto').append('<ul id="elenco"></ul>');
            users = resp;
            refreshElenco();
            console.log(users);
            
        })
        .fail((a, b, c) => {
            console.warn(a, b, c);
        });
    });
    $('#txtFilter').keyup(() => {
        refreshElenco();
    });
});
function refreshElenco() {
    console.log('refresh');
    $('#elenco').empty();
    const filter = $('#txtFilter').val().toLowerCase();
    users
    .filter(u => u.name.toLowerCase().indexOf(filter) >= 0)
    .forEach(u => {
        $('#elenco').append(`<li>${u.name} (${u.address.city})</li>`);
    });
}