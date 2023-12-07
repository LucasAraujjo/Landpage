let currentMemberIndex = 0;

function showNextMember() {
    currentMemberIndex = (currentMemberIndex + 1) % 5;
    updateMembers();
}

function showPrevMember() {
    currentMemberIndex = (currentMemberIndex - 1 + 5) % 5;
    updateMembers();
}

function updateMembers() {
    const membersContainer = document.getElementById('membersContainer');
    const offset = -currentMemberIndex * (100); // Ajuste para mostrar dois membros por vez
    membersContainer.style.transition = 'transform 0.5s ease-in-out';
    membersContainer.style.transform = `translateX(${offset}%)`;
}

// Limpar a transição após a animação para permitir navegação contínua
document.getElementById('membersContainer').addEventListener('transitionend', () => {
    const membersContainer = document.getElementById('membersContainer');
    membersContainer.style.transition = ''; // Remova o valor da propriedade transition
});

// ... Seu script existente ...

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
