// Adicionando elementos
const div = document.createElement('div')
div.innerText = "olá devs!"

//insertBefore (adiciona entre uma tag e outra - no meio) - adicione antes
const body = document.querySelector('body')

const script = body.querySelector('script')
// é o mesmo que fazer o quer desse jeito::
//const script = document.querySelector('body script')

body.insertBefore(div, script)


//e se eu quiser inserir após o header? (insertAfter)



const header = body.querySelector('header')

body.insertBefore(div, header.nextElementSibling)


