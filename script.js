
//creamos la vocal aleatoria para el juego
let vocales =["A", "E", "I", "O", "U"];
let random = Math.round(Math.random()*(4-0)+0)
let vocal = vocales[random]
let palabras = [];


//insertamos en el html la vocal
const vocalid = document.getElementById('vocal');
const p = document.createElement('p');
p.append(vocal+" ?");
vocalid.appendChild(p)


//creamos las constantes para capturar los IDs del html y traerlos a js
const lista = document.getElementById('lista');
const elemento = document.getElementById('elemento');
const agregar = document.getElementById('agregar');
const terminar = document.getElementById('terminar');


//creamos una instruccion para cuando se haga click en el boton de agregar pinte un elemento en la lista
agregar.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.append(elemento.value);
    lista.appendChild(li);
    palabras.push(elemento.value);
})


/*  
    creamos una instruccion para cuando se haga click en el boton de terminar borre la lista y nos diga cuantos
    aciertos tenemos
*/
const recuento = document.getElementById('recuento');


terminar.addEventListener('click',()=>{
    
    let aciertos = [];
    for(let i =0; i<palabras.length; i++){
        if(aciertos.indexOf(palabras[i])==-1 && (palabras[i][0]==vocal ||palabras[i][0]==vocal.toLowerCase())){
            aciertos.push(palabras[i]);
        }
    }
    const r = document.createElement('p');
    r.append("Acertaste "+aciertos.length+" palabras:"+"\n"+aciertos);
    recuento.appendChild(r)

    while(lista.hasChildNodes()){
        lista.removeChild(lista.firstChild)
    }
})

//creamos el boton de empezar para generar otra vocal y limpiar el historial
const refrescar = document.getElementById('refrescar')
refrescar.addEventListener('click',()=>{
    while(recuento.hasChildNodes()){
        recuento.removeChild(recuento.firstChild);
    }
    while(vocalid.hasChildNodes()){
        vocalid.removeChild(vocalid.firstChild);
    }
   
    random = Math.round(Math.random()*(4-0)+0);
    vocal = vocales[random];
    const p1 = document.createElement('p');
    p1.append(vocal+" ?");
    vocalid.appendChild(p1);
    
})




