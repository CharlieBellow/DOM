// Manipulando elementos

//Atributos

const header = document.querySelector('header') /* pegou o header */
header.setAttribute('id', 'header') /* atribuiu um id de nome header a esse ao header que ele pegou */

const headerID = document.querySelector('#header') /* pegou agora o id de nome header que foi atribuído na linha acima  */

console.log(headerID); /* mostrou no console log o Id que foi atribuído. no console aparece assim: header id="header">...</header> mesmo que no documento HTML esteja assim: <header>...</header>*/

//além de atribuir alguma coisa, podemos pegar, ou seja, ver o que tem..
console.log(headerID.getAttribute('id')); /* aí no console vou ver que o nome do id é header */

console.log(headerID.getAttribute('class')); /* mostra que o nome da classe é bg */

// removendo atributo:
header.removeAttribute('id')
header.removeAttribute('class') /* agora não tem mais classe, mesmo que no documento HTML a class="bg" esteja escrita lá */

// atribuindo uma classe novamente
header.setAttribute('class', 'bg header') /* adicionei a classe */

console.log(header.getAttribute('class')); /* mandei imprimir no console  */