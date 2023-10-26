const divFachada = document.getElementById("divFachada");
const matrizF = JSON.parse(localStorage.getItem("projetoEscolhido"));
console.log(matrizF);
var areaTotal =
  Number(matrizF.terreo) + Number(matrizF.garagem) + Number(matrizF.superior);
var vendasDesc;
const estrela = document.createElement("img");
estrela.src = "../icons/estrela.png";

if (matrizF.vendas === 3) {
  vendasDesc = "Versão 4.0 - Campeão de Vendas";
} else if (matrizF.vendas === 2) {
  vendasDesc = "Versão 3.0 ";
} else {
  vendasDesc = "Versão 2.0";
}
var descrFinal = 0;
descrFinal =
  "Projeto: " +
  matrizF.nome +
  "  " +
  matrizF.largura +
  " x " +
  matrizF.comprimento +
  " - " +
  vendasDesc;

let indice = 0;

function escreverCaractere() {
  if (indice < descrFinal.length) {
    divDescricao1.textContent += descrFinal.charAt(indice);
    indice++;

    setTimeout(escreverCaractere, 15); // Ajuste o tempo (em milissegundos) conforme necessário
  }
}

escreverCaractere();

divDescricao2.innerHTML =
  " <br>Quadro de Áreas: <br><b>Casa " +
  matrizF.terreo +
  " m²<br> Garagem: " +
  matrizF.garagem +
  " m² <br>A. Gourmet: " +
  matrizF.gourmet +
  " m² <br>Pav. Superior: " +
  matrizF.superior +
  " m² <br> Area Total <b>" +
  areaTotal +
  " m² (sem Área Gourmet)";
divDescricao3.innerHTML = matrizF.descricao;
//VIDEO FACHADA

fachada_interna.style.backgroundImage =
  "url(../img/fachadas/" + matrizF._id + ".png)";
fachada_interna.style.backgroundSize = "cover";
fachada_interna.style.backgroundRepeat = "no-repeat";

divHumanizada.style.backgroundImage =
  "url(../img/humanizadas/" + matrizF._id + ".png)";
divHumanizada.style.backgroundSize = "cover";
divHumanizada.style.backgroundRepeat = "no-repeat";
var iframe = document.createElement("iframe");
//https://www.youtube.com/embed/yHK-LxQ3Slk?si=bb3uiXCGnqJXl-F6
//https://www.youtube.com/embed/olm-3fCXb3s?si=aClRjUHso2Nj7U7t
var linkN = "https://www.youtube.com/embed/" + matrizF.linkv;
iframe.setAttribute("src", linkN);
iframe.setAttribute("name", "Hello");
iframe.setAttribute("id", "frame");
iframe.setAttribute("title", "YoutTube Player");
iframe.style.width = 100 + "%";
iframe.style.height = 100 + "%";
divIframe.appendChild(iframe);
var espelharImagem = document.getElementById("espelharImagem");
espelharImagem.onclick = function () {
  espelharImagem2();
};
function espelharImagem2() {
  const fachada_interna = document.getElementById("fachada_interna");

  if (fachada_interna.style.transform === "scaleX(-1)") {
    fachada_interna.style.transform = "scaleX(1)";
    espelharImagem.innerHTML = "Click para Espelhar o lado - Lado: A";
  } else {
    fachada_interna.style.transform = "scaleX(-1)";
    espelharImagem.innerHTML = "Click para Espelhar o lado - Lado: B";
  }
}
fachada_interna.onclick = function () {
  aumentarImagem2();
};
function aumentarImagem2() {
  const imagemF = document.getElementById("divFachada");

  if (imagemF.style.transform === "scale(1.6)") {
    imagemF.style.transform = "scale(1)";
  } else {
    imagemF.style.transform = "scale(1.6)";
  }
}
divHumanizada.onclick = function () {
  aumentarImagem();
};
function aumentarImagem() {
  const imagemF = document.getElementById("divHumanizada");

  if (imagemF.style.transform === "scale(1.6)") {
    imagemF.style.transform = "scale(1)";
  } else {
    imagemF.style.transform = "scale(1.6)";
  }
}
