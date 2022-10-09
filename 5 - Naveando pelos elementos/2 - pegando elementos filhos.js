// Navegando pelos elementos filhos

//childNodes 

const el = document.querySelector('body')

console.log(el.childNodes);
// pega os filhos do elemento mostrando tudo que tem em forma de NodeList, até os espaços vazios aparecem como text 

// children 
console.log(el.children);
// pega os filhos do elemento mostrando só as tag existentes em formato de HTMLCollection


//firstChild 
console.log(el.firstChild);
//mostra o primeiro elemento filho do childNodes (leva em consideração o espaço vazio)



// firsElementChild
console.log(el.firstElementChild);
// mostra o primeiro elemento filho do children (NÃO leva em consideração o espaço vazio)


// lastChild 
console.log(el.lastChild);
// pega o último elemento filho

// lastElementChild
console.log(lastElementChild);
//pega o último elemento filho