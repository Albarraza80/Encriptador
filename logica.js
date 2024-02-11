condicionesIniciales();

function condicionesIniciales(){
    mostrar( "muneco", true );
    mostrar( "texto-ningun", true );
    mostrar( "textoEncriptado", false );
    mostrar( "boton-copiar", false );
}

function condicionesEncriptado(){
    mostrar( "muneco", false );
    mostrar( "texto-ningun", false );
    mostrar( "textoEncriptado", true );
    mostrar( "boton-copiar", true );
    limpiarCaja( "textoUsuario" );
}

function encriptador(){
    let escrito = [];
    let encriptado = [];

    escrito = document.getElementById( "textoUsuario" ).value;
    encriptado = encriptar( escrito );
    asignarTextoElemento( "textoEncriptado", encriptado );
    condicionesEncriptado();
}

function desencriptador(){
    let escrito = [];
    let desencriptado = [];

    escrito = document.getElementById( "textoUsuario" ).value;
    desencriptado = desencriptar( escrito );
    asignarTextoElemento( "textoEncriptado", "" );
    asignarTextoElemento( "textoEncriptado", desencriptado );
    condicionesEncriptado();
}

function desencriptar( textoUsuario ){
    let desencriptado = [];
    let tamano = 0;

    tamano = textoUsuario.length;

    for( let i = 0; i < tamano; i++ ){
        switch (textoUsuario[ i ]){
            case 'a':
                desencriptado += 'a'
                i += 1;
                break;
            case 'e':
                desencriptado += 'e'
                i += 4;
                break;
            case 'i':
                desencriptado += 'i'
                i += 3;
                break;
            case 'o':
                desencriptado += 'o'
                i += 3;
                break;
            case 'u':
                desencriptado += 'u'
                i += 3;
                break;
            default:
                desencriptado += textoUsuario[ i ];
                break;
        }
    }
    return( desencriptado );
}

function encriptar( textoUsuario ){
    let encriptado = [];
    let tamano = 0;

    tamano = textoUsuario.length;

    for( let i = 0; i < tamano; i++ ){
        switch (textoUsuario[ i ]){
            case 'a':
                encriptado += textoUsuario[ i ].replace( 'a', 'ai' );
                break;
            case 'e':
                encriptado += textoUsuario[ i ].replace( 'e', 'enter' );
                break;
            case 'i':
                encriptado += textoUsuario[ i ].replace( 'i', 'imes' );
                break;
            case 'o':
                encriptado += textoUsuario[ i ].replace( 'o', 'ober' );
                break;
            case 'u':
                encriptado += textoUsuario[ i ].replace( 'u', 'ufat' );
                break;
            default:
                encriptado += textoUsuario[ i ];
                break;
        }
    }
    return( encriptado );
}

function mostrar( id, estado ){
    let elemento = false;

    if( estado == false ){
        elemento = document.getElementById(id);
        elemento.style.display = "none";
    }
    else{
        if( estado == true ){
            elemento = document.getElementById(id);
            elemento.style.display = "";
        }
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja( clase ) {
    document.getElementById( clase ).value = '';
}

const copia = document.querySelector(".copiado"); 
    copia.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoEncriptado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
    condicionesIniciales();
});

/*function botonCopiar(){
    document.getElementById( "textoEncriptado" ).innerHTML = "";
}*/