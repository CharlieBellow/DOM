// criando e adicionando elementos

// createElement
const div = document.createElement('div') /* criando a div */
div.innerText = "olá devs!" /* adicionando um texto dentro da div.. */

// append (adicione depois)
const body = document.querySelector('body') /* pegando o body para colocar a div depois */

body.append(div)/* adicionando a div depois do body */


// prepend (adicione antes)
body.prepend(div) /* adicionando a div antes do body */

//obs.: só posso usar uma vez. se eu adicionei depois e em seguida adicionei antes, ele fica na última que eu fiz lendo o código de cima pra baixo. (em vez de ficar antes e depois)