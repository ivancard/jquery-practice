$(".bxslider").bxSlider({
  mode: "fade",
  captions: false,
  slideWidth: 1200,
  infiniteLoop: true,
});

let posts = [
  {
    title: "Prueba de titulo 1",
    date: `Publicado el día ${moment().format("dddd")} ${moment().format(
      "DD"
    )} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste, nulla ea aliquid illo
        consequuntur odio perferendis modi nisi ad minus ipsam veniam beatae, maxime ducimus deserunt
        laborum quos asperiores explicabo maiores, magnam molestias corporis eveniet! Incidunt, suscipit
        deleniti commodi est assumenda a doloremque optio natus earum? Mollitia, quibusdam consectetur?`,
  },
  {
    title: "Prueba de titulo 2",
    date: `Publicado el día ${moment().format("dddd")} ${moment().format(
      "DD"
    )} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste, nulla ea aliquid illo
        consequuntur odio perferendis modi nisi ad minus ipsam veniam beatae, maxime ducimus deserunt
        laborum quos asperiores explicabo maiores, magnam molestias corporis eveniet! Incidunt, suscipit
        deleniti commodi est assumenda a doloremque optio natus earum? Mollitia, quibusdam consectetur?`,
  },
  {
    title: "Prueba de titulo 3",
    date: `Publicado el día ${moment().format("dddd")} ${moment().format(
      "DD"
    )} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste, nulla ea aliquid illo
        consequuntur odio perferendis modi nisi ad minus ipsam veniam beatae, maxime ducimus deserunt
        laborum quos asperiores explicabo maiores, magnam molestias corporis eveniet! Incidunt, suscipit
        deleniti commodi est assumenda a doloremque optio natus earum? Mollitia, quibusdam consectetur?`,
  },
  {
    title: "Prueba de titulo 4",
    date: `Publicado el día ${moment().format("dddd")} ${moment().format(
      "DD"
    )} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste, nulla ea aliquid illo
        consequuntur odio perferendis modi nisi ad minus ipsam veniam beatae, maxime ducimus deserunt
        laborum quos asperiores explicabo maiores, magnam molestias corporis eveniet! Incidunt, suscipit
        deleniti commodi est assumenda a doloremque optio natus earum? Mollitia, quibusdam consectetur?`,
  },
  {
    title: "Prueba de titulo 5",
    date: `Publicado el día ${moment().format("dddd")} ${moment().format(
      "DD"
    )} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste, nulla ea aliquid illo
        consequuntur odio perferendis modi nisi ad minus ipsam veniam beatae, maxime ducimus deserunt
        laborum quos asperiores explicabo maiores, magnam molestias corporis eveniet! Incidunt, suscipit
        deleniti commodi est assumenda a doloremque optio natus earum? Mollitia, quibusdam consectetur?`,
  },
];

posts.forEach((element, index) => {
  let post = `
    <article class="articulo">
                    <h2>${element.title}</h2>
                    <span class="date">${element.date}</span>
                    <p>${element.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
    `;
  $("#posts").append(post);
});

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
