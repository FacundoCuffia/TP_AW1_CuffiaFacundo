//Este script es el que maneja todo el documento propiedades.
import propiedades from "./propiedades.js"

//Propiedades es el id del contenedor donde voy a poner algo
const casa = document.getElementById("casa__contenedor");
const depto = document.getElementById("deptos__contenedor");
const lodge = document.getElementById("lodges__contenedor");

let htmlARenderizarA = "";
let htmlARenderizarB = "";
let htmlARenderizarC = "";

propiedades.propiedad.forEach((item)=>{
    switch(item.idCategoria){
        case 1:
            htmlARenderizarA += `<div class="casa__prop">
                <figure class="casa__prop__imagen">
                    <img src="${item.foto}" alt="casa_1" height="400">
                </figure>
                <p class="casa__prop__nombre">${item.nombre}</p>
                <p class="casa__prop__precio">${item.precio}</p>
                <p class="casa__prop__descripcion">${item.descripcion}</p>
                </div>`
            break;
        case 2:
            htmlARenderizarB += `<div class="deptos__prop">
                <figure class="deptos__prop__imagen">
                    <img src="${item.foto}" alt="casa_1" height="400">
                </figure>
                <p class="deptos__prop__nombre">${item.nombre}</p>
                <p class="deptos__prop__precio">${item.precio}</p>
                <p class="deptos__prop__descripcion">${item.descripcion}</p>
                </div>`
            break;
        case 3:
            htmlARenderizarC += `<div class="lodges__prop">
                <figure class="lodges__prop__imagen">
                    <img src="${item.foto}" alt="casa_1" height="400">
                </figure>
                <p class="lodges__prop__nombre">${item.nombre}</p>
                <p class="lodges__prop__precio">${item.precio}</p>
                <p class="lodges__prop__descripcion">${item.descripcion}</p>
                </div>`
            break;
    }
});

casa.innerHTML =  htmlARenderizarA;
depto.innerHTML =  htmlARenderizarB;
lodge.innerHTML =  htmlARenderizarC;