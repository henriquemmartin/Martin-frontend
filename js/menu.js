const menuAparece1 = document.getElementById("menuAparece1");
const menuAparece2 = document.getElementById("menuAparece2");
const menu3 = document.getElementById("menu3");

menuAparece2.addEventListener("click", function () {
  if (menuAparece1.classList == "visible") {
    alert("ok");
  } else {
    alert("ok");
    menu3.style.background = "aquamarine";
  }
});
// .menuAparece2 {
//   display: block;
//   margin-top: 80px;
//   margin-left: 5px;
// }
// .menu {
//   width: 50px;
// }
// .menu a {
//   display: none;
// }
// .bt-menu0 {
//   display: none;
// }
// .bt-menu {
//   display: none;
// }
