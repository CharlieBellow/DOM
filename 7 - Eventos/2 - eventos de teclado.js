// eventos de teclado para

const input = document.querySelector('input')

input.onkeydown = function () {
  console.log('rodei');
}
// rodando a função sempre que digitar alguma coisa no teclado


input.onkeyup = function () {
  console.log('rode');
}
// o onkeyup roda a função quando solto a tecla. enquanto estiver pressionando ela não roda

input.onkeypress = function () {
  console.log('press');
}
// o onkeypress roda a função quando eu pressiono..