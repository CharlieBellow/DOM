// alterando estilos

const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3D2"
// o style é uma propriedade que permite que eu coloque o CSS em linha. ou seja é como se eu fizesse isso no HTML: <body style="">
// OBS.: nesse caso, tem que usar o backgroundColor no estilo camelCase  e não o background-color com o - do CSS

// posso também pegar esse valor:
console.log(element.style.backgroundColor); /* aí ele mostra o estilo que foi atribuído, no caso da cor, mostra em RGB */
