// manipulando conteúdos

// value

//manipular o valor de um input (entrada de texto)

const element = document.querySelector('input')

element.value = "valor que eu quiser"
// assim o valor já vem "populado (inserido por padrão no espaço), ou seja, já vem preenchido"


// exemplo de uso:
// entrada de email
const email = document.querySelector('input')
email.value = "@.com"

// entrada de 'site
const site = document.querySelector('input')
site.value = "http://.com"

//eu também posso conferir qual é o valor que está no elemento:
//console.log(element.value);

// então serve tanto pra atribuir um valor (dizer o que tem que vir escrito na entrada de dados), quanto para pegar o valor (saber qual valor foi atribuído àquele elemento)


// notei que ele está usando uma variável do tipo const, ou seja, uma variável que não muda seu valor. então nesse caso, o elemento é sempre o mesmo.. mas com esses recursos de manipulação de conteúdo, é possível alterar esse elemento.
// isso é importante. pq a variável const é uma variável que tem um escopo menor e não altera tanto o programa. então pra casos que a variável precisa ser const, mas o elemento precisa ser alterado, é legal usar esses recursos.