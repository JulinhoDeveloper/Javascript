
function verde() {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('verde');
}
function vermelho() {
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('vermelho');
}
function azul() {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.add('azul');
}





//document.getElementById('exemplo').innerHTML = "Pedro <button>clique</button> ";
//document.getElementsByClassName('lista')[0].innerHTML = 'alterado';
//document.getElementsByTagName('input')
//document.getElementsByName('email')
//document.querySelectorAll('.lista')
//document.querySelector('.lista')
//document.querySelector('button').innerHTML = "oi"