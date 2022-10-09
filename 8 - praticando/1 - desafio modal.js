/*  desafio modal
- pegar o id do botão com o querySelector
 - quando clicar vai tirar o invisible. pra isso pega a primeira div e remove o invisible
 - quando teclar ecs vai ter que colocar de novo o invisible
*/
//como eu tentei fazer:
/*const idButton = document.querySelector('id')

const divModal = document.querySelector('button')

const modal = divModal.nextElementSibling


idButton.addEventListener('click', removeInvisible)

function removeInvisible() {
  modal.removeAttribute('class', 'invisible')
}

idButton.addEventListener('click', addInvisible)

function addInvisible() {
  modal.addAttribute('class', 'invisible')
}
*/


//como ele fez jurando que ensinou a fazer tudo isso........

const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('modal-wrapper')

buttonOpenModal.onclik = function () {
  modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function (event) {
  const isEscKey = event.key === 'Escape'

  if (isEscKey) {
    modalWrapper.classList.add('invisible')
  } else if (!isEscKey) {
    modalWrapper.classList.remove('invisible')
  }
})