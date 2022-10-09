// Manipulando conteúdo

// innerHTML

const element = document.querySelector('h1')

element.innerHTML = "olá devs!! <small>!!!!</small>"
// trocou o texto para olá devs e adicionou as exclamações em um tamanho pequeno.. e pq a tag small foi convertida pra HTML..

//OBS.: serve pra quando quero adicionar uma tag HTML, mas não quero mexer no arquivo HTML. é uma forma de adicionar HTML por meio do Javascript