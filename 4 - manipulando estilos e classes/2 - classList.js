// alterando estilos

//classList

const element = document.querySelector('body')

element.classList.add('active', 'green') /* adicionando as classes active e green que tem lá no meu CSS inserido na tag style do HTML */

console.log(element.classList); /* pegando a lista de classes */

//element.classList.remove('active') /* remove a classe indicada */
element.classList.toggle('active') /* ele faz uma pesquisa pela classe que você pediu, se ela existir, ele tira, se ela não existir ele adiciona. funciona como um botão, ligado/desligado ou adiciona/remove */

