let textoNingun = document.querySelector("h1");
textoNingun.innerHTML = "Ningún mensaje fue encontrado"; 

function ocultar(id, estado){
    if(estado == true){
        var elemento = document.getElementById(id);
        elemento.style.display = "none";
    }
}

ocultar("textoEncriptado", false);
ocultar("muneco", true);
ocultar("texto-ningun", true);
ocultar("boton-copiar", false);