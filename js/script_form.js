const nome = document.getElementById("nome");
const largura = document.getElementById("largura");
const comprimento = document.getElementById("comprimento");
const andares = document.getElementById("andares");
const quartos = document.getElementById("quartos");
const terreo = document.getElementById("terreo");
const superior = document.getElementById("superior");
const garagem = document.getElementById("garagem");
const gourmet = document.getElementById("gourmet");
const descricao = document.getElementById("descricao");
const vendas = document.getElementById("vendas");
const linkv = document.getElementById("linkv");
const btCriarNovo = document.getElementById("btCriarNovo");
const btLimpar = document.getElementById("btLimpar");
const listaCampo = document.getElementById("listaCampo");
var valorEnviado = {};
btCriarNovo.onclick = function () {
  checagem();
  if (form.querySelectorAll(".corpo_errado").length == 0) {
    var valorEnviado = {
      nome: nome.value,
      largura: Number(largura.value),
      comprimento: Number(comprimento.value),
      andares: Number(andares.value),
      quartos: Number(quartos.value),
      terreo: Number(terreo.value),
      superior: Number(superior.value),
      garagem: Number(garagem.value),
      gourmet: Number(gourmet.value),
      descricao: descricao.value,
      vendas: Number(vendas.value),
      linkv: linkv.value,
    };

    fetch("https://martinprojetos-development.up.railway.app/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valorEnviado), // Convertendo o objeto para uma string JSON
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Vai exibir "Dados recebidos com sucesso!"
        location.reload();
        alert(data);
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
      });
  }
};
btLimpar.onclick = function () {
  id.value = "";
  nome.value = "";
  largura.value = "";
  comprimento.value = "";
  andares.value = "";
  quartos.value = "";
  terreo.value = "";
  superior.value = "";
  garagem.value = "";
  gourmet.value = "";
  descricao.value = "";
  vendas.value = "";
  linkv.value = "";
};
btAtualizar.onclick = function () {
  checagem();
  if (form.querySelectorAll(".corpo_errado").length == 0) {
    var valorEnviado = {
      id: id.value,
      nome: nome.value,
      largura: Number(largura.value),
      comprimento: Number(comprimento.value),
      andares: Number(andares.value),
      quartos: Number(quartos.value),
      terreo: Number(terreo.value),
      superior: Number(superior.value),
      garagem: Number(garagem.value),
      gourmet: Number(gourmet.value),
      descricao: descricao.value,
      vendas: Number(vendas.value),
      linkv: linkv.value,
    };

    fetch("https://martinprojetos-development.up.railway.app/message", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valorEnviado), // Convertendo o objeto para uma string JSON
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data); // Vai exibir "Dados recebidos com sucesso!"
        location.reload();
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
      });
  }
};
btDeletar.onclick = function () {
  var valorEnviado = {
    id: id.value,
  };

  fetch("https://martinprojetos-development.up.railway.app/message", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(valorEnviado), // Convertendo o objeto para uma string JSON
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data); // Vai exibir "Dados recebidos com sucesso!"
      location.reload();
    })
    .catch((error) => {
      console.error("Erro ao enviar os dados:", error);
    });
};
function fetchAPI(URL) {
  fetch(URL)
    .then((response) => {
      // Verifica se a requisição foi bem sucedida
      if (!response.ok) {
        throw new Error("Erro na rede ou na resposta da requisição.");
      }

      return response.json(); // Parseia a resposta para JSON
    })
    .then((dados) => {
      // Use seus dados aqui

      carrega(dados);
    });
}

function carrega(dados) {
  dados.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  });
  contagem.innerText = "Total: " + dados.length + " Projetos";
  for (let i = 0; i < dados.length; i++) {
    var botao = document.createElement("button");
    botao.classList = "corNaoSelecionado";
    botao.innerText =
      dados[i].nome + " " + dados[i].largura + "x" + dados[i].comprimento;
    listaCampo.appendChild(botao);
    botao.value = i;
    botao.id = "btLargura" + i;

    botao.onclick = function (event) {
      for (let i = 0; i < dados.length; i++) {
        document.getElementById("btLargura" + i).classList =
          "corNaoSelecionado";
      }
      if (event.target.classList == "corNaoSelecionado") {
        event.target.classList = "corSelecionado";
      } else {
        event.target.classList = "corNaoSelecionado";
      }
      nome.innerText = event.target.id;
      id.value = dados[i]._id;
      nome.value = dados[i].nome;
      largura.value = dados[i].largura;
      comprimento.value = dados[i].comprimento;
      andares.value = dados[i].andares;
      quartos.value = dados[i].quartos;
      terreo.value = dados[i].terreo;
      superior.value = dados[i].superior;
      garagem.value = dados[i].garagem;
      gourmet.value = dados[i].gourmet;
      descricao.value = dados[i].descricao;
      vendas.value = dados[i].vendas;
      linkv.value = dados[i].linkv;
    };
  }
}
// id: id.value,
//     nome: nome.value,
//     largura: Number(largura.value),
//     comprimento: Number(comprimento.value),
//     andares: Number(andares.value),
//     quartos: Number(quartos.value),
//     terreo: Number(terreo.value),
//     superior: Number(superior.value),
//     garagem: Number(garagem.value),
//     gourmet: Number(gourmet.value),
//     descricao: descricao.value,
//     vendas: Number(vendas.value),
//     linkv: linkv.value,
function checagem() {
  if (nome.value === "") {
    errado(nome, "Campo Obrigatório");
  } else if (nome.value.length < 3) {
    errado(nome, "Minimo 3 caracteres");
  } else {
    correto(nome);
  }
  if (largura.value === "") {
    errado(largura, "Campo Obrigatório");
  } else if (largura.value > 20) {
    errado(largura, "Largura Exagerada");
  } else if (isNaN(largura.value)) {
    errado(largura, "Deve ser Numero");
  } else {
    correto(largura);
  }
  if (comprimento.value === "") {
    errado(comprimento, "Campo Obrigatório");
  } else if (comprimento.value > 100) {
    errado(comprimento, "Comprimento Exagerado");
  } else if (isNaN(comprimento.value)) {
    errado(comprimento, "Deve ser Numero");
  } else {
    correto(comprimento);
  }
  if (andares.value === "") {
    andares.value = 1;
  }
  if (quartos.value === "") {
    quartos.value = 3;
  } else if (quartos.value > 5) {
    errado(quartos, "Maximo 5");
  } else {
    correto(quartos);
  }
  if (terreo.value === "") {
    errado(terreo, "Campo Obrigatório");
  } else if (terreo.value > 500) {
    errado(terreo, "Area Exagerada");
  } else if (isNaN(terreo.value)) {
    errado(terreo, "Deve ser Numero");
  } else {
    correto(terreo);
  }
  if (superior.value === "") {
    superior.value = 0;
    andares.value = 1;
  }
  if (garagem.value === "") {
    garagem.value = 0;
  }
  if (gourmet.value === "") {
    gourmet.value = 0;
  }
  if (descricao.value === "") {
    errado(descricao, "Campo Obrigatório");
  } else if (descricao.value.length > 350) {
    errado(descricao, "Máximo 500 caracteres");
  } else if (descricao.value.length < 100) {
    errado(descricao, "Mímino 50 caracteres");
  } else {
    correto(descricao);
  }
  if (vendas.value === "") {
    vendas.value = 2;
  } else if (vendas.value > 3) {
    errado(vendas, "Permitido 1, 2 ou 3");
  } else if (isNaN(vendas.value)) {
    errado(vendas, "Deve ser Numero");
  } else {
    correto(vendas);
  }
}
function errado(valor, menssagem) {
  const vermelho = valor.parentElement.querySelector("a");
  valor.className = "borda_errado";
  vermelho.className = "corpo_errado";
  vermelho.innerText = menssagem;
}
function correto(valor) {
  const vermelho = valor.parentElement.querySelector("a");
  valor.className = "borda";
  vermelho.className = "corpo";
}
//servidor:
//https://martinprojetos-development.up.railway.app/arquivo
//DEV
//http://localhost:3000/arquivo
fetchAPI("https://martinprojetos-development.up.railway.app/arquivo");
