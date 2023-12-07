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
    const offset = -currentMemberIndex * (100);
    membersContainer.style.transition = 'transform 0.5s ease-in-out';
    membersContainer.style.transform = `translateX(${offset}%)`;
}

document.getElementById('membersContainer').addEventListener('transitionend', () => {
    const membersContainer = document.getElementById('membersContainer');
    membersContainer.style.transition = ''
});


const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode', darkModeToggle.checked);
}

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', toggleDarkMode);

    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode', darkModeToggle.checked);
    }
});
