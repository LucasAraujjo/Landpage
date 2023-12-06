let currentMemberIndex = 0;

function showNextMember() {
    currentMemberIndex = (currentMemberIndex + 1) % 4;
    updateMembers();
}

function showPrevMember() {
    currentMemberIndex = (currentMemberIndex - 2 + 5) % 5;
    updateMembers();
}

function updateMembers() {
    const membersContainer = document.getElementById('membersContainer');
    const offset = -currentMemberIndex * (100 / 2); // Ajuste para mostrar dois membros por vez
    membersContainer.style.transition = 'transform 0.5s ease-in-out';
    membersContainer.style.transform = `translateX(${offset}%)`;
}

// Limpar a transição após a animação para permitir navegação contínua
document.getElementById('membersContainer').addEventListener('transitionend', () => {
    const membersContainer = document.getElementById('membersContainer');
    membersContainer.style.transition = ''; // Remova o valor da propriedade transition
});




document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
  
  }
  document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
  }