
const $personajes=document.querySelector(".personajes")
const html=document.implementation.createHTMLDocument();
async function load(){
  
    for (let i = 1; i <=300; i++) {
        var personaje20=await llamarPersonaje(i);
        
 }
}
async function llamarPersonaje(id){
    const data=await fetch("https://rickandmortyapi.com/api/character/".concat(id))
    const personaje= await data.json()
    const parametro=personaje.image

    let template=`<div class="hover">
    <img src="${parametro}" alt="">
    
    </div>`
 
    html.body.innerHTML=template;
    $personajes.append(html.body.children[0])
}
load()





