// outro método de adicionar eventos

const h1 = documento.querySelector("h1")

// passando a função
h1.onclick = print
//se colocar a funçao print sem os parênteses, ela funciona como um atalho pra essa função

function print() {
  console.log('print');
}


h1.onclick = function () {
  console.log('outro momento');
}

// nesse método, só pode usar uma vez, porque se não ele só vai considerar a última que encontrar e desconsiderar as demais. por isso é recomendado fazer da outra forma..