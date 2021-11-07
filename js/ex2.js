function validar() {
    let nome = cadastro.nome.value; //formulário.campo.valor(o que eu quero)
    let cpf = cadastro.cpf.value;    //referencia atributo name
    let email = cadastro.email.value;
    let senha = cadastro.senha.value;
    let confirma = cadastro.confirma.value;

    if(nome==""){
        alert("Nome é campo de preenchimento obrigatório");
        cadastro.nome.focus();
        return false;
    }
    if(cpf==""){
        alert("CPF é campo de preenchimento obrigatório");
        cadastro.cpf.focus();
        return false;
    }
    if(cpf.length != 14) {
        alert("CPF inválido");
        cadastro.cpf.focus();
        return false;
    }
    if (email==""){
        alert("Campo e-mail é de preenchimento obrigatório!");
        cadastro.email.focus();
        return false;
    }
    if (senha==""){
        alert("Campo senha é de preenchimento obrigatório!");
        cadastro.senha.focus();
        return false;
    }
    if (senha.length < 6 || senha.length > 10){
        alert("A senha deve conter no mínimo 6 e no máximo 10 números!");
        cadastro.senha.focus();
        return false;
    }
    if (isNaN(senha)){
        alert("A senha deve conter apenas números!");
        cadastro.senha.focus();
        return false;
    }
    if (confirma==""){
        alert("É obrigatório confirmar a senha");
        cadastro.confirma.focus();
        return false;
    }
    if(confirma != senha){
        alert("A senhas informadas não são iguais");
        cadastro.confirma.focus();
        return false;   
    }
}