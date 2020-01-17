
const $personajes=document.querySelector(".personajes")
const html=document.implementation.createHTMLDocument();
async function load(){
  
    for (let i = 1; i < 200; i++) {
        var personaje20=await llamarPersonaje(i);
        
 }
}
async function llamarPersonaje(id){
    const data=await fetch("https://rickandmortyapi.com/api/character/".concat(id))
    const personaje= await data.json()
    const parametro=personaje.image

    let template=`<img src="${parametro}" alt="">`
 
    html.body.innerHTML=template;
    $personajes.append(html.body.children[0])
}
load()





