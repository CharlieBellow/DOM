// argumento event

const input = document.querySelector('input')

input.onkeydown = function (event) {
  console.log(event.key);
  // o event já diz que a função vai receber um evento
  // o event.key diz qual fi a tecla digitada
// se eu quiser mostrar na tela que teclas eu tô digitando é só fazer isso!
  
  
  
  console.log(event.currentTarget.value);
  //mostra quem tá disparando o evento e pega o valor
}

