const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//função de validação de todas as informações para não deixar nenhuma info faltando
form.addEventListener('submit', (event) => {
    event.preventDefault()
    nameValidate()
    emailValidate()
    mainPasswordValidate()
    passwordConfirm()
})
//função que vai setar os erros de validação na tela com a mudança de CSS
function setError(index) {
    campos[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block';
}
//função que vai voltar ao normal todas as funcionalidades com as validações corretas
function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}


//Função que valida o nome: se o item 0 do array campos receber valores menores que 3, ative o "setError"      
function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0)
    }
    else {
        removeError(0)
    }
}
//função que valida o email. Ele faz um teste que verifica se seu email tem algum caractere na const emailRegex que caracteriza um email válido
function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1)
    }
    else {
        removeError(1)
    }
}
//função que valida senha. Basicamente se o item 2 do array campo conter valor menor que 8, ele dispoara a função setError(2)
function mainPasswordValidate() {
    if (campos[2].value.length < 8) {
        setError(2)
    }
    else {
        removeError(2)
        passwordConfirm()//função criada assim que foi validado a senha
    }
}
//função que garante que as senhas serão iguais.
function passwordConfirm() {
    if (campos[3].value != campos[2].value) {
        setError(3)
    }
    else {
        removeError(3)
    }

}
