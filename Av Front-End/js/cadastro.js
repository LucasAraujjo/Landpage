
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode', darkModeToggle.checked);
}

// ... Seu script existente ...
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', toggleDarkMode);

    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode', darkModeToggle.checked);
    }

    // ... Seu script existente ...
});

function clicar() {

    var nome = document.querySelector('#nome').value
    var email = document.querySelector('#email').value
    var msg = document.querySelector('#msg').value


    window.confirm(`Deseja enviar suas respostas?`);

}

function mensagem(){


    window.alert("Muito obrigado pelo seu feedback!")
}