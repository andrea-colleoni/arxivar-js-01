var posts;
var users;
$(() => {
    users = JSON.parse(localStorage.getItem('users'));
    if (!users) { // !users => true: quando user !== undefined && users !== null && users !== 0 && users !== '' ))
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'get'
        }).done((resp) => {
            users = resp;
            localStorage.setItem('users', JSON.stringify(users));
        }).fail((a, b, c) => {
            console.warn(a, b, c);
        });
    }

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'get'
    }).done((resp) => {
        posts = resp;
        refreshTable();
        //console.log(posts);
    }).fail((a, b, c) => {
        console.warn(a, b, c);
    });
});
function refreshTable() {
    //console.log(users);
    $('#tbl').DataTable({
        scrollY: "400px",
        scrollCollapse: true,
        paging: false,
        data: posts.map(p => {
            return { 
                id: p.id, 
                userId: p.userId, 
                title: p.title, 
                body: p.body, 
                abstract: p.body.substring(0, 50),
                user: users.find(u => u.id === p.userId),
            }
        }),
        columns: [
            {
                title: 'ID',
                data: 'id',
                render: function (data, type, row) {
                    return `<a href="js-12-form.html?postId=${data}" class="btn btn-primary">Apri</a>`;
                }
            },
            { 
                title: 'Utente', 
                data: 'user.name',
                /*
                render: function(user) {
                    return `${user.name}`;
                }
                */
             },
            { title: 'Titolo', data: 'title' },
            { title: 'Riassunto', data: 'abstract' },
        ]
    });
}