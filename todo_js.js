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
