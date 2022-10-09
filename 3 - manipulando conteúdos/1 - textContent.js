// Manipulando conteúdos

// textContent 
// muda o conteúdo do texto. troca o texto por outro texto que eu colocar

const element = document.querySelector('h1')

element.textContent = "troquei meu blog por olá devs!" 
// mudou a tag h1 que tava escrito meu blog e ficou olá devs!

element.textContent += " adição de olá devs no texto que esta dentro do h1!"
//também posso concatenar e juntar os textos. para isso é so colocar o += em vez de só o =
console.log(element.textContent);



