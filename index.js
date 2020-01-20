
const $personajes=document.querySelector(".personajes")
const html=document.implementation.createHTMLDocument();
async function load(){
  
    for (let i = 1; i <=300; i++) {
        var personaje20=await llamarPersonaje(i);
        var escucha=await escuchar(i)
 }
}
async function llamarPersonaje(id){
    const data=await fetch("https://rickandmortyapi.com/api/character/".concat(id))
    const personaje= await data.json()
    const parametro=personaje.image
    const nombre=personaje.name
    const status=personaje.status
    const especie=personaje.species
    let template=`<div class="hover" id="${id}">
    <img src="${parametro}" alt="">
    <div class="informacion">
    <p>${nombre}</p>
    
    </div>
    </div>`
 
    html.body.innerHTML=template;
    $personajes.append(html.body.children[0])
}
load()






function escuchar(id){
var imagen_html=document.getElementById(id);
imagen_html.addEventListener("click",siFunciona);
 async function siFunciona(){
    const data=await fetch("https://rickandmortyapi.com/api/character/".concat(id));
    const data_json= await data.json();
    alert(data_json.name)
}

}





