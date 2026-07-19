const texto = document.getElementById("texto");
const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");
const boton2 = document.getElementById("boton2");
const parrafo2 = document.getElementById("parrafo2");
const boton3 = document.createElement(`button`);
boton3.innerText = "siguiente";
boton.addEventListener(`click`, function() {
    boton.replaceWith(boton3);
    texto.innerText = "increible bro as presionado el boton";
    boton.innerText = "ya no puedes presionar este boton";
    parrafo.innerText = "Bienvenido a esta nueva pagina web, espero que te guste y que la disfrutes mucho, gracias por visitar mi pagina web";

});
boton3.addEventListener(`click`, function() {
    parrafo.innerText ="";
    parrafo2.innerText = "has presionado nuevamente  el boton";
});
boton2.addEventListener(`click`, function() {
    texto.innerText = "hola mundo";
    parrafo.innerText = "";
    boton.innerText = "cambiar texto";
    parrafo2.innerText = "";
});
    