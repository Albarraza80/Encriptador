
condicionesIniciales();

function condicionesIniciales(){
    ocultar("textoEncriptado", true);
    ocultar("muneco", true);
    ocultar("texto-ningun", true);
    ocultar("boton-copiar", true);
}

function encriptador(){

}

function encriptar( textoUsuario ){
    let encriptado = [];
    let textoUsuario = [];
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
    alert(encriptado);
    return(encriptado);
}

function ocultar(id, estado){
    if(estado == true){
        var elemento = document.getElementById(id);
        elemento.style.display = "none";
    }
}