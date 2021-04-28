/* SELECTOR DE TEMAS */
const theme = $("#theme");

theme.attr("href", localStorage.getItem("tema"));

$("#to-green").click(function () {
  localStorage.setItem("tema", "css/green.css");
  theme.attr("href", localStorage.getItem("tema"));
});
$("#to-red").click(function () {
  localStorage.setItem("tema", "css/red.css");
  theme.attr("href", localStorage.getItem("tema"));
});
$("#to-blue").click(function () {
  localStorage.setItem("tema", "css/blue.css");
  theme.attr("href", localStorage.getItem("tema"));
});

/* SCROLL ARRIBA DE LA WEB */
$("#subir").click(function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

/* LOGIN FALSO */
$(".login form").submit(function (e) {
  e.preventDefault();
  location.reload();
  let formName = $("#form-name").val();
  localStorage.setItem("usuario", formName);
});

let formName = localStorage.getItem("usuario");

if (formName != null && formName != undefined) {
  let aboutParrafo = $("#about p");
  aboutParrafo.html(`<strong class="nombre">Bienvenido, ${formName}</strong>`);
  aboutParrafo.append("<a href='#' id='logOut'>Cerrar sesión</a>");

  $(".login").hide();

  $("#logOut").click(function () {
    localStorage.removeItem("usuario");
    location.reload();
  });
} else {
  $("#about p").html(
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, nostrum!`
  );
}
