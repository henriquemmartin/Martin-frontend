const menuAparece1 = document.getElementById("menuAparece1");
const menuAparece2 = document.getElementById("menuAparece2");
menuAparece1.classList = "visible";
const avanca = document.getElementById("avanca");
const reduz = document.getElementById("reduz");
avanca.classList = "hidden";

menuAparece2.addEventListener("click", function () {
  if (menuAparece1.classList == "visible") {
    menuAparece1.classList = "hidden";
    reduz.classList = "hidden";
    avanca.classList = "visible";
  } else {
    menuAparece1.classList = "visible";
    reduz.classList = "visible";
    avanca.classList = "hidden";
  }
});
