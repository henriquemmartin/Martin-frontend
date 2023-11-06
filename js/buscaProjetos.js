const centralCards = document.getElementById("centralCards");
divLargura = document.getElementById("divLargura");

function fetchAPI(URL) {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na rede ou na resposta da requisição.");
      }

      return response.json();
    })
    .then((dados) => {
      carrega(dados);
    });
}
function carrega(dados) {
  dados.sort((a, b) => {
    if (a.vendas > b.vendas) {
      return -1;
    }
    if (a.vendas < b.vendas) {
      return 1;
    }
    return 0;
  });
  var matrizLarguraReal = [];
  let b = 0;
  for (let i = 0; i < 101; i++) {
    function contem(arr) {
      return arr.includes(true);
    }
    const larguras = dados.map((largura) => largura.largura == i);

    if (contem(larguras) == true) {
      matrizLarguraReal[b] = i;
      b = b + 1;
    }
  }
  //CRIA OS BOTOES DE ESCOLHA DE LARGURA-----------------
  for (let i = 0; i < matrizLarguraReal.length; i++) {
    var btLargura = document.createElement("button");
    btLargura.innerText = matrizLarguraReal[i] + "m";
    divLargura.appendChild(btLargura);
    btLargura.value = i;
    btLargura.addEventListener(
      "click",
      (function (nome) {
        return function () {
          url3 = "index.html?larguraTerreno=" + matrizLarguraReal[i];
          window.location = url3;
        };
      })(nomeDaDiv)
    );
  }
  var btLarguraS = document.createElement("button");

  btLarguraS.innerHTML = " Mais Vendidos <b>✰</b>";
  btLarguraS.style.width = "160px";
  divLargura.appendChild(btLarguraS);
  btLarguraS.onclick = function () {
    window.location = "../index.html";
  };
  var larguraSelecionada = [];
  //CRIA OS CARDS AO ENTRAR-----------------------------
  var larguraTerreno = getParameterByName("larguraTerreno");
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  if (larguraTerreno == "maisVendidos") {
    larguraSelecionada = dados.filter((vendas) => vendas.vendas == 3);
  } else {
    larguraSelecionada = dados.filter(
      (vendas) => vendas.largura == larguraTerreno
    );
  }
  centralCards.innerText = "";

  for (var i = 0; i < larguraSelecionada.length; i++) {
    var cards = document.createElement("div");
    var nomeDaDiv = i;
    const card1 = document.createElement("div");
    card1.classList = "card-1";
    const card1esquerda = document.createElement("div");
    card1esquerda.classList = "card-1-esquerda";
    const card1direita = document.createElement("div");
    card1direita.classList = "card-1-direita";
    const fachada = document.createElement("img");
    const humanizada = document.createElement("img");
    if (larguraSelecionada[i].vendas == 3) {
      var estrela = document.createElement("img");
      estrela.src = "../icons/star_FILL0_wght400_GRAD0_opsz24.png";
      estrela.style.width = "24px";
      estrela.style.height = "24px";
      card1esquerda.appendChild(estrela);
    }

    card1.appendChild(card1esquerda);

    var areaTotal2 =
      Number(larguraSelecionada[i].terreo) +
      Number(larguraSelecionada[i].garagem) +
      Number(larguraSelecionada[i].superior);
    descricao =
      "<b>" +
      larguraSelecionada[i].nome +
      "</b> " +
      larguraSelecionada[i].largura +
      "x" +
      larguraSelecionada[i].comprimento +
      "<br> Área: " +
      areaTotal2 +
      "m² - " +
      larguraSelecionada[i].quartos +
      " Quartos";

    card1direita.innerHTML = descricao;

    card1.appendChild(card1direita);
    cards.appendChild(card1);
    fachada.src = "../img/fachadas/" + larguraSelecionada[i]._id + ".png";
    fachada.style.width = "300px";
    cards.appendChild(fachada);
    cards.classList = "cards";
    centralCards.appendChild(cards);
    humanizada.src = "../img/humanizadas/" + larguraSelecionada[i]._id + ".png";
    humanizada.style.width = "300px";
    cards.appendChild(humanizada);
    var descricao =
      larguraSelecionada[i].nome +
      " " +
      larguraSelecionada[i].largura +
      "x" +
      larguraSelecionada[i].comprimento;
    cards.addEventListener(
      "click",
      (function (nome) {
        return function () {
          url2 =
            "../html/buscaProjetoEscolhido.html?projeto=" +
            larguraSelecionada[nome]._id;

          window.location = url2;
        };
      })(nomeDaDiv)
    );
  }
}

fetchAPI("https://martinprojetos-development.up.railway.app/arquivo");
