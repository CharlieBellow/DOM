// Navegando pelos elementos
// sibling (irmãos)

const el = document.querySelector('header')

// nextSibling
console.log(el.nextSibling);
//pega o próximo elemento irmão levando em consideração os espaços

//nextElementSibling
console.log(el.nextElementSibling);
// pega o próximo elemento irmão SEM levar em consideração os espaços, então pega direto a próxima tag irmã

// previousSibling 
const elemento = document.querySelector('body script')

console.log(elemento.previousSibling);
// pega o elemento anterior ao irmão dele considerando o espaço vazio..


// previousElementSibling
console.log(elemento.previousElementSibling);
// pega o elemento anterior sem levar em conta o elemento vazio