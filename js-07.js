
function go1() {
    var h1 = document.getElementsByTagName('h1');
    h1.innerText = "ciao";
}
function go2() {
    var jqh1 = $('h1');
    $(jqh1[0]).text('ciao');
}
