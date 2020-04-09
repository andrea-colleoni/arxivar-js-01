var postId;
var post;

$(() => {
    $('#btnIndietro').click(() => {
        location.href = 'js-11-tables.html';
    });
    
    const postSearch = location.search.substr(1);
    const pos = postSearch.indexOf('postId=') + 7;
    postId = +postSearch.substring(pos);

    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        method: 'get',
        headers: [
            { Authorize: 'token' }
        ]
    })
    .done((resp) => {
        post = resp;
        refreshForm();
    })
    .fail((a, b, c) => {
        console.warn(a, b, c);
    });
});
function refreshForm() {
    $('#txtId').val(post.id);
    $('#txtUserId').val(post.userId);
    $('#txtTitle').val(post.title);
    $('#txtBody').val(post.body);
}