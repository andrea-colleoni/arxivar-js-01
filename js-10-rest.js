$(() => {

    $('#btn').click(() => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'get'
        })
        .done((users) => {
            console.log(users);
        })
        .fail((a, b, c) => {
            console.warn(a, b, c);
        });
    });
});