// querySelectorAll('');

const element = document.querySelectorAll('[src]')
console.log(element);

// pega os elementos pelo seletor (da mesma forma que seleciona os elementos pelo CSS). Desa vez ele pega todos que ele achar.


// diferença entre node list e HTML collection

// aqui vai me retornar uma node list
const elements = document.querySelectorAll('.two')

elements.forEach(el => console.log(el))


// aqui retorna um erro pq o getSelectorByClassName não aceita forEach

const elementos = document.getElementsByClassName('two')
// aqui ele devolve um HTML collection e o HTML Collection não aceita forEach. por issp é melhor usar o querySelectorAll('')

elementos.forEach(el => console.log(el))