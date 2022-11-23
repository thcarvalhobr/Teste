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

    var nomeDado = (localStorage.getItem('nome'));
    var loginDado = (localStorage.getItem('login'));
    var emailDado = (localStorage.getItem('email'));
    var senhaDado = (localStorage.getItem('senha'));

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");

    p1.innerText = "Nome: " + nomeDado;
    p2.innerText = "Login: " + loginDado;
    p3.innerText = "Email: " + emailDado;
    p4.innerText = "Senha: " + senhaDado;
}

document.replaceChild(exibir, cadastrar, dados);


function nomeValido(){
    if(nome.value == "")
    {
        nome.style.backgroundColor="#FFFFFF";
        span[0].style.display="none";
    }
    else if(nome.value.length < 10)
    {
        nome.style.backgroundColor="#FF9C9D";
        span[0].style.display="block";
        span[0].style.transitionDuration="0.3s";
    }
    else
    {
        nome.style.backgroundColor="#92FFC0";
        span[0].style.display="none";
        span[0].style.transitionDuration="0.3s";
        var nomeSave = document.querySelector("#nome").value;
        localStorage.setItem('nome', nomeSave);
    }
}

function loginValido(){
    if(login.value == "")
    {
        login.style.backgroundColor="#FFFFFF";
        span[1].style.display="none";
    }
    else if(login.value.length > 10)
    {
        login.style.backgroundColor="#FF9C9D";
        span[1].style.display="block";
    }
    else
    {
        login.style.backgroundColor="#92FFC0";
        span[1].style.display="none";
        var loginSave = document.querySelector("#login").value;
        localStorage.setItem('login', loginSave);
    }
}

function mailValido(){
    if(email.value == "")
    {
        email.style.backgroundColor="#FFFFFF";
        span[2].style.display="none";
    }
    else if(!emailRegex.test(email.value))
    {
        email.style.backgroundColor="#FF9C9D";
        span[2].style.display="block";
    }
    else
    {
        email.style.backgroundColor="#92FFC0";
        span[2].style.display="none";
        var emailSave = document.querySelector("#email").value;
        localStorage.setItem('email', emailSave);
    }
}

function senhaValida(){
    if(senha.value == "" && cfsenha.value == "" )
    {
        senha.style.backgroundColor="#FFFFFF";
        cfsenha.style.backgroundColor="#FFFFFF";
        span[3].style.display="none";
        span[4].style.display="none";
    }
    else if(senha.value == cfsenha.value)
    {
        senha.style.backgroundColor="#92FFC0";
        cfsenha.style.backgroundColor="#92FFC0";
        span[3].style.display="none";
        span[4].style.display="none";
        var senhaSave = document.querySelector("#senha").value;
        localStorage.setItem('senha', senhaSave);
    }
    else
    {
        senha.style.backgroundColor="#FF9C9D";
        cfsenha.style.backgroundColor="#FF9C9D";
        span[3].style.display="block";
        span[4].style.display="block";
    }
}
