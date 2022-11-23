const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function adicionar() {
    const conteudo = document.getElementById('texto').value;
    const novaH2 = document.createElement('H2');
    const novoBotao = document.createElement('button');
    novoBotao.innerHTML = "Excluir";
    novaH2.innerHTML = conteudo;

    novaH2.addEventListener('click', function () {
        novaH2.style.color = "rgb(20,9,0)";
        novaH2.style.textDecoration = "line-through"
    })

    novoBotao.addEventListener('click', function () {
        novaH2.remove();
        novoBotao.remove();
    })

    document.body.appendChild(novaH2);
    document.body.appendChild(novoBotao);
    document.getElementById('texto').value = "";
}

function cadastrar() {
    document.getElementById('cadastrar').style.display = "none";
    document.getElementById('exibir').style.display = "block";
    document.getElementById('dados').style.display = "block";
}

function exibir() {
    document.getElementById('cadastrar').style.display = "block";
    document.getElementById('exibir').style.display = "none";
    document.getElementById('dados').style.display = "block";
}

function dados() {
    document.getElementById('cadastrar').style.display = "none";
    document.getElementById('exibir').style.display = "none";
    document.getElementById('dados').style.display = "block";

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");

    p1.innerText = "Nome: " + nomeSalvo;
    p2.innerText = "Login: " + loginSalvo;
    p3.innerText = "Email: " + emailSalvo;
    p4.innerText = "Senha: " + senhaSalva;
}

document.replaceChild(exibir, cadastrar, dados);


function nomeValido(){
    if(nome.value == "")
    {
        nome.style.backgroundColor="#FFFFFF";
        nome.style.transitionDuration="0.3s";
        span[0].style.display="none";
    }
    else if(nome.value.length < 10)
    {
        nome.style.backgroundColor="#FF9C9D";
        nome.style.transitionDuration="0.3s";
        span[0].style.display="block";
        span[0].style.transitionDuration="0.3s";
    }
    else
    {
        nome.style.backgroundColor="#92FFC0";
        nome.style.transitionDuration="0.3s";
        span[0].style.display="none";
        span[0].style.transitionDuration="0.3s";
        var nomeSalvo = document.getElementById("nome").value;
    }
}

function loginValido(){
    if(login.value == "")
    {
        login.style.backgroundColor="#FFFFFF";
        login.style.transitionDuration="0.3s";
        span[1].style.display="none";
    }
    else if(login.value.length > 10)
    {
        login.style.backgroundColor="#FF9C9D";
        login.style.transitionDuration="0.3s";
        span[1].style.display="block";
    }
    else
    {
        login.style.backgroundColor="#92FFC0";
        login.style.transitionDuration="0.3s";
        span[1].style.display="none";
        var loginSalvo = document.getElementById("login").value;
    }
}

function mailValido(){
    if(email.value == "")
    {
        email.style.backgroundColor="#FFFFFF";
        email.style.transitionDuration="0.3s";
        span[2].style.display="none";
    }
    else if(!emailRegex.test(email.value))
    {
        email.style.backgroundColor="#FF9C9D";
        email.style.transitionDuration="0.3s";
        span[2].style.display="block";
    }
    else
    {
        email.style.backgroundColor="#92FFC0";
        email.style.transitionDuration="0.3s";
        span[2].style.display="none";
        var emailSalvo = document.getElementById("email").value;
    }
}

function senhaValida(){
    if(senha.value == "" && cfsenha.value == "" )
    {
        senha.style.backgroundColor="#FFFFFF";
        senha.style.transitionDuration="0.3s";
        cfsenha.style.backgroundColor="#FFFFFF";
        cfsenha.style.transitionDuration="0.3s";
        span[3].style.display="none";
        span[4].style.display="none";
    }
    else if(senha.value == cfsenha.value)
    {
        senha.style.backgroundColor="#92FFC0";
        senha.style.transitionDuration="0.3s";
        cfsenha.style.backgroundColor="#92FFC0";
        cfsenha.style.transitionDuration="0.3s";
        span[3].style.display="none";
        span[4].style.display="none";
        var senhaSalva = document.getElementById("senha").value;
    }
    else
    {
        senha.style.backgroundColor="#FF9C9D";
        senha.style.transitionDuration="0.3s";
        cfsenha.style.backgroundColor="#FF9C9D";
        cfsenha.style.transitionDuration="0.3s";
        span[3].style.display="block";
        span[4].style.display="block";
    }
}

function botaoDados(){
    document.getElementById("cadastro_dados").display="none";
    document.getElementById("conteudo").display="block";
}
